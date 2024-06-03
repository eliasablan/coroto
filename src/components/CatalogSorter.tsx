'use client'
import React, { Suspense } from 'react'
import { sorting } from '@/lib/constants'
import { SortFilterItem } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import { createUrl, cn } from '@/lib/utils'
import Link from 'next/link'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function CatalogSorter() {
  const title = 'Sort by'
  const pathname = usePathname()!
  // const searchParams = useSearchParams()
  const searchParams = new URLSearchParams(window.location.search)

  const q = searchParams?.get('q')

  return (
    <>
      <nav className="sticky top-[139px]">
        {title ? (
          <h3 className="hidden text-xs text-muted-foreground md:block">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <Suspense fallback={null}>
            {sorting.map((item: SortFilterItem) => {
              const active = searchParams?.get('sort') === item.slug
              console.log({ active })
              const href = createUrl(
                pathname,
                new URLSearchParams({
                  ...(q && { q }),
                  ...(item.slug &&
                    item.slug.length && { sort: item.slug }),
                })
              )
              return (
                <li
                  className="mt-2 flex text-black dark:text-white"
                  key={item.title}
                >
                  <Link
                    prefetch={!active ? false : undefined}
                    href={href}
                    className={cn(
                      'w-full hover:underline hover:underline-offset-4',
                      active &&
                        'pointer-events-none underline underline-offset-4'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <div className="relative">
              <Select
                defaultValue={searchParams?.get('sort') || ''}
                onValueChange={(value: string) => {
                  searchParams.set('sort', value)
                  window.location.search = searchParams.toString()
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={'Sort by'} />
                </SelectTrigger>
                <SelectContent>
                  {sorting.map((item: SortFilterItem, i) => (
                    <SelectItem key={i} value={item.slug!}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Suspense>
        </ul>
      </nav>
    </>
  )
}
