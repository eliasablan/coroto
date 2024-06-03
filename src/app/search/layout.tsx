import React, { Suspense } from 'react'
import { getCollections } from '@/lib/shopify'
import ScrollButton from '@/components/ScrollButton'
import SearchBar from '@/components/SearchBar'
import CatalogSorter from '@/components/CatalogSorter'
import CollectionFilter from '@/components/CollectionFilter'

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const collections = await getCollections()

  return (
    <>
      <div className="container sticky top-[51px] z-50 bg-background py-4">
        <SearchBar className="sticky top-[83px] z-50 flex items-center" />
      </div>

      <div className="container sticky mx-auto flex flex-col gap-8 py-4 md:flex-row">
        <div className="sticky top-[67px] order-first w-full flex-none md:max-w-[125px]">
          <CollectionFilter collections={collections} />
        </div>

        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>{children}</Suspense>
        </div>

        <div className="order-none flex-none md:order-last md:w-[125px]">
          <CatalogSorter />
        </div>
      </div>

      <ScrollButton />
    </>
  )
}
