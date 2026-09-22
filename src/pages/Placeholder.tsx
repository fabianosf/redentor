import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

interface PlaceholderProps {
  title: string
  description?: string
}

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <main>
      <PageHero title={title} description={description ?? 'Esta página não está disponível.'} />
      <section className="py-16">
        <div className="section-shell text-center">
          <Link to="/" className="btn-gold inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para Home
          </Link>
        </div>
      </section>
    </main>
  )
}
