import { useState } from 'react'
import { Link } from 'react-router-dom'
import { companies } from '@/data'
import type { Company } from '@/types'

function CompanyCard({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false)

  return (
    <Link
      to={company.href}
      className="card-surface flex flex-col items-center p-8 text-center"
    >
      <div className="flex h-24 w-full items-center justify-center">
        {failed ? (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-2xl font-bold text-gold">
            {company.logoInitial}
          </div>
        ) : (
          <img
            src={company.logoImage}
            alt={company.name}
            className="max-h-20 w-auto object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{company.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{company.description}</p>
    </Link>
  )
}

export function Companies() {
  return (
    <section id="empresas" className="scroll-mt-24 py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Grupo Redentor</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Nossas Empresas</h2>
          <p className="mt-3 text-ink-muted">
            Três empresas, uma mesma missão: mobilidade urbana com qualidade no Rio de Janeiro.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
