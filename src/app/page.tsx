import ThreeItemsGrid from '@/components/ThreeItemsGrid'
import { ProductsCarousel } from '@/components/Carousel'
import { getCollectionProducts } from '@/lib/shopify'

export const metadata = {
  description: 'Get all kind of cool stuffs in Coroto Store.',
  openGraph: {
    type: 'website',
  },
}

export const runtime = 'edge'

export default async function Home() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const gridItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items',
  })
  const carouselProducts = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
  })

  return (
    <div className="container py-4">
      <h1 className="my-4 text-4xl font-bold">
        Welcome to Coroto Store 👋
      </h1>
      <ThreeItemsGrid products={gridItems} />
      <h2 className="my-4 text-2xl font-semibold">Featured corotos</h2>
      <ProductsCarousel products={carouselProducts} />
    </div>
  )
}
