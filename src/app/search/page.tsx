import { defaultSort, sorting } from '@/lib/constants'
import { getProducts } from '@/lib/shopify'
import CatalogGrid from '@/components/CatalogGrid'

export const metadata = {
  title: 'Search in Coroto Store',
  description: 'Search your coroto (or product) in Coroto Store.',
}

export const runtime = 'edge'

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { sort, q: searchValue } = searchParams as {
    [key: string]: string
  }
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const products = await getProducts({
    sortKey,
    reverse,
    query: searchValue,
  })
  const resultsText = products.length > 1 ? 'results' : 'result'

  return (
    <section className="col-span-1 md:col-span-2">
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      <CatalogGrid products={products} />
    </section>
  )
}
