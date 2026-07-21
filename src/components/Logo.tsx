import logoUrl from '@/assets/5-deed3.svg'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className="flex items-center">
      <img
        src={logoUrl}
        alt="Black Box Lab Logo"
        className={cn('h-24 md:h-36 w-auto object-contain', className)}
      />
    </div>
  )
}
