'use client'

import React from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function ScrollButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="fixed bottom-8 left-1/2 -translate-x-5 transition-transform hover:scale-105"
            size="icon"
            onClick={() => scrollToTop()}
          >
            <ArrowUp />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Scroll to top</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
