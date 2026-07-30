import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { getActivePartners, getLogoUrl, type Partner } from '@/services/partners'
import nestleLogo from '@/assets/nestle-logo-38f57.png'
import saoJoaoLogo from '@/assets/logo-farmacias-sao-joao-positiva-fd021.webp'
import sicrediLogo from '@/assets/sicredilogosbranca-29a24.png'

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
            {partners.map((partner) => {
              const isNestle = partner.name === 'Nestlé' || partner.name === 'Empresa Alpha'
              const isSaoJoao =
                partner.name === 'Farmácias São João' ||
                partner.name === 'Empresa Beta' ||
                partner.name === 'Farmacias Sao Joao'
              const isSicredi = partner.name === 'Sicredi' || partner.name === 'Empresa Gamma'

              const logoSrc = isSicredi
                ? partner.logo
                  ? getLogoUrl(partner)
                  : sicrediLogo
                : isSaoJoao
                  ? partner.logo
                    ? getLogoUrl(partner)
                    : saoJoaoLogo
                  : isNestle
                    ? partner.logo
                      ? getLogoUrl(partner)
                      : nestleLogo
                    : partner.logo
                      ? getLogoUrl(partner)
                      : null

              const altText = isSicredi
                ? 'Sicredi'
                : isSaoJoao
                  ? 'Farmácias São João'
                  : isNestle
                    ? 'Nestlé'
                    : partner.name

              return (
                <div
                  key={partner.id}
                  className="flex items-center justify-center w-full h-20 md:h-24 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105 group focus-within:ring-2 focus-within:ring-accent rounded-lg p-2"
                >
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={altText}
                      className={
                        isSaoJoao || isNestle || isSicredi
                          ? 'max-h-12 md:max-h-14 w-auto object-contain transition-all duration-300 group-hover:brightness-110'
                          : 'max-h-full max-w-full object-contain grayscale brightness-0 invert group-hover:grayscale-0'
                      }
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display font-bold text-lg md:text-xl text-muted-foreground text-center group-hover:text-accent transition-colors">
                      {partner.name}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
