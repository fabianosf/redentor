import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import { jobOpenings, jobsInfo } from '@/data'

export function JobsTeaser() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="card-surface overflow-hidden">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Carreiras</p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy">Vagas abertas</h2>
              <p className="mt-3 text-ink-muted">
                Faça parte de um grupo com mais de 75 anos de história no transporte do Rio.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {jobOpenings.map((job) => (
                  <span
                    key={job.id}
                    className="rounded-full border border-navy/15 bg-offwhite px-3.5 py-1.5 text-sm font-medium text-navy"
                  >
                    {job.title}
                  </span>
                ))}
              </div>

              <Link to="/trabalhe-aqui" className="btn-gold mt-8 inline-flex">
                Enviar currículo
              </Link>
            </div>

            <div className="space-y-4 rounded-2xl bg-offwhite p-6">
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <p className="text-sm text-ink-muted">{jobsInfo.schedule}</p>
              </div>
              {jobsInfo.addresses.map((address) => (
                <div key={address} className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <p className="text-sm text-ink-muted">{address}</p>
                </div>
              ))}
              <p className="text-sm text-ink-muted">
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
