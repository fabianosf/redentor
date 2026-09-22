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

      <section className="py-14 sm:py-16">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl">
            <ol className="relative space-y-8 border-l border-navy/20 pl-8">
              {timeline.map((event) => (
                <li key={event.id} className="relative">
                  <span className="absolute -left-[2.4rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-navy" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
                    {event.year}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-navy">{event.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{event.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white pb-8">
        <Companies />
      </section>
    </main>
  )
}
