'use client'

import React from 'react'
import { createUrl } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SearchBar({ className }: { className: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement
    const newParams = new URLSearchParams(searchParams?.toString())

    if (search.value) {
      newParams.set('q', search.value)
    } else {
      newParams.delete('q')
    }

    router.push(createUrl('/search', newParams))
  }
  return (
    <form onSubmit={onSubmit}>
      <div className={className}>
        <Search className="absolute left-2.5 h-4 w-4 text-foreground" />
        <Input
          key={searchParams?.get('q')}
          type="text"
          name="search"
          placeholder="Search..."
          defaultValue={searchParams?.get('q') || ''}
          className="w-full rounded bg-background pl-9 placeholder:text-foreground"
        />
      </div>
    </form>
  )
}
