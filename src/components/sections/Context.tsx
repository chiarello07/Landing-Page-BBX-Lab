import { FadeIn } from '@/components/FadeIn'
import { X, Check } from 'lucide-react'

export function Context() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4">
        <FadeIn>
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-4">
              O Mercado Mudou.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Modelos tradicionais estão engolindo sua margem de lucro. Conheça a diferença entre
              forçar o crescimento e escalar com inteligência.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Old Model */}
          <FadeIn delay={100} className="bg-black/50 border border-border p-8 rounded-sm">
            <h3 className="font-display font-bold text-xl uppercase text-muted-foreground mb-8 pb-4 border-b border-border">
              O Modelo Antigo
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-destructive/10 p-1.5 rounded-sm h-fit">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Crescimento por Volume</h4>
                  <p className="text-muted-foreground">
                    Contratar mais vendedores para vender mais (Inimigo da margem de lucro).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-destructive/10 p-1.5 rounded-sm h-fit">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ferramentas Isoladas</h4>
                  <p className="text-muted-foreground">
                    Cada setor escolhe seu próprio software sem integração nativa, gerando perda de
                    dados.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-destructive/10 p-1.5 rounded-sm h-fit">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Decisão por "Faro"</h4>
                  <p className="text-muted-foreground">
                    Reuniões de diretoria baseadas em intuição, e não em painéis de dados em tempo
                    real.
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>

          {/* New Era */}
          <FadeIn
            delay={200}
            className="bg-black border border-accent/20 p-8 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
            <h3 className="font-display font-bold text-xl uppercase text-accent mb-8 pb-4 border-b border-accent/20">
              A Nova Era — RevOps
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="mt-1 bg-accent/10 p-1.5 rounded-sm h-fit">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Crescimento por Eficiência</h4>
                  <p className="text-muted-foreground">
                    Extrair mais receita da mesma estrutura alinhando Marketing, Vendas e CS.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-accent/10 p-1.5 rounded-sm h-fit">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Tecnologia Centralizada</h4>
                  <p className="text-muted-foreground">
                    Um único ecossistema onde o lead é rastreado desde o clique até a renovação.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-accent/10 p-1.5 rounded-sm h-fit">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Data Driven Total</h4>
                  <p className="text-muted-foreground">
                    Previsibilidade de faturamento com base em dados históricos integrados.
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
