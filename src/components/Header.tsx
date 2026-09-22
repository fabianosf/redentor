import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LOGO_IMAGE, navItems } from '@/data'
import { useLanguage, type Locale } from '@/i18n'

function BrandLogo() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#003087" />
          <path
            d="M20 8c1.2 0 2.2.8 2.5 1.9l.4 1.6h2.6c.7 0 1.2.7.9 1.3l-1.3 2.4 1.7 1.7c.5.5.2 1.4-.5 1.5l-2.7.4-.8 2.6c-.2.7-1.1.9-1.6.4L20 20.3l-1.2 1.5c-.5.5-1.4.3-1.6-.4l-.8-2.6-2.7-.4c-.7-.1-1-1-.5-1.5l1.7-1.7-1.3-2.4c-.3-.6.2-1.3.9-1.3h2.6l.4-1.6C17.8 8.8 18.8 8 20 8z"
            fill="#FFD700"
          />
          <rect x="17.5" y="22" width="5" height="10" rx="1" fill="#FFD700" />
        </svg>
        <div className="leading-tight">
          <span className="block text-[10px] font-semibold tracking-[0.18em] text-navy sm:text-[11px]">
            GRUPO
          </span>
          <span className="block text-sm font-extrabold tracking-wide text-navy sm:text-base">
            REDENTOR
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={LOGO_IMAGE}
      alt="Grupo Redentor"
      className="h-8 w-auto max-w-[150px] object-contain sm:h-9 sm:max-w-[180px]"
      onError={() => setFailed(true)}
    />
  )
}

function LanguageSwitch({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  function optionClass(code: Locale) {
    return `relative px-1.5 py-0.5 text-xs font-semibold tracking-wide transition ${
      locale === code
        ? 'text-navy after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-navy'
        : 'text-ink-muted hover:text-navy'
    }`
  }

  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-label="Language">
      <button type="button" className={optionClass('pt')} onClick={() => setLocale('pt')}>
        PT
      </button>
      <span className="text-xs text-slate-300" aria-hidden="true">
        |
      </span>
      <button type="button" className={optionClass('en')} onClick={() => setLocale('en')}>
        EN
      </button>
    </div>
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
  const { t } = useLanguage()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-shell">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
          <Link to="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
            <BrandLogo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label={t('nav.mainNav')}>
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `relative px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                active ? 'text-navy' : 'text-ink-muted hover:text-navy'
              }`

              const underline = active ? (
                <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gold xl:inset-x-3" />
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
                    {t(item.labelKey)}
                  </a>
                )
              }

              return (
                <Link key={item.href} to={item.href} className={className}>
                  {t(item.labelKey)}
                  {underline}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/trabalhe-aqui" className="btn-gold hidden whitespace-nowrap md:inline-flex">
              {t('nav.workWithUs')}
            </Link>
            <LanguageSwitch className="hidden sm:inline-flex" />
            <a href="/portal/" className="btn-outline-navy hidden whitespace-nowrap lg:inline-flex">
              {t('nav.login')}
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
          aria-label={t('nav.mobileNav')}
        >
          <div className="section-shell space-y-1 py-3 pb-6">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `block rounded-lg px-3 py-3 text-sm font-medium ${
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
                    {t(item.labelKey)}
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
                  {t(item.labelKey)}
                </Link>
              )
            })}
            <div className="px-3 py-3">
              <LanguageSwitch />
            </div>
            <Link
              to="/trabalhe-aqui"
              onClick={() => setOpen(false)}
              className="btn-gold mt-1 w-full"
            >
              {t('nav.workWithUs')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
