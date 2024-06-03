'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  MoveButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ArrowBigLeft, ArrowBigRight, Circle } from 'lucide-react'

import '@/styles/embla.css'

type PropType = {
  images: any[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="h-full w-full object-contain duration-300 ease-in-out hover:scale-110"
                width={550}
                height={760}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={image.altText as string}
                src={image.src as string}
                priority={true}
              />
              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <MoveButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ArrowBigLeft />
          </MoveButton>
          <MoveButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ArrowBigRight />
          </MoveButton>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            >
              <Circle />
            </DotButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
