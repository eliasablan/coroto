'use client'

import React, { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { cn, createUrl } from '@/lib/utils'
// import FilterItemDropdown from './layout/search/filter/dropdown'
// import { sorting } from '@/lib/constants'

type PathFilterItem = { title: string; path: string }

export default function CollectionFilter({
  collections,
}: {
  collections: PathFilterItem[]
}) {
  const title = 'Collections'
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // const q = searchParams?.get('q')

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
            {collections.map((item) => {
              const active = pathname === item.path
              const newParams = new URLSearchParams(
                searchParams?.toString()
              )

              return (
                <li
                  className="mt-2 flex text-black dark:text-white"
                  key={item.title}
                >
                  <Link
                    href={createUrl(item.path, newParams)}
                    className={cn(
                      'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
                      {
                        'underline underline-offset-4': active,
                      }
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
          {/* <Suspense fallback={null}>
            <FilterItemDropdown list={sorting} />
          </Suspense> */}
        </ul>
      </nav>
    </>
  )
}
