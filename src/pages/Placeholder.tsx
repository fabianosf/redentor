import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/i18n'

interface PlaceholderProps {
  title?: string
  description?: string
}

export function Placeholder({ title, description }: PlaceholderProps) {
  const { t } = useLanguage()

  return (
    <main>
      <PageHero
        title={title ?? t('notFound.title')}
        description={description ?? t('notFound.unavailable')}
      />
      <section className="py-16">
        <div className="section-shell text-center">
          <Link to="/" className="btn-gold inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('notFound.backHome')}
          </Link>
        </div>
      </section>
    </main>
  )
}
