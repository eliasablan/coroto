'use client'

import React, { Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'

type PathFilterItem = { title: string; path: string }

export default function CollectionFilter({
  collections,
}: {
  collections: PathFilterItem[]
}) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Suspense fallback={<Skeleton className="h-10 w-full rounded-full" />}>
      <Select
        defaultValue={pathname}
        onValueChange={(value: string) => {
          router.push(value)
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Collections" />
        </SelectTrigger>
        <SelectContent>
          {collections.map((item: PathFilterItem) => {
            return (
              <SelectItem key={item.path} value={item.path}>
                {item.title}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </Suspense>
  )
}
