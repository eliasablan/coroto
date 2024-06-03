'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel'

const OPTIONS: EmblaOptionsType = {}

type GalleryProps = {
  images: { src: string; altText: string }[]
}

export function Gallery({ images }: GalleryProps) {
  return <EmblaCarousel images={images} options={OPTIONS} />
}
