"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

export async function ProductsCarousel({ products }: { products: any[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      opts={{
        align: "start",
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
            <Link
              href={`/product/${product.handle}`}
              className="relative h-full w-full"
            >
              <Card className="aspect-square flex flex-col justify-between">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <div className="relative aspect-square h-auto w-full overflow-hidden">
                    <Image
                      className="object-contain bg-background group-hover:scale-105 transition-all ease-in"
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src={product.featuredImage?.url}
                      alt={product.title}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-x-4">
                  <h3 className="line-clamp-1">{product.title}</h3>
                  <p className="font-bold whitespace-nowrap text-primary bg-primary-foreground rounded-full p-2">
                    {product.priceRange.maxVariantPrice.currencyCode}{" "}
                    {product.priceRange.maxVariantPrice.amount}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
  // return (
  //   <div className=" w-full overflow-x-auto scrollete pb-6 pt-1">
  //     <ul className="flex animate-carousel gap-4">
  //       {products.map((product: any, i: number) => (
  //         <li
  //           key={`${product.handle}${i}`}
  //           className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
  //         >
  //           <Link
  //             href={`/product/${product.handle}`}
  //             className="relative h-full w-full"
  //           >
  //             <GridTileImage
  //               alt={product.title}
  //               label={{
  //                 title: product.title,
  //                 amount: product.priceRange.maxVariantPrice.amount,
  //                 currencyCode: product.priceRange.maxVariantPrice.currencyCode,
  //               }}
  //               src={product.featuredImage?.url}
  //               fill
  //               sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
  //             />
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
