import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { Gallery } from '@/components/Gallery'
import { ProductDescription } from '@/components/product/ProductDescription'
import { HIDDEN_PRODUCT_TAG } from '@/lib/constants'
import { getProduct, getProductRecommendations } from '@/lib/shopify'
import { Image as ShopifyImage } from '@/lib/shopify/types'
import { ProductsCarousel } from '@/components/Carousel'

export const runtime = 'edge'

export async function generateMetadata({
  params,
}: {
  params: { handle: string }
}): Promise<Metadata> {
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG)

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string }
}) {
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  const relatedProducts = await getProductRecommendations(product.id)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="container my-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-full w-full basis-full rounded-lg border p-4 md:basis-1/2">
            <Gallery
              images={product.images.map((image: ShopifyImage) => ({
                src: image.url,
                altText: image.altText,
              }))}
            />
          </div>
          <div className="m-8 h-full w-full basis-full rounded-lg border p-4 md:basis-1/2">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>
          <ProductsCarousel products={relatedProducts} />
        </Suspense>
      </div>
    </>
  )
}
