'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { GrEmptyCircle, GrAddCircle } from 'react-icons/gr'

import { ProductVariant } from '@/lib/shopify/types'
import { cn } from '@/lib/utils'

import { addItem } from '@/components/cart/actions'
import LoadingDots from '@/components/LoadingDots'
import { Button } from '../ui/button'

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean
  selectedVariantId: string | undefined
}) {
  const { pending } = useFormStatus()

  if (!availableForSale) {
    return (
      <Button className="cursor-not-allowed opacity-75">
        Out Of Stock
      </Button>
    )
  }

  if (!selectedVariantId) {
    return (
      <Button
        className="w-full cursor-not-allowed opacity-75"
        aria-label="Please select an option"
        aria-disabled
      >
        <GrEmptyCircle />
        <span className="ml-2">Select an option</span>
      </Button>
    )
  }

  return (
    <Button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault()
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={cn(
        'w-full transition duration-200 ease-in-out hover:opacity-85',
        pending && 'cursor-not-allowed opacity-75'
      )}
    >
      {pending ? (
        <LoadingDots />
      ) : (
        <>
          <GrAddCircle />
          <span className="ml-2">Add To Cart</span>
        </>
      )}
    </Button>
  )
}

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[]
  availableForSale: boolean
}) {
  const [message, formAction] = useFormState(addItem, null)
  const searchParams = useSearchParams()
  const defaultVariantId =
    variants.length === 1 ? variants[0]?.id : undefined
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) =>
        option.value === searchParams?.get(option.name.toLowerCase())
    )
  )
  const selectedVariantId = variant?.id || defaultVariantId
  const actionWithVariant = formAction.bind(null, selectedVariantId)

  return (
    <form action={actionWithVariant}>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  )
}
