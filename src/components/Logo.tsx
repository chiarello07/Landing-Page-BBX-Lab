import logoUrl from '@/assets/blackboxtagline202607201933100007-a6855.png'

export function Logo() {
  return (
    <div className="flex items-center">
      <img src={logoUrl} alt="Black Box Lab Logo" className="h-24 md:h-36 w-auto object-contain" />
    </div>
  )
}
