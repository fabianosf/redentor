import { GROUP_YEARS, timeline } from '@/data'
import { PageHero } from '@/components/PageHero'
import { Companies } from '@/components/Companies'
import { useLanguage } from '@/i18n'

export function Historia() {
  const { t } = useLanguage()

  return (
    <main>
      <PageHero
        title={t('history.title')}
        breadcrumb={t('history.breadcrumb')}
        description={t('history.description', { years: GROUP_YEARS })}
      />

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl">
            <ol className="relative space-y-8 border-l border-navy/20 pl-6 sm:space-y-10 sm:pl-8">
              {timeline.map((event) => (
                <li key={event.id} className="relative">
                  <span className="absolute -left-[1.9rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-navy sm:-left-[2.4rem] sm:h-5 sm:w-5" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark sm:text-xs">
                    {event.yearKey ? t(event.yearKey) : event.year}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-navy sm:text-xl">
                    {event.titleKey === 'history.tTodayTitle'
                      ? t(event.titleKey, { years: GROUP_YEARS })
                      : t(event.titleKey)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {t(event.descriptionKey)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="institutional-title">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="institutional-title"
              className="text-2xl font-extrabold text-navy sm:text-3xl"
            >
              {t('history.institutionalTitle')}
            </h2>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              {t('history.institutionalIntro')}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {(
              [
                { id: 'mission', titleKey: 'history.missionTitle' as const },
                { id: 'vision', titleKey: 'history.visionTitle' as const },
                { id: 'values', titleKey: 'history.valuesTitle' as const },
              ] as const
            ).map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-200/80 bg-offwhite p-5 sm:p-6">
                <h3 className="text-base font-bold text-navy sm:text-lg">{t(item.titleKey)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t('history.textPending')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-4 sm:pb-8">
        <Companies />
      </section>
    </main>
  )
}
