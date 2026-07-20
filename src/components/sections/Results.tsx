import { FadeIn } from '@/components/FadeIn'

export function Results() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <FadeIn>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white mb-6 leading-tight">
              Resultados que falam por si
            </h2>
            <p className="text-muted-foreground text-xl max-w-md">
              O "Antes e Depois" de quem decidiu crescer de maneira sustentável e previsível.
            </p>
          </FadeIn>
        </div>

        <div className="flex-1 relative">
          <FadeIn delay={200}>
            {/* Using a placeholder for a corporate/data driven image */}
            <div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto">
              <img
                src="https://img.usecurling.com/p/800/600?q=charts%20data&color=black&dpr=2"
                alt="Resultados e Gráficos"
                className="object-cover w-full h-full rounded-sm opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-transparent to-transparent" />

              {/* Decorative elements representing data points */}
              <div className="absolute top-1/4 -left-8 bg-black border border-accent p-4 shadow-xl">
                <span className="font-display font-bold text-accent text-2xl">+30%</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-black border border-accent p-4 shadow-xl">
                <span className="font-display font-bold text-accent text-2xl">+60%</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
