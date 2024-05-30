import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCollection, getCollectionProducts } from '@/lib/shopify'

import { defaultSort, sorting } from '@/lib/constants'
import CatalogGrid from '@/components/CatalogGrid'

export async function generateMetadata({
  params,
}: {
  params: { collection: string }
}): Promise<Metadata> {
  const collection = await getCollection(params.collection)

  if (!collection) return notFound()

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { collection: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { sort } = searchParams as { [key: string]: string }
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  })

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <CatalogGrid products={products} />
      )}
    </section>
  )
}
