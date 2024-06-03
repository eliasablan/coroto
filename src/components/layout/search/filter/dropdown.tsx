'use client'

import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { ListItem } from '.'

export default function FilterItemDropdown({
  list,
}: {
  list: ListItem[]
}) {
  const searchParams = new URLSearchParams(window.location.search)

  return (
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
          {list.map((item: ListItem, i) => (
            <SelectItem key={i} value={item.slug!}>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
