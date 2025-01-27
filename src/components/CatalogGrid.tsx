import React from 'react'
import { Product } from '@/lib/shopify/types'
import ProductCard from '@/components/ProductCard'

export default function CatalogGrid({
  products,
}: {
  products: Product[]
}) {
  if (products.length === 0) return null
  return (
    <ul className="grid grid-flow-row grid-cols-1 gap-1 transition-opacity sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li
          key={product.handle}
          className="animate-fadeIn transition-opacity"
        >
          <ProductCard
            tooltip={true}
            // className="w-full"
            product={product}
            src={product.featuredImage?.url}
            alt={product.title}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </li>
      ))}
    </ul>
  )
}
