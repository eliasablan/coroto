'use client'

import React from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'

export default function ScrollButton() {
  return (
    <Button
      className="fixed bottom-8 right-8 transition-transform hover:scale-105"
      size="icon"
      onClick={() => scrollToTop()}
    >
      <ArrowUp />
    </Button>
  )
}

const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
