import { GraduationCap, HeartHandshake, Shield } from 'lucide-react'
import { pillars } from '@/data'
import { useLanguage } from '@/i18n'
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
  const { t } = useLanguage()

  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {t('pillars.eyebrow')}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
            {t('pillars.title')}
          </h2>
          <p className="mt-3 text-sm text-ink-muted sm:text-base">{t('pillars.subtitle')}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="card-surface p-5 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                <PillarIcon icon={pillar.icon} />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy sm:mt-5 sm:text-lg">
                {t(pillar.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t(pillar.descriptionKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
