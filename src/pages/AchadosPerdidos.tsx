import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

interface LostForm {
  linha: string
  data: string
  descricao: string
  telefone: string
}

const initial: LostForm = { linha: '', data: '', descricao: '', telefone: '' }
const ALLOWED_KEYS = new Set(Object.keys(initial))

export function AchadosPerdidos() {
  const [form, setForm] = useState<LostForm>(initial)
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    if (!ALLOWED_KEYS.has(name)) return
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <PageHero
        title="Achados e Perdidos"
        description="Perdeu algo em um dos nossos ônibus? Registre aqui ou ligue para nós."
      />

      <section className="py-14 sm:py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="card-surface h-fit p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy">Atendimento</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Além do formulário, você também pode ligar para a central de Achados e Perdidos.
            </p>
            <a
              href="tel:+552124450910"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy/5 px-4 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (21) 2445-0910
            </a>
          </article>

          <article className="card-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Registrar ocorrência</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Informe linha ou número do ônibus, data e descrição do objeto.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="font-semibold text-emerald-800">Registro enviado com sucesso!</p>
                <p className="mt-1 text-sm text-emerald-700">
                  Nossa equipe entrará em contato pelo telefone informado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Linha / ônibus *
                  </label>
                  <input
                    name="linha"
                    value={form.linha}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Data *</label>
                  <input
                    type="date"
                    name="data"
                    value={form.data}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">Descrição *</label>
                  <textarea
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="field-input min-h-[120px]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">Telefone *</label>
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    className="field-input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-gold">
                    Enviar registro
                  </button>
                </div>
              </form>
            )}
          </article>
        </div>
      </section>
    </main>
  )
}
