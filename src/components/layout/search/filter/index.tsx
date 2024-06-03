import { SortFilterItem } from '@/lib/constants'
import { Suspense } from 'react'
import FilterItemDropdown from './dropdown'
import { FilterItem } from './item'

export type ListItem = SortFilterItem & PathFilterItem
export type PathFilterItem = { title: string; path: string }

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  )
}

export default function FilterList({
  list,
  title,
}: {
  list: ListItem[]
  title?: string
}) {
  return (
    <>
      <nav className="sticky top-[67px]">
        {title ? (
          <h3 className="hidden text-xs text-muted-foreground md:block">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <Suspense fallback={null}>
            <FilterItemList list={list} />
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense fallback={null}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  )
}
