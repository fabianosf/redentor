import { Link } from 'react-router-dom'
import { Bus, ExternalLink, PackageSearch, ShieldCheck } from 'lucide-react'
import { quickAccessItems } from '@/data'
import { useLanguage } from '@/i18n'

const iconMap = {
  bus: Bus,
  package: PackageSearch,
  shield: ShieldCheck,
}

export function QuickAccess() {
  const { t } = useLanguage()

  return (
    <section className="section-pad bg-white" aria-labelledby="quick-access-title">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {t('quickAccess.eyebrow')}
          </p>
          <h2
            id="quick-access-title"
            className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl"
          >
            {t('quickAccess.title')}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {quickAccessItems.map((item) => {
            const Icon = iconMap[item.icon]
            const className =
              'card-surface flex h-full flex-col p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:p-6'
            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                  <Icon className="h-6 w-6 text-navy" aria-hidden="true" />
                </div>
                <h3 className="mt-4 flex items-start gap-2 text-base font-bold text-navy sm:text-lg">
                  <span>{t(item.titleKey)}</span>
                  {item.external ? (
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-navy/50" aria-hidden="true" />
                  ) : null}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t(item.descKey)}</p>
              </>
            )

            if (item.external) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              )
            }

            return (
              <Link key={item.id} to={item.href} className={className}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
