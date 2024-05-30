import Image from "next/image";
import Link from "next/link";
import { getCollectionProducts } from "@/lib/shopify";
import type { Product } from "@/lib/shopify/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      )}
    >
      <Link
        href={`/product/${item.handle}`}
        className="group relative h-auto w-full"
      >
        <Card className="aspect-auto flex flex-col justify-between h-full">
          <CardContent className="flex items-center justify-center p-6 h-full">
            <div className="relative aspect-square h-auto w-full overflow-hidden">
              <Image
                className="object-contain bg-background group-hover:scale-105 transition-all ease-in h-auto"
                fill
                sizes={
                  size === "full"
                    ? "(min-width: 768px) 66vw, 100vw"
                    : "(min-width: 768px) 33vw, 100vw"
                }
                src={item.featuredImage?.url}
                alt={item.title}
                priority={priority}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-x-4">
            <h3 className="line-clamp-1">{item.title}</h3>
            <p className="font-bold whitespace-nowrap text-primary bg-primary-foreground rounded-full p-2">
              {item.priceRange.maxVariantPrice.currencyCode}{" "}
              {item.priceRange.maxVariantPrice.amount}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="grid gap-4 pb-4 lg:grid-cols-6 lg:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
