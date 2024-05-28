import { XIcon } from 'lucide-react'
import clsx from 'clsx'

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-[#113D3E] text-black transition-colors">
      <XIcon
        className={clsx(
          'h-6 transition-all ease-in-out hover:scale-110 ',
          className
        )}
      />
    </div>
  )
}
