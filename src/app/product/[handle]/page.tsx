import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { Gallery } from '@/components/product/Gallery'
import { ProductDescription } from '@/components/product/ProductDescription'
import { HIDDEN_PRODUCT_TAG } from '@/lib/constants'
import { getProduct, getProductRecommendations } from '@/lib/shopify'
import { Image as ShopifyImage } from '@/lib/shopify/types'
import GridTile from '@/components/GridTile'

export const runtime = 'edge'

export async function generateMetadata({
  params,
}: {
  params: { handle: string }
}): Promise<Metadata> {
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  const { url, width, height, altText: alt } = product.featuredImage || {}
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
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  }
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string }
}) {
  const product = await getProduct(params.handle)

  if (!product) return notFound()

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
          <div className="h-full w-full basis-full rounded-lg border p-4 md:basis-1/2">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>{/* <RelatedProducts id={product.id} /> */}</Suspense>
      </div>
    </>
  )
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id)

  if (!relatedProducts.length) return null

  return (
    <div className="py-8 md:py-12">
      <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
      <ul className="scrollbar scrollbar-track-charcoal scrollbar-thumb-indian-red flex w-full gap-8 overflow-x-auto pb-6">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="h-auto w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <GridTile
              product={product}
              className="transition duration-100 ease-in hover:opacity-70"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
