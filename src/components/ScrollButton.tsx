'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 0) // Show button only when scrolled down
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll) // Cleanup
  }, [])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            // className="fixed bottom-8 left-1/2 -translate-x-5 transition-transform hover:scale-105"
            // className={`fixed bottom-8 left-1/2 -translate-x-5 transition-transform hover:scale-105 ${
            //   isVisible ? 'translate-y-0' : 'translate-y-full' // Slide-in animation
            // }`}
            className={cn(
              'fixed bottom-8 right-8 transition-transform hover:scale-105 sm:left-1/2 sm:right-0 sm:-translate-x-5',
              isVisible ? 'translate-y-0' : 'translate-y-20' // Slide-in animation
            )}
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
