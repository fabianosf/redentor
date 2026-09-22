import { GraduationCap, HeartHandshake, Shield } from 'lucide-react'
import { pillars } from '@/data'
import type { Pillar } from '@/types'

const iconMap = {
  shield: Shield,
  graduation: GraduationCap,
  heart: HeartHandshake,
}

function PillarIcon({ icon }: { icon: Pillar['icon'] }) {
  const Icon = iconMap[icon]
  return <Icon className="h-6 w-6 text-navy" aria-hidden="true" />
}

export function Pillars() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Compromisso</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Por que o Grupo</h2>
          <p className="mt-3 text-ink-muted">
            Valores que guiam nossa operação e o cuidado com quem viaja e quem trabalha conosco.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="card-surface p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
