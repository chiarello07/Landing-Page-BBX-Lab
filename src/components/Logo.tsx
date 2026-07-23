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
        className={cn('h-16 md:h-24 w-auto object-contain', className)}
      />
    </div>
  )
}
