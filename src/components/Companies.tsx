import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companies } from '@/data'
import { useLanguage } from '@/i18n'
import type { Company } from '@/types'
import type { TranslationKey } from '@/i18n'

type CompanyItem = Company & { descriptionKey: TranslationKey }

function CompanyCard({ company }: { company: CompanyItem }) {
  const [failed, setFailed] = useState(false)
  const { t } = useLanguage()

  return (
    <Link
      to={company.href}
      className="card-surface flex flex-col overflow-hidden text-center"
    >
      <div className="flex min-h-[9.5rem] w-full items-center justify-center bg-white px-5 py-6 sm:min-h-[10.5rem]">
        {failed ? (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-2xl font-bold text-gold">
            {company.logoInitial}
          </div>
        ) : (
          <img
            src={company.logoImage}
            alt={company.name}
            className="h-auto w-full max-h-28 object-contain object-center"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-bold text-navy sm:text-lg">{company.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t(company.descriptionKey)}</p>
      </div>
    </Link>
  )
}

export function Companies() {
  const { t } = useLanguage()

  return (
    <section id="empresas" className="section-pad scroll-mt-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {t('companies.eyebrow')}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
            {t('companies.title')}
          </h2>
          <p className="mt-3 text-sm text-ink-muted sm:text-base">{t('companies.subtitle')}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
