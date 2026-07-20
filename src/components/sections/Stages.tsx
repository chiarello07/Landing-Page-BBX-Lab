import { FadeIn } from '@/components/FadeIn'

export function Stages() {
  const stages = [
    {
      num: '01',
      title: 'FOUNDATION',
      subtitle: 'Estruturação',
      desc: 'Para empresas que precisam alinhar a casa, validar processos de vendas e unificar a identidade inicial da marca.',
      focus: 'Limpeza de CRM, Playbook comercial, Brand Equity.',
    },
    {
      num: '02',
      title: 'SCALE',
      subtitle: 'Aceleração',
      desc: 'Para operações que já vendem, mas sofrem para escalar por falta de planejamento de marketing e dados claros.',
      focus: 'Automação Inbound, Sales Engagement, Onboarding CS.',
    },
    {
      num: '03',
      title: 'ELITE',
      subtitle: 'Dominância',
      desc: 'Para empresas maduras que buscam previsibilidade total, campanhas de alta conversão e autoridade premium.',
      focus: 'Dashboards BI, ABM Campaigns, Health Score CS.',
    },
    {
      num: '04',
      title: 'TAILOR-MADE',
      subtitle: 'Enterprise',
      desc: 'Para operações complexas que exigem reengenharia completa de processos e posicionamento de ponta a ponta.',
      focus: 'Soluções customizadas para grandes corporações.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4">
        <FadeIn>
          <div className="mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              Estágios de Crescimento
            </h2>
            <p className="text-muted-foreground text-lg">
              Escolha o seu momento. Nós construímos o caminho.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <FadeIn key={i} delay={i * 150} className="group">
              <div className="border border-border p-8 h-full bg-secondary/50 transition-all duration-300 hover:border-accent hover:bg-secondary cursor-default rounded-sm">
                <div className="font-display font-bold text-accent text-xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {stage.num}
                </div>
                <h3 className="font-display font-bold text-white text-lg tracking-wide uppercase mb-1">
                  {stage.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                  [{stage.subtitle}]
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{stage.desc}</p>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-xs text-white/70">
                    <strong className="text-accent">Foco:</strong> {stage.focus}
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
