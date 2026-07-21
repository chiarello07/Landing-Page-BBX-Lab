import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { getActivePartners, getLogoUrl, type Partner } from '@/services/partners'

export function Partners() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getActivePartners()
      .then((data) => setPartners(data))
      .catch(() => setPartners([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading || partners.length === 0) return null

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-3">
              Parceiros
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center w-full h-20 md:h-24 transition-all duration-300 hover:opacity-100 opacity-60"
              >
                {partner.logo ? (
                  <img
                    src={getLogoUrl(partner)}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale brightness-0 invert"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-display font-bold text-lg md:text-xl text-muted-foreground text-center">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
