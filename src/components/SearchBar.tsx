'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SearchBar({ className }: { className?: string }) {
  const searchParams = useSearchParams()!
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`)
    const params = new URLSearchParams(searchParams)
    // params.delete('page')
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }

    replace(`/search?${params.toString()}`)
  }, 300)

  return (
    <div className={cn('relative flex items-center', className)}>
      <Search className="absolute left-2.5 h-4 w-4 text-foreground" />
      <Input
        name="search"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('q') || ''}
        className="w-full pl-9 placeholder:text-foreground"
      />
    </div>
  )
}
