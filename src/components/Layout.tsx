import { Link, Outlet } from 'react-router-dom'
import { Logo } from '@/components/Logo'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-border transition-all">
        <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <a href="#diagnostico" className="text-white hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-accent/20 bg-[#0a0a0a] pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-xs">
              <Logo className="h-20 md:h-28" />
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Revenue Operation — Inteligência operacional por trás do seu crescimento.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <h4 className="font-display font-bold uppercase text-white mb-2">Contato</h4>
              <a
                href="https://wa.me/5551994116442"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                [51] 99411-6442
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                @bbx_lab
              </a>
              <a
                href="https://bbxlab.com.br"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                www.bbxlab.com.br
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Black Box Lab. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
