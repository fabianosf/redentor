import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n'

interface PageHeroProps {
  title: string
  breadcrumb?: string
  description?: string
}

export function PageHero({ title, breadcrumb, description }: PageHeroProps) {
  const { t } = useLanguage()

  return (
    <section className="bg-navy">
      <div className="section-shell py-10 sm:py-12 lg:py-16">
        <nav className="mb-2 text-xs text-white/60 sm:mb-3 sm:text-sm" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">
            {t('page.home')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{breadcrumb ?? title}</span>
        </nav>
        <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">{title}</h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-white/75 sm:mt-3 sm:text-base">{description}</p>
        )}
      </div>
    </section>
  )
}
