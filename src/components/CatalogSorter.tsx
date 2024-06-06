'use client'

import React from 'react'
import { sorting } from '@/lib/constants'
import { SortFilterItem } from '@/lib/constants'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// NEED-TO-FIX: Cuando modoficamos la coleccion seleccionada, no se actualiza el sorter
export default function CatalogSorter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <Select
      defaultValue={searchParams.get('sort') || ''}
      onValueChange={(value: string) => {
        if (!value) {
          router.replace(pathname)
        } else {
          router.replace(`${pathname}?sort=${value}`)
        }
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
  )
}
