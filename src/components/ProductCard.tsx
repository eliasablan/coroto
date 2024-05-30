import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
      className={cn("group relative h-auto w-full", className)}
    >
      <Card className="aspect-auto flex flex-col justify-between h-full">
        <CardContent className="flex items-center justify-center p-4 h-full">
          <div className="relative aspect-square h-auto w-full overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript */}
            <Image
              className="object-contain bg-background group-hover:scale-105 transition-all ease-in h-auto"
              fill
              {...props}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-x-1 p-4">
          <h3 className="line-clamp-1">{product.title}</h3>
          <p className="font-bold whitespace-nowrap text-primary bg-primary-foreground rounded-full p-2">
            {product.priceRange.maxVariantPrice.currencyCode}{" "}
            {product.priceRange.maxVariantPrice.amount}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
