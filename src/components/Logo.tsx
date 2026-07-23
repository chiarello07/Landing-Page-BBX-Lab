import logoUrl from '@/assets/bbx-18-a3bfc.png'
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
