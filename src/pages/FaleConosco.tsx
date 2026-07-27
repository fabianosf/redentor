import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ContactForm {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const initial: ContactForm = { nome: '', email: '', assunto: '', mensagem: '' }

const addresses = [
  {
    empresa: 'Viação Redentor',
    logradouro: 'Estrada do Gabinal, 1395 – Freguesia de Jacarepaguá',
    cidade: 'Rio de Janeiro – RJ, 22763-153',
  },
  {
    empresa: 'Transportes Futuro',
    logradouro: 'Estrada do Gabinal, 1381 – Freguesia de Jacarepaguá',
    cidade: 'Rio de Janeiro – RJ, 22763-153',
  },
  {
    empresa: 'Transportes Barra',
    logradouro: 'Rua Anália Franco, 150 – Vila Valqueire',
    cidade: 'Rio de Janeiro – RJ, 21330-120',
  },
]

const ALLOWED_KEYS = new Set(Object.keys(initial))

export function FaleConosco() {
  const [form, setForm] = useState<ContactForm>(initial)
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    if (!ALLOWED_KEYS.has(name)) return
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="container mx-auto px-4 pt-16 pb-10">
      <div className="flex items-center p-4 my-4 rounded shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Fale Conosco</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
        {/* Telefones */}
        <div className="p-4 border border-gray-200 rounded text-sm">
          <p className="mb-2">
            <span className="font-semibold">Ligue Para Viação Redentor:</span>{' '}
            <a href="tel:+552124450910" className="text-blue-600 hover:underline">
              (21) 2445-0910
            </a>
          </p>
          <p className="mb-4">
            <span className="font-semibold">Ligue Para Transportes Barra:</span>{' '}
            <a href="tel:+552135154666" className="text-blue-600 hover:underline">
              (21) 3515-4666
            </a>
          </p>
          <p className="font-semibold mb-1">Horários:</p>
          <ul className="font-mono text-gray-600 space-y-0.5">
            {[
              ['Seg', '08:00 – 18:00'],
              ['Ter', '08:00 – 18:00'],
              ['Qua', '08:00 – 18:00'],
              ['Qui', '08:00 – 18:00'],
              ['Sex', '08:00 – 17:00'],
              ['Sab', 'Fechado'],
              ['Dom', 'Fechado'],
            ].map(([d, h]) => (
              <li key={d}>
                {d}: {h}
              </li>
            ))}
          </ul>
        </div>

        {/* E-mails / Acidentes */}
        <div className="p-4 border border-gray-200 rounded text-sm space-y-3">
          <p>
            <span className="font-semibold">E-mail:</span>{' '}
            <a
              href="mailto:rh@gruporedentor.com.br"
              className="text-blue-600 hover:underline"
            >
              rh@gruporedentor.com.br
            </a>
          </p>
          <p>
            <span className="font-semibold">E-mail:</span>{' '}
            <a
              href="mailto:rh@transportesbarra.com.br"
              className="text-blue-600 hover:underline"
            >
              rh@transportesbarra.com.br
            </a>
          </p>
          <hr className="border-gray-200" />
          <p className="text-gray-600">
            Ocorrendo acidentes envolvendo nossos ônibus, possuímos um departamento
            que trata desses casos.
          </p>
          <p className="font-semibold">Atendimento por telefone:</p>
          <p>
            <a href="tel:+552124450910" className="text-blue-600 hover:underline">
              (21) 2445-0910
            </a>{' '}
            – Opção 2
          </p>
          <p className="text-gray-500">Seg a Sex: 09:00 às 12:00 / 13:00 às 16:00</p>
          <p>
            <span className="font-semibold">E-mail acidentes:</span>{' '}
            <a
              href="mailto:acidentes@gruporedentor.com.br"
              className="text-blue-600 hover:underline"
            >
              acidentes@gruporedentor.com.br
            </a>
          </p>
        </div>

        {/* Endereços */}
        <div className="p-4 border border-gray-200 rounded text-sm space-y-3">
          <p className="font-semibold">Nossos Endereços:</p>
          {addresses.map(a => (
            <div key={a.empresa}>
              <p className="font-semibold">{a.empresa}:</p>
              <p className="text-gray-600">{a.logradouro}</p>
              <p className="text-gray-600">{a.cidade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Fale com a gente
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Mande suas sugestões, reclamações ou elogios.{' '}
          <a
            href="https://contatoseguro.com.br/pt/gruporedentor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Caso tenha uma denúncia a fazer, clique aqui.
          </a>
        </p>

        {sent ? (
          <div className="rounded bg-green-50 border border-green-200 p-6 text-center">
            <p className="text-green-700 font-semibold">Mensagem enviada com sucesso!</p>
            <p className="text-green-600 text-sm mt-1">
              Responderemos em breve pelo e-mail informado.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assunto:
              </label>
              <input
                type="text"
                name="assunto"
                value={form.assunto}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem:
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400 min-h-[150px]"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-800 transition-colors"
              >
                Enviar
              </button>
              <button
                type="reset"
                onClick={() => setForm(initial)}
                className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
              >
                Apagar
              </button>
            </div>
          </form>
        )}
      </div>

      <hr className="my-10 border-gray-200" />
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
      >
        ← Voltar para Home
      </Link>
    </main>
  )
}
