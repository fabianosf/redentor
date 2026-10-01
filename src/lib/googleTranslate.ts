const GOOGLE_LANG_KEY = 'redentor-google-lang'
const NATIVE_LANG_KEY = 'redentor-lang'
const SCRIPT_ID = 'google-translate-script'
const ELEMENT_ID = 'google_translate_element'

export const GOOGLE_TRANSLATE_LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'ja', label: '日本語' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' },
  { code: 'hi', label: 'हिन्दी' },
] as const

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages?: string
            autoDisplay?: boolean
            layout?: number
          },
          elementId: string,
        ) => void
      }
    }
  }
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value};expires=${expires};path=/`
}

function deleteCookie(name: string) {
  const hostname = window.location.hostname
  const domains = ['', hostname, `.${hostname}`]
  for (const domain of domains) {
    const domainPart = domain ? `;domain=${domain}` : ''
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${domainPart}`
  }
}

export function getGoogTransLang(): string | null {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/)
  if (!match) return null
  const value = decodeURIComponent(match[1])
  const parts = value.split('/')
  return parts[2] || null
}

export function clearGoogleTranslate() {
  deleteCookie('googtrans')
  try {
    localStorage.removeItem(GOOGLE_LANG_KEY)
  } catch {
    /* ignore */
  }
}

export function readStoredGoogleLang(): string | null {
  try {
    const stored = localStorage.getItem(GOOGLE_LANG_KEY)
    return stored && stored.length > 0 ? stored : null
  } catch {
    return null
  }
}

export function persistGoogleLang(lang: string) {
  try {
    localStorage.setItem(GOOGLE_LANG_KEY, lang)
    localStorage.removeItem(NATIVE_LANG_KEY)
  } catch {
    /* ignore */
  }
  setCookie('googtrans', `/pt/${lang}`)
}

export function detectBrowserTranslateLang(): string | null {
  const langs = navigator.languages?.length
    ? [...navigator.languages]
    : [navigator.language]

  for (const raw of langs) {
    const lower = raw.toLowerCase()
    if (lower.startsWith('pt') || lower.startsWith('en')) continue

    const base = lower.split('-')[0]
    if (base === 'zh') {
      return lower.includes('tw') || lower.includes('hk') ? 'zh-TW' : 'zh-CN'
    }
    return base
  }
  return null
}

export function resolveAutoGoogleLang(): string | null {
  const storedGoogle = readStoredGoogleLang()
  if (storedGoogle) return storedGoogle

  const cookieLang = getGoogTransLang()
  if (cookieLang && cookieLang !== 'pt' && cookieLang !== 'en') return cookieLang

  const storedNative = (() => {
    try {
      return localStorage.getItem(NATIVE_LANG_KEY)
    } catch {
      return null
    }
  })()
  // Explicit PT/EN choice blocks auto machine-translation.
  if (storedNative === 'pt' || storedNative === 'en') return null

  return detectBrowserTranslateLang()
}

export function applyGoogleTranslateLang(lang: string) {
  const current = getGoogTransLang()
  persistGoogleLang(lang)
  if (current !== lang) {
    window.location.reload()
    return
  }
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
  if (select && select.value !== lang) {
    select.value = lang
    select.dispatchEvent(new Event('change'))
  }
}

export function resetToNativeLanguage() {
  clearGoogleTranslate()
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
  if (select && select.value) {
    select.value = ''
    select.dispatchEvent(new Event('change'))
  }
}

const BANNER_SELECTORS = [
  'iframe.goog-te-banner-frame',
  '.goog-te-banner-frame',
  '.VIpgJd-ZVi9od-ORHb-OEVmcd',
  '.VIpgJd-ZVi9od-aZ2wEe-wOHMyf',
]

/** Hide/remove Google's top translation bar; translation itself keeps working. */
export function hideGoogleTranslateBanner() {
  for (const selector of BANNER_SELECTORS) {
    document.querySelectorAll(selector).forEach((node) => {
      if (node instanceof HTMLElement) {
        node.style.setProperty('display', 'none', 'important')
        node.style.setProperty('visibility', 'hidden', 'important')
        node.style.setProperty('height', '0', 'important')
        node.setAttribute('aria-hidden', 'true')
      }
      // Banner iframe can be removed; combo gadget stays for language changes.
      if (
        node instanceof HTMLIFrameElement &&
        node.classList.contains('goog-te-banner-frame')
      ) {
        node.remove()
      }
    })
  }
  document.body.style.setProperty('top', '0', 'important')
  document.documentElement.style.setProperty('margin-top', '0', 'important')
}

/** Keep watching for the banner iframe Google injects after translate. */
export function watchGoogleTranslateBanner(): () => void {
  hideGoogleTranslateBanner()

  const observer = new MutationObserver(() => {
    hideGoogleTranslateBanner()
  })
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })

  const interval = window.setInterval(hideGoogleTranslateBanner, 500)
  // Stop polling after Google has had time to inject; observer remains.
  window.setTimeout(() => window.clearInterval(interval), 8000)

  return () => {
    observer.disconnect()
    window.clearInterval(interval)
  }
}

export function loadGoogleTranslateScript(onReady: () => void) {
  if (document.getElementById(SCRIPT_ID)) {
    if (window.google?.translate) onReady()
    else {
      const prev = window.googleTranslateElementInit
      window.googleTranslateElementInit = () => {
        prev?.()
        onReady()
      }
    }
    return
  }

  window.googleTranslateElementInit = () => {
    if (!window.google?.translate) return
    // No includedLanguages filter: any Google-supported language can be applied.
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'pt',
        autoDisplay: false,
      },
      ELEMENT_ID,
    )
    onReady()
  }

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)
}

export { ELEMENT_ID }
