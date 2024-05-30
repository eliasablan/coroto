import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import Grid from "@/components/grid";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            href={`/product/${product.handle}`}
            className="group inline-block relative h-auto w-full"
          >
            <Card className="aspect-auto flex flex-col justify-between h-full">
              <CardContent className="flex items-center justify-center p-6 h-full">
                <div className="relative aspect-square h-auto w-full overflow-hidden">
                  <Image
                    className="object-contain bg-background group-hover:scale-105 transition-all ease-in h-auto"
                    fill
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
        </Grid.Item>
      ))}
    </>
  );
}
