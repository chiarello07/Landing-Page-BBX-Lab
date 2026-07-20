import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import { TrendingUp, PieChart, Activity } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-10 pointer-events-none" />

      <div className="container relative z-10 px-4 py-16">
        <div className="max-w-4xl">
          <FadeIn delay={100}>
            <span className="inline-block font-display font-bold text-accent tracking-[0.2em] uppercase mb-6 text-sm md:text-base border border-accent/30 px-4 py-1.5 rounded-none bg-accent/5">
              Bem-vindo à era do RevOps
            </span>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-8 text-white">
              O crescimento por intuição acabou.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-sans">
              A Black Box Lab traz a infraestrutura de inteligência global para a sua operação.
              Alinhamos Marketing, Vendas e CS para extrair mais receita da sua estrutura atual.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Button
              size="lg"
              className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8 uppercase font-bold tracking-wide transition-transform hover:scale-[1.02]"
              onClick={() =>
                document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Agendar Diagnóstico Gratuito
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <FadeIn delay={500}>
            <div className="border-l border-accent pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-display font-bold text-3xl text-white">+36%</span>
              </div>
              <p className="text-muted-foreground font-sans">No Crescimento de Receita</p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="border-l border-accent pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <PieChart className="w-5 h-5 text-accent" />
                <span className="font-display font-bold text-3xl text-white">+27%</span>
              </div>
              <p className="text-muted-foreground font-sans">Em Lucratividade (Margem)</p>
            </div>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="border-l border-accent pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-accent" />
                <span className="font-display font-bold text-3xl text-white">100%</span>
              </div>
              <p className="text-muted-foreground font-sans">Visibilidade e Previsibilidade</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
