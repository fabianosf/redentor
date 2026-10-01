import { useEffect } from 'react'
import { useLanguage } from '@/i18n'
import {
  ELEMENT_ID,
  applyGoogleTranslateLang,
  clearGoogleTranslate,
  getGoogTransLang,
  loadGoogleTranslateScript,
  resolveAutoGoogleLang,
  watchGoogleTranslateBanner,
} from '@/lib/googleTranslate'

/** Loads Google Translate and auto-applies non-PT/EN browser languages. */
export function GoogleTranslate() {
  const { locale } = useLanguage()

  useEffect(() => {
    const stopWatching = watchGoogleTranslateBanner()
    return stopWatching
  }, [])

  useEffect(() => {
    // Native EN must never be machine-translated on top of the dictionary.
    if (locale === 'en') {
      if (getGoogTransLang()) {
        clearGoogleTranslate()
        window.location.reload()
      }
      return
    }

    const target = resolveAutoGoogleLang()
    if (!target) {
      if (getGoogTransLang()) {
        clearGoogleTranslate()
        window.location.reload()
      }
      return
    }

    loadGoogleTranslateScript(() => {
      applyGoogleTranslateLang(target)
    })
  }, [locale])

  return (
    <div
      id={ELEMENT_ID}
      className="google-translate-element skiptranslate"
      aria-hidden="true"
    />
  )
}
