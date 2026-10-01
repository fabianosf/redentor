import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FALLBACK_IMAGE, newsItems } from '@/data'
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
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="card-surface flex flex-col overflow-hidden"
            >
              <div className="flex aspect-[1131/1600] items-center justify-center overflow-hidden bg-white">
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
              <div className="px-4 py-4 text-center sm:px-5 sm:py-5">
                <h3 className="text-base font-bold text-navy sm:text-lg">
                  {t(item.titleKey)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
