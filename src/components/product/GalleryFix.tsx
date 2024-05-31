'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import Image from 'next/image'

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
  ])

  return (
    <div className="embla mx-auto w-full border" ref={emblaRef}>
      <div className="embla__container">
        {[...Array(5)].map((x) => (
          <div
            key={x}
            className="embla__slide flex h-56 items-center justify-center"
          >
            Slide 1
          </div>
        ))}
      </div>
    </div>
  )
}
