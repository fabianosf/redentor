import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
  nome: string
  sexo: string
  nascimento: string
  naturalidade: string
  nacionalidade: string
  endereco: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  telefone: string
  celular: string
  email: string
  cargo: string
  mensagem: string
}

const initialForm: FormData = {
  nome: '', sexo: '', nascimento: '', naturalidade: '', nacionalidade: '',
  endereco: '', bairro: '', cidade: '', estado: '', cep: '',
  telefone: '', celular: '', email: '', cargo: '', mensagem: '',
}

const trainings = [
  'Formação de Motoristas', 'SMTU', 'Código de Trânsito Brasileiro',
  'Motorista Cidadão', 'Integração para novos funcionários', 'Resolução 168',
  'Visitas Técnicas', 'Rio Diesel – Manutenção', 'Guanabara Diesel – Manutenção',
  'Ciclo de Palestra',
]

const ALLOWED_KEYS = new Set(Object.keys(initialForm))

export function TrabAlhe() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    if (!ALLOWED_KEYS.has(name)) return
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="container mx-auto px-4 pt-20 pb-10">
      <div className="flex items-center p-4 my-4 rounded shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Trabalhe aqui</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
        {/* Telefones */}
        <div className="p-4 border border-gray-200 rounded">
          <p className="mb-2 text-sm">
            <span className="font-semibold">Ligue Para Viação Redentor:</span>{' '}
            <a href="tel:+552124450910" className="text-blue-600 hover:underline">(21) 2445-0910</a>
          </p>
          <p className="mb-4 text-sm">
            <span className="font-semibold">Ligue Para Transportes Barra:</span>{' '}
            <a href="tel:+552135154666" className="text-blue-600 hover:underline">(21) 3515-4666</a>
          </p>
          <p className="font-semibold text-sm mb-1">Horários:</p>
          <ul className="text-sm font-mono space-y-0.5 text-gray-600">
            {[['Seg','08:00 - 18:00'],['Ter','08:00 - 18:00'],['Qua','08:00 - 18:00'],
              ['Qui','08:00 - 18:00'],['Sex','08:00 - 17:00'],['Sab','Fechado'],['Dom','Fechado'],
            ].map(([d, h]) => (
              <li key={d}>{d}: {h}</li>
            ))}
          </ul>
        </div>

        {/* E-mails */}
        <div className="p-4 border border-gray-200 rounded">
          <p className="text-sm mb-2">
            <span className="font-semibold">Envie um e-mail:</span>{' '}
            <a href="mailto:rh@gruporedentor.com.br" className="text-blue-600 hover:underline">
              rh@gruporedentor.com.br
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Envie um e-mail:</span>{' '}
            <a href="mailto:rh@transportesbarra.com.br" className="text-blue-600 hover:underline">
              rh@transportesbarra.com.br
            </a>
          </p>
        </div>

        {/* Treinamentos */}
        <div className="p-4 border border-gray-200 rounded">
          <p className="font-semibold text-sm mb-2">Treinamentos Específicos</p>
          <ul className="text-sm text-gray-600 space-y-0.5 list-disc list-inside">
            {trainings.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Cadastre Seu Currículo</h2>

        {sent ? (
          <div className="rounded bg-green-50 border border-green-200 p-6 text-center">
            <p className="text-green-700 font-semibold">Currículo enviado com sucesso!</p>
            <p className="text-green-600 text-sm mt-1">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
              <input name="nome" value={form.nome} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
              <select name="sexo" value={form.sexo} onChange={handleChange} required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400">
                <option value="" disabled>Escolha</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMININO">Feminino</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nascimento</label>
              <input type="date" name="nascimento" value={form.nascimento} onChange={handleChange} required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Naturalidade</label>
              <input name="naturalidade" value={form.naturalidade} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nacionalidade</label>
              <input name="nacionalidade" value={form.nacionalidade} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Endereço completo</label>
              <input name="endereco" value={form.endereco} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
              <input name="bairro" value={form.bairro} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <input name="cidade" value={form.cidade} onChange={handleChange} required maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <input name="estado" value={form.estado} onChange={handleChange} required maxLength={2}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
              <input name="cep" value={form.cep} onChange={handleChange} required maxLength={9}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefone (recado)</label>
              <input name="telefone" value={form.telefone} onChange={handleChange} maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
              <input name="celular" value={form.celular} onChange={handleChange} required maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required maxLength={320}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cargo pretendido</label>
              <input name="cargo" value={form.cargo} onChange={handleChange} maxLength={100}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
              <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400 min-h-[100px]" />
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <button type="submit"
                className="px-6 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-800 transition-colors">
                Enviar
              </button>
              <button type="reset" onClick={() => setForm(initialForm)}
                className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors">
                Apagar
              </button>
            </div>
          </form>
        )}
      </div>

      <hr className="my-10 border-gray-200" />
      <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
        ← Voltar para Home
      </Link>
    </main>
  )
}
