import { FadeIn } from '@/components/FadeIn'
import { Quote } from 'lucide-react'

export function Depoimentos() {
  const testimonials = [
    {
      name: 'Ricardo Almeida',
      cargo: 'Diretor Comercial',
      empresa: 'Tech Solutions S.A.',
      text: 'A Black Box Lab reestruturou todo o nosso funil comercial. Em 3 meses, aumentamos a conversão em 40% e finalmente temos previsibilidade de receita. O investimento se pagou no primeiro trimestre.',
    },
    {
      name: 'Mariana Costa',
      cargo: 'Head de Marketing',
      empresa: 'Grupo Vantage',
      text: 'Pela primeira vez, Marketing e Vendas falam a mesma língua. Os dashboards em tempo real mudaram a forma como tomamos decisões estratégicas. Recomendo para qualquer empresa que quer escalar.',
    },
    {
      name: 'Felipe Ramos',
      cargo: 'CEO',
      empresa: 'Nexus Digital',
      text: 'Saímos de um crescimento por intuição para um modelo data-driven. A equipe da BBX Lab entendeu nosso negócio como se fossem da casa. A diferença na margem de lucro é evidente.',
    },
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              Depoimentos
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-black border border-border p-8 rounded-sm h-full flex flex-col hover:border-accent/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl rounded-full" />
                <Quote className="w-8 h-8 text-accent mb-6 opacity-50" strokeWidth={1.5} />
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1 relative z-10">
                  "{t.text}"
                </p>
                <div className="pt-6 border-t border-border">
                  <h4 className="font-display font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.cargo} · {t.empresa}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
