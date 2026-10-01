import { useState } from 'react'
import { Play } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import {
  FALLBACK_IMAGE,
  newsExtraItems,
  newsItems,
  safetyItems,
  socialItems,
  videos,
} from '@/data'
import { useLanguage, type TranslationKey } from '@/i18n'

function ContentCard({
  imageUrl,
  altKey,
  titleKey,
  summaryKey,
  titleOnly = false,
}: {
  imageUrl: string
  altKey: TranslationKey
  titleKey: TranslationKey
  summaryKey: TranslationKey
  titleOnly?: boolean
}) {
  const { t } = useLanguage()

  return (
    <article className="card-surface flex flex-col overflow-hidden">
      <div className="flex aspect-[1131/1600] items-center justify-center overflow-hidden bg-white">
        <img
          src={imageUrl}
          alt={t(altKey)}
          className="h-full w-full object-contain object-center"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_IMAGE
          }}
        />
      </div>
      <div className={`px-4 py-4 sm:px-5 sm:py-5 ${titleOnly ? 'text-center' : ''}`}>
        <h3 className="text-base font-bold text-navy sm:text-lg">{t(titleKey)}</h3>
        {!titleOnly ? (
          <p className="mt-2 text-sm text-ink-muted">{t(summaryKey)}</p>
        ) : null}
      </div>
    </article>
  )
}

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
  const novidades = [
    ...newsItems.filter((item) => item.id !== 'campanha'),
    ...newsExtraItems,
  ]

  return (
    <main>
      <PageHero title={t('inside.title')} description={t('inside.description')} />

      <section className="section-pad">
        <div className="section-shell space-y-12 sm:space-y-16">
          <div id="novidades" className="scroll-mt-24">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
              {t('inside.campaigns')}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {novidades.map((item) => (
                <ContentCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  altKey={item.altKey}
                  titleKey={item.titleKey}
                  summaryKey={item.summaryKey}
                  titleOnly
                />
              ))}
            </div>
          </div>

          <div id="responsabilidade-social" className="scroll-mt-24">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
              {t('inside.socialSection')}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {socialItems.map((item) => (
                <ContentCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  altKey={item.altKey}
                  titleKey={item.titleKey}
                  summaryKey={item.summaryKey}
                />
              ))}
            </div>
          </div>

          <div id="capacitacao" className="scroll-mt-24">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
              {t('inside.trainingSection')}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted">{t('topics.trainingDesc')}</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.youtubeId} {...video} />
              ))}
            </div>
          </div>

          <div id="seguranca" className="scroll-mt-24">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
              {t('inside.safetySection')}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {safetyItems.map((item) => (
                <ContentCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  altKey={item.altKey}
                  titleKey={item.titleKey}
                  summaryKey={item.summaryKey}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
