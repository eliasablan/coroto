import React from 'react'
import Collections from '@/components/layout/search/collections'
import FilterList from '@/components/layout/search/filter'
import { sorting } from '@/lib/constants'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import ScrollButton from '@/components/ScrollButton'

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="container sticky top-[51px] z-50 bg-background py-4 md:hidden">
        <div className="sticky top-[83px] z-50 flex items-center md:hidden">
          <Search className="absolute left-2.5 h-4 w-4 text-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded bg-background pl-9 placeholder:text-foreground"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-8 py-4 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <ScrollButton />
    </>
  )
}
