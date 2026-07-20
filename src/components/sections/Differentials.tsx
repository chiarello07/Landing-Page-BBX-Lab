import { FadeIn } from '@/components/FadeIn'
import { Target, Award, Lightbulb, Layers } from 'lucide-react'

export function Differentials() {
  const items = [
    {
      icon: <Target className="w-6 h-6 text-accent" strokeWidth={1.5} />,
      title: 'Foco no Resultado',
      desc: 'Nossa métrica principal é o seu faturamento. Sem vaidades, apenas crescimento mensurável.',
    },
    {
      icon: <Award className="w-6 h-6 text-accent" strokeWidth={1.5} />,
      title: 'Experiência Comprovada',
      desc: 'Atuação com grandes players e agências do mercado, replicando estruturas vencedoras.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-accent" strokeWidth={1.5} />,
      title: 'Inovação Constante',
      desc: 'Antecipamos tendências de mercado para colocar sua marca sempre à frente da concorrência.',
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" strokeWidth={1.5} />,
      title: 'Ecossistema Omnichannel',
      desc: 'Integração de ponta a ponta. Dados conectados desde o primeiro clique até a expansão de contrato.',
    },
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologia de ponta a seu favor. Sua marca gerenciada com a mesma infraestrutura das
              maiores empresas.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex gap-6 p-6 border border-border bg-black/30 hover:border-accent/50 transition-colors rounded-sm">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
