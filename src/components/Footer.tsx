import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { LOGO_IMAGE, dpoInfo, footerSections } from '@/data'
import { useLanguage } from '@/i18n'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-shell py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <img
                src={LOGO_IMAGE}
                alt="Grupo Redentor"
                className="h-20 w-auto max-w-[380px] object-contain object-left sm:h-24 sm:max-w-[460px]"
              />
            </Link>

            <div className="mt-6 space-y-1.5 text-sm text-white/70">
              <h5 className="text-xs font-semibold uppercase tracking-wide text-gold">
                {t('footer.dpoTitle')}
              </h5>
              <p className="text-white/85">{dpoInfo.company}</p>
              <p>
                {t('footer.dpoCnpjLabel')} {dpoInfo.cnpj}
              </p>
              {dpoInfo.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a
                  href={`mailto:${dpoInfo.email}`}
                  className="text-white/85 transition hover:text-gold"
                >
                  {dpoInfo.email}
                </a>
              </p>
            </div>

            <p className="mt-5 text-sm text-white/60">{t('footer.copyright', { year })}</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white sm:mb-4">
                {t(section.titleKey)}
              </h5>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => {
                  const label = link.labelKey ? t(link.labelKey) : link.label ?? ''
                  return (
                    <li key={`${section.titleKey}-${label}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white/65 transition hover:text-gold"
                        >
                          {label}
                          <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-white/65 transition hover:text-gold"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
