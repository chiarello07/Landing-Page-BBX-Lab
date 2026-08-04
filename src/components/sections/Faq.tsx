import { FadeIn } from '@/components/FadeIn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  const faqs = [
    {
      question: 'Qual é o prazo médio de implementação?',
      answer:
        'O prazo varia conforme o estágio da sua empresa e a complexidade da operação. Em média, a fase de diagnóstico leva 2 semanas, a estratégia mais 2 semanas, e a implementação completa entre 4 a 8 semanas. Projetos enterprise podem exigir prazos maiores, sempre alinhados com o cliente.',
    },
    {
      question: 'Qual é o investimento para trabalhar com a BBX Lab?',
      answer:
        'O investimento é personalizado conforme o estágio de crescimento (Foundation, Scale, Elite ou Tailor-Made) e o escopo do projeto. Trabalhamos com modelos de projeto fechado ou mensalidade recorrente. Agende um diagnóstico gratuito para receber uma proposta sob medida para o seu cenário.',
    },
    {
      question: 'A BBX Lab atende empresas de que porte?',
      answer:
        'Atendemos desde startups em fase de estruturação comercial até grandes corporações. Nossos estágios de crescimento (Foundation, Scale, Elite e Tailor-Made) foram criados justamente para adaptação a diferentes tamanhos e maturidades de operação. O importante é a empresa ter ambição de crescer com previsibilidade.',
    },
    {
      question: 'Preciso trocar meu CRM atual?',
      answer:
        'Não necessariamente. Trabalhamos com as principais ferramentas de mercado (HubSpot, Salesforce, RD Station, Pipedrive, entre outras) e avaliamos se o seu CRM atual atende às necessidades de RevOps. Quando recomendamos troca, é sempre baseada em dados e ROI comprovado.',
    },
    {
      question: 'Como é feito o acompanhamento após a implementação?',
      answer:
        'Oferecemos acompanhamento contínuo com reuniões periódicas de revisão de KPIs, ajustes de rota e otimizações. O objetivo é garantir que a equipe ganhe autonomia progressiva enquanto mantemos a governança dos processos de Revenue Operations implementados.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas principais dúvidas antes de dar o próximo passo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border bg-secondary/30 rounded-sm px-6 data-[state=open]:border-accent/40 transition-colors"
              >
                <AccordionTrigger className="font-display font-bold text-white text-left text-base md:text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
