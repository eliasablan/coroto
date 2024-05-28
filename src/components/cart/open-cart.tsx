import { ShoppingCartIcon } from 'lucide-react'
import clsx from 'clsx'

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string
  quantity?: number
}) {
  return (
    <div className="relative">
      <ShoppingCartIcon
        className={clsx('h-4 hover:text-black', className)}
      />

      {quantity ? (
        <div className="bg-color-dark text-color-light absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded text-[11px] font-medium">
          <p className="mt-[3px] leading-tight">{quantity}</p>
        </div>
      ) : null}
    </div>
  )
}
