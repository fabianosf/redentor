import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Bus, CalendarDays, Users } from 'lucide-react'
import { FALLBACK_IMAGE, heroContent, heroSlides, stats } from '@/data'
import { useLanguage } from '@/i18n'
import type { StatItem } from '@/types'

const iconMap = {
  calendar: CalendarDays,
  building: Building2,
  users: Users,
  bus: Bus,
}

function StatIcon({ icon }: { icon: StatItem['icon'] }) {
  const Icon = iconMap[icon]
  return <Icon className="h-4 w-4 text-gold sm:h-5 sm:w-5" aria-hidden="true" />
}

function StatsBar() {
  const { t } = useLanguage()

  return (
    <div className="rounded-xl bg-navy px-3 py-3 shadow-lg sm:px-6 sm:py-4">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-10 sm:w-10">
              <StatIcon icon={stat.icon} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-bold text-white sm:text-xl">{stat.value}</p>
              <p className="truncate text-[10px] uppercase tracking-wide text-white/70 sm:text-xs">
                {t(stat.labelKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const total = heroSlides.length
  const { t } = useLanguage()

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="relative">
        <div className="absolute inset-0">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={i !== current}
            >
              <img
                src={slide.imageUrl}
                alt={t(slide.altKey)}
                className="h-full w-full object-cover object-center"
                loading={i === 0 ? 'eager' : 'lazy'}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_IMAGE
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy-deep/80 to-navy-deep/95 sm:bg-gradient-to-r sm:from-navy-deep/95 sm:via-navy-deep/70 sm:to-transparent" />
        </div>

        <div className="section-shell relative flex flex-col justify-center pt-14 pb-8 sm:min-h-[70vh] sm:pb-10 sm:pt-16 lg:min-h-[560px] lg:pb-36">
          <div className="max-w-xl">
            <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-navy-dark sm:mb-4 sm:text-xs">
              {t('hero.label')}
            </span>
            <h1 className="text-[1.85rem] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {t('hero.title')}
            </h1>
            <p className="mt-3 max-w-md text-sm text-white/85 sm:mt-4 sm:text-lg">
              {t('hero.subtitle')}
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link to={heroContent.primaryCtaHref} className="btn-gold w-full sm:w-auto">
                {t('hero.ctaJobs')}
              </Link>
              <a
                href={heroContent.secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white w-full sm:w-auto"
              >
                {t('hero.ctaLines')}
              </a>
            </div>
          </div>

          <div className="mt-10 lg:hidden">
            <StatsBar />
          </div>
        </div>

        <div className="section-shell pointer-events-none absolute inset-x-0 bottom-6 hidden lg:block">
          <div className="pointer-events-auto">
            <StatsBar />
          </div>
        </div>
      </div>
    </section>
  )
}
