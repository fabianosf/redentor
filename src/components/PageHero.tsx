import { Link } from 'react-router-dom'

interface PageHeroProps {
  title: string
  breadcrumb?: string
  description?: string
}

export function PageHero({ title, breadcrumb, description }: PageHeroProps) {
  return (
    <section className="bg-navy">
      <div className="section-shell py-12 sm:py-16">
        <nav className="mb-3 text-sm text-white/60" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">
            Início
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{breadcrumb ?? title}</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-white/75">{description}</p>}
      </div>
    </section>
  )
}
