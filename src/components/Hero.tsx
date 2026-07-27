import { useState, useEffect, useCallback } from 'react'
import { heroSlides } from '@/data'

export function Hero() {
  const [current, setCurrent] = useState(0)
  const total = heroSlides.length

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  return (
    <div className="pt-14">
      <div className="container mx-auto px-4 py-4">
        <div className="relative overflow-hidden shadow-lg">
          {/* Slides */}
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-700 ${i === current ? 'block' : 'hidden'}`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.imageAlt}
                className="w-full h-auto block"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-6 items-center justify-center opacity-50 hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 16 16" fill="white" className="h-8 w-8">
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-6 items-center justify-center opacity-50 hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 16 16" fill="white" className="h-8 w-8">
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
