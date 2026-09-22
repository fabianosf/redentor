import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Bus, CalendarDays, Users } from 'lucide-react'
import { FALLBACK_IMAGE, heroContent, heroSlides, stats } from '@/data'
import type { StatItem } from '@/types'

const iconMap = {
  calendar: CalendarDays,
  building: Building2,
  users: Users,
  bus: Bus,
}

function StatIcon({ icon }: { icon: StatItem['icon'] }) {
  const Icon = iconMap[icon]
  return <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const total = heroSlides.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="relative min-h-[70vh] lg:min-h-[560px]">
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
              alt={slide.imageAlt}
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-transparent" />

        <div className="section-shell relative flex min-h-[70vh] flex-col justify-center pb-28 pt-16 lg:min-h-[560px] lg:pb-32">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-[0.16em] text-navy-dark">
              {heroContent.label}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {heroContent.title}
            </h1>
            <p className="mt-4 max-w-md text-base text-white/85 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={heroContent.primaryCta.href} className="btn-gold">
                {heroContent.primaryCta.label}
              </Link>
              <a
                href={heroContent.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="section-shell absolute inset-x-0 bottom-6">
          <div className="rounded-xl bg-navy px-4 py-4 shadow-lg sm:px-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <StatIcon icon={stat.icon} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white sm:text-xl">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
