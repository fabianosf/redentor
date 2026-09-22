import { useState } from 'react'
import { Play } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { FALLBACK_IMAGE, newsExtra, newsItems, videos } from '@/data'
import { useLanguage, type TranslationKey } from '@/i18n'

function VideoCard({
  youtubeId,
  titleKey,
  descriptionKey,
}: {
  youtubeId: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
}) {
  const [playing, setPlaying] = useState(false)
  const { t } = useLanguage()
  const title = t(titleKey)
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
            aria-label={t('inside.playVideo', { title })}
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
        <p className="mt-2 text-sm text-ink-muted">{t(descriptionKey)}</p>
      </div>
    </article>
  )
}

export function FiquePorDentro() {
  const { t } = useLanguage()
  const cards = [...newsItems, ...newsExtra]

  return (
    <main>
      <PageHero
        title={t('inside.title')}
        description={t('inside.description')}
      />

      <section className="section-pad">
        <div className="section-shell space-y-10 sm:space-y-14">
          <div>
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{t('inside.campaigns')}</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((item) => (
                <article key={item.id} className="card-surface overflow-hidden">
                  <div className="aspect-video bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={t(item.altKey)}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_IMAGE
                      }}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-bold text-navy">
                      {'title' in item && item.title
                        ? item.title
                        : item.titleKey
                          ? t(item.titleKey)
                          : ''}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">{t(item.summaryKey)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{t('inside.videos')}</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
