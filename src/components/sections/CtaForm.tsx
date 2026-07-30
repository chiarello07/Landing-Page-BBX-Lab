import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import { createLead } from '@/services/leads'
import { toast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

export function CtaForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    cargo: '',
    company: '',
    setor: '',
    desafio: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !formData.name ||
      !formData.cargo ||
      !formData.company ||
      !formData.setor ||
      !formData.desafio
    ) {
      toast({ title: 'Erro', description: 'Preencha todos os campos.', variant: 'destructive' })
      return
    }

    setLoading(true)
    try {
      await createLead(formData)
      const msg = `Olá! Meu nome é ${formData.name}, cargo ${formData.cargo}, da empresa ${formData.company}, setor ${formData.setor}. Meu maior desafio operacional é: ${formData.desafio}`
      const waUrl = `https://wa.me/5551994116442?text=${encodeURIComponent(msg)}`
      window.location.href = waUrl
    } catch (err) {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente em instantes ou chame direto no WhatsApp.',
        variant: 'destructive',
      })
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="diagnostico" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="container px-4 relative z-10 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white mb-6">
              O Próximo nível começa aqui
            </h2>
            <p className="text-muted-foreground text-lg">
              Vamos dominar o seu mercado juntos? Preencha os dados e fale diretamente conosco.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-secondary/30 p-8 md:p-12 border border-border rounded-sm"
          >
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nome"
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white placeholder:text-muted-foreground transition-colors font-sans"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                  placeholder="Cargo"
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white placeholder:text-muted-foreground transition-colors font-sans"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Nome da Empresa"
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white placeholder:text-muted-foreground transition-colors font-sans"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="setor"
                  value={formData.setor}
                  onChange={handleChange}
                  required
                  placeholder="Contato"
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white placeholder:text-muted-foreground transition-colors font-sans"
                />
              </div>
              <div className="relative">
                <textarea
                  name="desafio"
                  value={formData.desafio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, desafio: e.target.value }))}
                  required
                  placeholder="Qual o maior desafio operacional da empresa hoje?"
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-white placeholder:text-muted-foreground transition-colors font-sans min-h-[100px] resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg uppercase font-bold tracking-wide transition-transform hover:scale-[1.02]"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Receber Diagnóstico'}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
