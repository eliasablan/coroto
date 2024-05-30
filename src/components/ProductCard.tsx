import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/shopify/types'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function ProductCard({
  product,
  className,
  ...props
}: { product: Product; className?: string } & React.ComponentProps<
  typeof Image
>) {
  return (
    <Link
      href={`/product/${product.handle}`}
      className={cn('group relative h-auto w-full', className)}
    >
      <Card className="flex aspect-auto h-full flex-col justify-between">
        <CardContent className="flex h-full items-center justify-center p-4">
          <div className="relative aspect-square h-auto w-full overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript */}
            <Image
              className="h-auto bg-background object-contain transition-all ease-in group-hover:scale-105"
              fill
              {...props}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-x-1 p-4">
          <h3 className="line-clamp-1">{product.title}</h3>
          <p className="whitespace-nowrap rounded-full bg-primary-foreground p-2 font-bold text-primary">
            {product.priceRange.maxVariantPrice.currencyCode}{' '}
            {product.priceRange.maxVariantPrice.amount}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
