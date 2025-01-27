import { cn } from '@/lib/utils'
import ProductCard from './ProductCard'
import { Product } from '@/lib/shopify/types'

export default async function ThreeItemsGrid({
  products,
  className,
}: {
  products: Product[]
  className?: string
}) {
  if (!products[0] || !products[1] || !products[2]) return null

  const [firstProduct, secondProduct, thirdProduct] = products

  return (
    <section
      className={cn(
        'grid h-full gap-1 pb-4 md:grid-cols-6 md:grid-rows-2',
        className
      )}
    >
      <div className="md:col-span-4 md:row-span-2">
        <ProductCard
          src={firstProduct.featuredImage?.url}
          alt={firstProduct.title}
          sizes="(min-width: 768px) 66vw, 100vw"
          product={firstProduct}
          priority={true}
          className="h-full"
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
