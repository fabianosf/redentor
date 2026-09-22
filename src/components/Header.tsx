import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LOGO_IMAGE, navItems } from '@/data'

function BrandLogo() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#003087" />
          <path
            d="M20 8c1.2 0 2.2.8 2.5 1.9l.4 1.6h2.6c.7 0 1.2.7.9 1.3l-1.3 2.4 1.7 1.7c.5.5.2 1.4-.5 1.5l-2.7.4-.8 2.6c-.2.7-1.1.9-1.6.4L20 20.3l-1.2 1.5c-.5.5-1.4.3-1.6-.4l-.8-2.6-2.7-.4c-.7-.1-1-1-.5-1.5l1.7-1.7-1.3-2.4c-.3-.6.2-1.3.9-1.3h2.6l.4-1.6C17.8 8.8 18.8 8 20 8z"
            fill="#FFD700"
          />
          <rect x="17.5" y="22" width="5" height="10" rx="1" fill="#FFD700" />
        </svg>
        <div className="leading-tight">
          <span className="block text-[11px] font-semibold tracking-[0.18em] text-navy">GRUPO</span>
          <span className="block text-base font-extrabold tracking-wide text-navy">REDENTOR</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={LOGO_IMAGE}
      alt="Grupo Redentor"
      className="h-9 w-auto"
      onError={() => setFailed(true)}
    />
  )
}

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (href.startsWith('/#')) return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <BrandLogo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `relative px-3 py-2 text-sm font-medium transition ${
                active ? 'text-navy' : 'text-ink-muted hover:text-navy'
              }`

              const underline = active ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" />
              ) : null

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link key={item.href} to={item.href} className={className}>
                  {item.label}
                  {underline}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/trabalhe-aqui" className="btn-gold hidden sm:inline-flex">
              Trabalhe conosco
            </Link>
            <a
              href="/portal/"
              className="btn-outline-navy hidden lg:inline-flex"
            >
              Login
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-navy lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
          <div className="section-shell py-3">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                active ? 'bg-navy/5 text-navy' : 'text-ink-muted'
              }`

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              to="/trabalhe-aqui"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 w-full"
            >
              Trabalhe conosco
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
