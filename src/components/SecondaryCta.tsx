import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function SecondaryCta() {
  return (
    <section className="py-16 bg-black">
      <div className="container px-4">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-white">
              Pronto para escalar com inteligência?
            </h3>
            <p className="text-muted-foreground text-lg">
              Agende seu diagnóstico de RevOps e descubra o que está limitando o seu crescimento.
            </p>
            <Button
              size="lg"
              className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8 uppercase font-bold tracking-wide transition-transform hover:scale-[1.02] flex items-center gap-2"
              onClick={() =>
                document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Agendar Diagnóstico
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
