'use client'

import React, { Suspense } from 'react'
import { sorting } from '@/lib/constants'
import { SortFilterItem } from '@/lib/constants'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'

export default function CatalogSorter() {
  const searchParams = new URLSearchParams(window.location.search)

  return (
    <Suspense fallback={<Skeleton className="h-10 w-full rounded-full" />}>
      <Select
        defaultValue={searchParams?.get('sort') || ''}
        onValueChange={(value: string) => {
          searchParams.set('sort', value)
          window.location.search = searchParams.toString()
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent align="end">
          {sorting.map((item: SortFilterItem, i) => (
            <SelectItem key={i} value={item.slug!}>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Suspense>
  )
}
