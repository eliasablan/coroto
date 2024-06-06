import React from 'react'
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
    <div className="container grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="sticky top-[51px] z-50 col-span-1 bg-background py-4 md:col-span-2">
        <SearchBar className="sticky top-[83px] z-50 flex items-center" />
      </div>
      <CollectionFilter collections={collections} />
      <CatalogSorter />
      {children}
      <ScrollButton />
    </div>
  )
}
