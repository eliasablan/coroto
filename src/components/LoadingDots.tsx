import { cn } from '@/lib/utils'

const dots =
  'mx-1 inline-block h-2 w-2 animate-blink rounded-md bg-primary-foreground'

const LoadingDots = () => {
  return (
    <span className="inline-flex items-center">
      <span className={cn(dots)} />
      <span className={cn(dots, 'animation-delay-[100ms]')} />
      <span className={cn(dots, 'animation-delay-[200ms]')} />
    </span>
  )
}

export default LoadingDots
