'use client'

import React from 'react'
import { PlusIcon } from 'lucide-react'
import { addItem } from '@/components/cart/actions'
import LoadingDots from '@/components/loading-dots'
import { ProductVariant } from '@/lib/shopify/types'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean
  selectedVariantId: string | undefined
}) {
  const { pending } = useFormStatus()
  const buttonClasses =
    'relative flex w-44 items-center justify-center p-4 mt-6 mb-2 tracking-wide bg-indian-red text-white'
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60'

  if (!availableForSale) {
    return (
      <button aria-disabled className={cn(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    )
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={cn(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        <span className="ml-8 mr-4">Add To Cart</span>
      </button>
    )
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault()
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={cn(buttonClasses, {
        'hover:opacity-90': true,
        disabledClasses: pending,
      })}
    >
      <div className="absolute left-0 ml-4">
        {pending ? (
          <LoadingDots className="mb-3 bg-white" />
        ) : (
          <PlusIcon className="h-5" />
        )}
      </div>
      <span className="ml-8 mr-4">Add To Cart</span>
    </button>
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
