import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Check, ChevronDown, Globe, Menu, X } from 'lucide-react'
import { LOGO_IMAGE, navItems } from '@/data'
import { useLanguage, type Locale } from '@/i18n'
import {
  GOOGLE_TRANSLATE_LANGUAGES,
  readStoredGoogleLang,
} from '@/lib/googleTranslate'

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
      className="h-16 w-auto max-w-[340px] object-contain object-left sm:h-[4.5rem] sm:max-w-[440px] lg:h-20 lg:max-w-[520px]"
      onError={() => setFailed(true)}
    />
  )
}

type LangOption =
  | { kind: 'native'; code: Locale; label: string; short: string }
  | { kind: 'google'; code: string; label: string; short: string }

function useLanguageOptions(): {
  options: LangOption[]
  activeKey: string
  activeShort: string
  selectOption: (option: LangOption) => void
} {
  const { locale, setLocale, setGoogleLanguage, activeGoogleLang, t } =
    useLanguage()
  const googleLang = activeGoogleLang || readStoredGoogleLang()

  const options: LangOption[] = [
    { kind: 'native', code: 'pt', label: t('nav.langPt'), short: 'PT' },
    { kind: 'native', code: 'en', label: t('nav.langEn'), short: 'EN' },
    ...GOOGLE_TRANSLATE_LANGUAGES.map((lang) => ({
      kind: 'google' as const,
      code: lang.code,
      label: lang.label,
      short: lang.code.split('-')[0].toUpperCase(),
    })),
  ]

  if (
    googleLang &&
    !GOOGLE_TRANSLATE_LANGUAGES.some((l) => l.code === googleLang)
  ) {
    options.push({
      kind: 'google',
      code: googleLang,
      label: googleLang.toUpperCase(),
      short: googleLang.split('-')[0].toUpperCase(),
    })
  }

  const activeOption =
    options.find((o) =>
      googleLang
        ? o.kind === 'google' && o.code === googleLang
        : o.kind === 'native' && o.code === locale,
    ) ?? options[0]

  function selectOption(option: LangOption) {
    if (option.kind === 'native') setLocale(option.code)
    else setGoogleLanguage(option.code)
  }

  return {
    options,
    activeKey: `${activeOption.kind}:${activeOption.code}`,
    activeShort: activeOption.short,
    selectOption,
  }
}

function LanguageList({
  onSelect,
  className = '',
}: {
  onSelect?: () => void
  className?: string
}) {
  const { options, activeKey, selectOption } = useLanguageOptions()

  return (
    <ul className={`space-y-0.5 ${className}`} role="listbox">
      {options.map((option) => {
        const key = `${option.kind}:${option.code}`
        const active = key === activeKey
        return (
          <li key={key} role="option" aria-selected={active}>
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                active
                  ? 'bg-navy/5 text-navy'
                  : 'text-ink-muted hover:bg-slate-50 hover:text-navy'
              }`}
              onClick={() => {
                selectOption(option)
                onSelect?.()
              }}
            >
              <span>{option.label}</span>
              {active ? <Check className="h-4 w-4 shrink-0 text-navy" /> : null}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

/** Compact globe dropdown for the header bar. */
function LanguageMenuDropdown() {
  const { t } = useLanguage()
  const { activeShort } = useLanguageOptions()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-sm font-semibold text-navy transition hover:bg-navy/5"
        aria-label={t('nav.languageMenu')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{activeShort}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-ink-muted transition ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-lg"
        >
          <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {t('nav.language')}
          </p>
          <div className="max-h-72 overflow-y-auto px-1">
            <LanguageList onSelect={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

/** Expanded language section for the mobile drawer. */
function LanguageMenuPanel({ onSelect }: { onSelect?: () => void }) {
  const { t } = useLanguage()

  return (
    <div className="mt-2 border-t border-slate-200 pt-4">
      <div className="mb-2 flex items-center gap-2 px-3">
        <Globe className="h-4 w-4 text-navy" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {t('nav.language')}
        </p>
      </div>
      <LanguageList onSelect={onSelect} className="px-1" />
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
      <div className="section-shell !pl-2 sm:!pl-3 lg:!pl-4">
        <div className="flex h-20 items-center justify-between gap-3 sm:h-24 sm:gap-4 lg:h-[6.5rem]">
          <Link to="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
            <BrandLogo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label={t('nav.mainNav')}>
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `relative px-3 py-2 text-base font-medium transition xl:px-3.5 ${
                active ? 'text-navy' : 'text-ink-muted hover:text-navy'
              }`

              const underline = active ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold xl:inset-x-3.5" />
              ) : null

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    aria-label={`${t(item.labelKey)} (abre em nova aba)`}
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
            <div className="hidden sm:block">
              <LanguageMenuDropdown />
            </div>
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
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
          aria-label={t('nav.mobileNav')}
        >
          <div className="section-shell space-y-1 py-3 pb-6">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href)
              const className = `block rounded-lg px-3 py-3 text-base font-medium ${
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
                    aria-label={`${t(item.labelKey)} (abre em nova aba)`}
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
            <LanguageMenuPanel onSelect={() => setOpen(false)} />
            <Link
              to="/trabalhe-aqui"
              onClick={() => setOpen(false)}
              className="btn-gold mt-3 w-full"
            >
              {t('nav.workWithUs')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
