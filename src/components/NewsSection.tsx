import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FALLBACK_IMAGE, newsItems } from '@/data'

export function NewsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Atualidades</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Novidades</h2>
          </div>
          <Link
            to="/fique-por-dentro"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <Link key={item.id} to={item.href} className="card-surface overflow-hidden">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = FALLBACK_IMAGE
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
