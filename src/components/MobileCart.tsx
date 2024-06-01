'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Cart as CartType } from '@/lib/shopify/types'
import CartSheet from './CartSheet'
import { GrCart } from 'react-icons/gr'

export default function MobileCart({
  cart,
  className,
  logoSize = 16,
}: {
  cart: CartType | undefined
  className?: string
  logoSize?: number
}) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={cn(
              'relative flex items-center transition-all duration-300 ease-out hover:text-accent',
              cart?.totalQuantity && 'right-[6px]'
            )}
          >
            <GrCart size={logoSize} />
            {cart?.totalQuantity ? (
              <span className="absolute right-0 top-0 -mr-2 -mt-2 aspect-square w-5 scale-90 rounded-full bg-primary pt-[3px] font-mono text-sm leading-none text-primary-foreground md:scale-75">
                {cart.totalQuantity}
              </span>
            ) : null}
          </button>
        </SheetTrigger>
        <SheetContent className="w-11/12 sm:w-[540px]" side="right">
          <CartSheet cart={cart} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
