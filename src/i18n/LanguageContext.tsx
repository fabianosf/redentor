import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { pt, type TranslationDict } from './pt'
import { en } from './en'
import {
  applyGoogleTranslateLang,
  clearGoogleTranslate,
  getGoogTransLang,
  readStoredGoogleLang,
} from '@/lib/googleTranslate'

export type Locale = 'pt' | 'en'

const STORAGE_KEY = 'redentor-lang'
const dictionaries: Record<Locale, TranslationDict> = { pt, en }

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K}.${NestedKeyOf<T[K]>}`
      : K
}[keyof T & string]

export type TranslationKey = NestedKeyOf<typeof pt>

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  setGoogleLanguage: (lang: string) => void
  activeGoogleLang: string | null
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocaleOrNull(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'pt') return stored
  } catch {
    /* ignore */
  }
  return null
}

function detectBrowserLocale(): Locale {
  // Other languages stay on PT source so Google Translate can machine-translate.
  if (readStoredGoogleLang()) return 'pt'

  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
  if (langs.some((l) => l.toLowerCase().startsWith('pt'))) return 'pt'
  if (langs.some((l) => l.toLowerCase().startsWith('en'))) return 'en'
  return 'pt'
}

function resolveInitialLocale(): Locale {
  if (readStoredGoogleLang()) return 'pt'
  const stored = readStoredLocaleOrNull()
  if (stored) return stored
  if (typeof navigator === 'undefined') return 'pt'
  return detectBrowserLocale()
}

function getByPath(dict: TranslationDict, key: string): string {
  const parts = key.split('.')
  let current: unknown = dict
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return key
    }
  }
  return typeof current === 'string' ? current : key
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'pt' : resolveInitialLocale(),
  )
  const [activeGoogleLang, setActiveGoogleLang] = useState<string | null>(() =>
    typeof window === 'undefined'
      ? null
      : readStoredGoogleLang() || getGoogTransLang(),
  )

  const setLocale = useCallback((next: Locale) => {
    const hadGoogle = Boolean(readStoredGoogleLang() || getGoogTransLang())
    clearGoogleTranslate()
    setActiveGoogleLang(null)
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    if (hadGoogle) window.location.reload()
  }, [])

  const setGoogleLanguage = useCallback((lang: string) => {
    setLocaleState('pt')
    setActiveGoogleLang(lang)
    applyGoogleTranslateLang(lang)
  }, [])

  useEffect(() => {
    if (activeGoogleLang) {
      document.documentElement.lang = activeGoogleLang
      document.documentElement.dir = activeGoogleLang === 'ar' ? 'rtl' : 'ltr'
      return
    }
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
    document.documentElement.dir = 'ltr'
  }, [locale, activeGoogleLang])

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      let value = getByPath(dictionaries[locale], key)
      if (vars) {
        for (const [name, replacement] of Object.entries(vars)) {
          value = value.replace(`{${name}}`, String(replacement))
        }
      }
      return value
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, setGoogleLanguage, activeGoogleLang, t }),
    [locale, setLocale, setGoogleLanguage, activeGoogleLang, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
