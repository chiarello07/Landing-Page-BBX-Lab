import { Link, Outlet } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { Logo } from '@/components/Logo'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width="20"
      height="20"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1Z" />
    </svg>
  )
}

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
                Revenue Operation — O padrão das empresas que mais crescem no mercado
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
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/bbx_lab"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Black Box Lab"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@bbx.lab"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok da Black Box Lab"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href="mailto:atendimento@bbxlab.com.br"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                atendimento@bbxlab.com.br
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Felicissimo+de+Azevedo,+1020+sala+502+-+São+João,+Porto+Alegre+-+RS,+90540-110"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                R. Felicissimo de Azevedo, 1020 sala 502 - São João, Porto Alegre - RS, 90540-110
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
