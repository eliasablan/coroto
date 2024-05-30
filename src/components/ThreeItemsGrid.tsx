import ProductCard from './ProductCard'
import { Product } from '@/lib/shopify/types'

export default async function ThreeItemsGrid({
  products,
}: {
  products: Product[]
}) {
  if (!products[0] || !products[1] || !products[2]) return null

  const [firstProduct, secondProduct, thirdProduct] = products

  return (
    <section className="grid gap-4 pb-4 lg:grid-cols-6 lg:grid-rows-2">
      <div className="md:col-span-4 md:row-span-2">
        <ProductCard
          src={firstProduct.featuredImage?.url}
          alt={firstProduct.title}
          sizes="(min-width: 768px) 66vw, 100vw"
          product={firstProduct}
          priority={true}
        />
      </div>
      <div className="md:col-span-2 md:row-span-1">
        <ProductCard
          src={secondProduct.featuredImage?.url}
          alt={secondProduct.title}
          sizes="(min-width: 768px) 33vw, 100vw"
          product={secondProduct}
          priority={true}
        />
      </div>
      <div className="md:col-span-2 md:row-span-1">
        <ProductCard
          src={thirdProduct.featuredImage?.url}
          alt={thirdProduct.title}
          sizes="(min-width: 768px) 33vw, 100vw"
          product={thirdProduct}
        />
      </div>
    </section>
  )
}
