import { ProductsCarousel } from "@/components/carousel";
import { ThreeItemGrid } from "@/components/grid/three-items";
import { getCollectionProducts } from "@/lib/shopify";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function Home() {
  const carouselProducts = await getCollectionProducts({
    collection: "hidden-homepage-carousel",
  });

  return (
    <div className="container">
      <ThreeItemGrid />
      <h2 className="text-2xl font-semibold my-4">Productos destacados</h2>
      <ProductsCarousel products={carouselProducts} />
    </div>
  );
}
