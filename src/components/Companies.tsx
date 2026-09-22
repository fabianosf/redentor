import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companies } from '@/data'
import type { Company } from '@/types'

function CompanyCard({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false)

  return (
    <Link
      to={company.href}
      className="card-surface flex flex-col items-center p-6 text-center sm:p-8"
    >
      <div className="flex h-20 w-full items-center justify-center sm:h-24">
        {failed ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-xl font-bold text-gold sm:h-16 sm:w-16 sm:text-2xl">
            {company.logoInitial}
          </div>
        ) : (
          <img
            src={company.logoImage}
            alt={company.name}
            className="max-h-16 w-auto max-w-full object-contain sm:max-h-20"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <h3 className="mt-4 text-base font-bold text-navy sm:text-lg">{company.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{company.description}</p>
    </Link>
  )
}

export function Companies() {
  return (
    <section id="empresas" className="section-pad scroll-mt-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Grupo Redentor</p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
            Nossas Empresas
          </h2>
          <p className="mt-3 text-sm text-ink-muted sm:text-base">
            Três empresas, uma mesma missão: mobilidade urbana com qualidade no Rio de Janeiro.
          </p>
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
