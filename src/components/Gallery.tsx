'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel'

type GalleryProps = {
  images: { src: string; altText: string }[]
}

export function Gallery({ images }: GalleryProps) {
  const options: EmblaOptionsType = {
    loop: true,
  }
  return <EmblaCarousel images={images} options={options} />
}
