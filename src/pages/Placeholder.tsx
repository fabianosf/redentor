import { Link } from 'react-router-dom'
import { ArrowLeft, Construction } from 'lucide-react'

interface PlaceholderProps {
  title: string
  description?: string
}

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Construction className="h-10 w-10 text-redentor-blue" />
      </div>
      <h1 className="text-3xl font-extrabold text-redentor-blue mb-3">{title}</h1>
      <p className="text-gray-500 max-w-md mb-8">
        {description ?? 'Esta página está em construção e estará disponível em breve.'}
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 rounded-lg bg-redentor-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-redentor-blue-light transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Home
      </Link>
    </main>
  )
}
