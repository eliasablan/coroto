import { Suspense } from 'react'
import { Product } from '@/lib/shopify/types'

import { VariantSelector } from './VariantSelector'
import { AddToCart } from '@/components/cart/AddToCart'
import Prose from '@/components/prose'

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-4 flex items-end justify-between gap-4 border-b pb-4">
        <h1 className="text-pretty text-3xl font-bold">{product.title}</h1>
        <div className="w-auto rounded-full">
          <p className="whitespace-nowrap rounded-full border bg-primary-foreground p-2 font-bold text-primary">
            {product.priceRange.maxVariantPrice.currencyCode
              ? '$'
              : product.priceRange.maxVariantPrice.currencyCode}{' '}
            {product.priceRange.maxVariantPrice.amount}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <Suspense fallback={null}>
          <VariantSelector
            options={product.options}
            variants={product.variants}
          />
        </Suspense>
      </div>

      {product.descriptionHtml ? (
        <Prose
          className="mb-4 text-sm leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}

      <Suspense fallback={null}>
        <AddToCart
          variants={product.variants}
          availableForSale={product.availableForSale}
        />
      </Suspense>
    </>
  )
}
