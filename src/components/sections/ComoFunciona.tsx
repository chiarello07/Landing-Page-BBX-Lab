import { FadeIn } from '@/components/FadeIn'
import { Search, Map, Wrench, TrendingUp } from 'lucide-react'

export function ComoFunciona() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Diagnóstico',
      desc: 'Análise profunda da sua operação atual: processos, ferramentas, métricas e gargalos que limitam o crescimento.',
    },
    {
      icon: <Map className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Estratégia',
      desc: 'Plano de Revenue Operations sob medida, alinhando Marketing, Vendas e Customer Success com metas claras.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Implementação',
      desc: 'Execução completa: configuração de CRM, automações, dashboards e treinamento do time para autonomia.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" strokeWidth={1.5} />,
      title: 'Resultados',
      desc: 'Acompanhamento contínuo de KPIs com previsibilidade de receita e melhoria constante de performance.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              Como <span className="text-accent">Funciona</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo estruturado em quatro etapas para transformar sua operação em uma máquina
              de receita previsível.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-accent/40 to-transparent" />
                )}
                <div className="relative z-10 mb-6 bg-secondary w-16 h-16 flex items-center justify-center rounded-sm border border-border">
                  {step.icon}
                </div>
                <div className="font-display font-bold text-accent text-sm mb-2 opacity-70">
                  Passo {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
