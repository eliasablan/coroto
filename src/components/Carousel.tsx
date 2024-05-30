'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/lib/shopify/types'

export async function ProductsCarousel({
  products,
}: {
  products: Product[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseOver={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className="w-full px-2"
    >
      <CarouselContent className="-ml-1">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="group pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <ProductCard
              loading="lazy"
              product={product}
              src={product.featuredImage?.url}
              alt={product.title}
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  )
}
