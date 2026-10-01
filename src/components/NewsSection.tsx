import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FALLBACK_IMAGE, GROUP_YEARS, newsItems } from '@/data'
import { useLanguage } from '@/i18n'

export function NewsSection() {
  const { t } = useLanguage()

  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {t('news.eyebrow')}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
              {t('news.title')}
            </h2>
          </div>
          <Link
            to="/fique-por-dentro"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
          >
            {t('news.seeAll')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => {
            const title =
              item.titleKey === 'news.aniversarioTitle'
                ? t(item.titleKey, { years: GROUP_YEARS })
                : t(item.titleKey)

            return (
              <Link
                key={item.id}
                to={item.href}
                className="card-surface group flex flex-col overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white">
                  <img
                    src={item.imageUrl}
                    alt={t(item.altKey)}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="inline-flex w-fit rounded-md bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-dark">
                    {t(item.categoryKey)}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{t(item.summaryKey)}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy">
                    {t('topics.seeMore')}
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
