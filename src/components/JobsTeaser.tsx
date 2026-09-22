import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import { jobOpenings, jobsInfo } from '@/data'

export function JobsTeaser() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="card-surface overflow-hidden">
          <div className="grid gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Carreiras</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">Vagas abertas</h2>
              <p className="mt-3 text-sm text-ink-muted sm:text-base">
                Faça parte de um grupo com mais de 75 anos de história no transporte do Rio.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {jobOpenings.map((job) => (
                  <span
                    key={job.id}
                    className="rounded-full border border-navy/15 bg-offwhite px-3 py-1.5 text-xs font-medium text-navy sm:px-3.5 sm:text-sm"
                  >
                    {job.title}
                  </span>
                ))}
              </div>

              <Link to="/trabalhe-aqui" className="btn-gold mt-6 inline-flex w-full sm:mt-8 sm:w-auto">
                Enviar currículo
              </Link>
            </div>

            <div className="space-y-4 rounded-2xl bg-offwhite p-5 sm:p-6">
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <p className="text-sm text-ink-muted">{jobsInfo.schedule}</p>
              </div>
              {jobsInfo.addresses.map((address) => (
                <div key={address} className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <p className="break-words text-sm text-ink-muted">{address}</p>
                </div>
              ))}
              <p className="break-all text-sm text-ink-muted">
                E-mail:{' '}
                <a href={`mailto:${jobsInfo.email}`} className="font-medium text-navy hover:underline">
                  {jobsInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
