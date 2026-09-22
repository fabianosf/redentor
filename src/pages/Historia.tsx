import { timeline } from '@/data'
import { PageHero } from '@/components/PageHero'
import { Companies } from '@/components/Companies'

export function Historia() {
  return (
    <main>
      <PageHero
        title="Nossa História"
        breadcrumb="História"
        description="Mais de 75 anos conectando o Rio de Janeiro com tradição, inovação e compromisso."
      />

      <section className="section-pad">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl">
            <ol className="relative space-y-6 border-l border-navy/20 pl-6 sm:space-y-8 sm:pl-8">
              {timeline.map((event) => (
                <li key={event.id} className="relative">
                  <span className="absolute -left-[1.9rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-navy sm:-left-[2.4rem] sm:h-5 sm:w-5" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark sm:text-xs">
                    {event.year}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-navy sm:text-xl">{event.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{event.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white pb-4 sm:pb-8">
        <Companies />
      </section>
    </main>
  )
}
