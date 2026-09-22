import { useState } from 'react'
import { Play } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { FALLBACK_IMAGE, newsExtra, newsItems, videos } from '@/data'

function VideoCard({
  youtubeId,
  title,
  description,
}: {
  youtubeId: string
  title: string
  description: string
}) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

  return (
    <article className="card-surface overflow-hidden">
      <div className="relative aspect-video bg-slate-100">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label={`Reproduzir vídeo: ${title}`}
          >
            <img
              src={thumb}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE
              }}
            />
            <span className="absolute inset-0 bg-navy/25 transition group-hover:bg-navy/35" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy-dark shadow-lg">
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{description}</p>
      </div>
    </article>
  )
}

export function FiquePorDentro() {
  const cards = [...newsItems, ...newsExtra]

  return (
    <main>
      <PageHero
        title="Fique por Dentro"
        description="Campanhas, histórias e vídeos do dia a dia do Grupo Redentor."
      />

      <section className="py-14 sm:py-16">
        <div className="section-shell space-y-14">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Campanhas e novidades</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {cards.map((item) => (
                <article key={item.id} className="card-surface overflow-hidden">
                  <div className="aspect-video bg-slate-100">
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
                    <p className="mt-2 text-sm text-ink-muted">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-navy">Vídeos</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.youtubeId} {...video} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
