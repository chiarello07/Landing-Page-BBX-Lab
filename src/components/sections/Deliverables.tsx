import { FadeIn } from '@/components/FadeIn'
import { Megaphone, Activity, Users } from 'lucide-react'

export function Deliverables() {
  const items = [
    {
      icon: <Megaphone className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Marketing & Branding',
      desc: 'Garantir que a marca atraia o cliente certo com o posicionamento correto, gerando leads rastreáveis e de alto valor.',
    },
    {
      icon: <Activity className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Sales & Data Ops',
      desc: 'Configuração de métricas para identificar campanhas e peças gerando o maior retorno sobre o investimento (ROAS).',
    },
    {
      icon: <Users className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Customer Success Ops',
      desc: 'Criação de fluxos de automação para educar e qualificar o lead antes de passá-lo para vendas, aumentando a retenção.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <FadeIn>
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-16 text-center">
            O Que <span className="text-accent">Entregamos</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-secondary p-8 border-t-2 border-t-accent h-full hover:bg-secondary/80 transition-colors">
                <div className="mb-6 bg-black w-16 h-16 flex items-center justify-center rounded-sm">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
