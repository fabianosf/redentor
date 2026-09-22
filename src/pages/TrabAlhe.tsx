import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import { jobOpenings, jobRoles, jobsInfo, contactInfo } from '@/data'

interface FormData {
  nome: string
  email: string
  telefone: string
  cargo: string
  cnh: string
  mensagem: string
}

const initialForm: FormData = {
  nome: '',
  email: '',
  telefone: '',
  cargo: '',
  cnh: '',
  mensagem: '',
}

const ALLOWED_KEYS = new Set(Object.keys(initialForm))

export function TrabAlhe() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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
        title="Trabalhe conosco"
        breadcrumb="Trabalhe"
        description="Envie seu currículo e faça parte do Grupo Redentor."
      />

      <section className="py-14 sm:py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <article className="card-surface p-6">
              <h2 className="text-lg font-bold text-navy">Vagas em destaque</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {jobOpenings.map((job) => (
                  <span
                    key={job.id}
                    className="rounded-full border border-navy/15 bg-offwhite px-3 py-1.5 text-sm font-medium text-navy"
                  >
                    {job.title}
                  </span>
                ))}
              </div>
            </article>

            <article className="card-surface p-6">
              <h2 className="text-lg font-bold text-navy">Inscrições presenciais</h2>
              <p className="mt-3 text-sm text-ink-muted">{jobsInfo.schedule}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {jobsInfo.addresses.map((address) => (
                  <li key={address}>{address}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                E-mail:{' '}
                <a href={`mailto:${jobsInfo.email}`} className="font-medium text-navy hover:underline">
                  {jobsInfo.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Telefones:{' '}
                {contactInfo.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && ' · '}
                    <a href={`tel:${p.tel}`} className="font-medium text-navy hover:underline">
                      {p.value}
                    </a>
                  </span>
                ))}
              </p>
            </article>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Cadastre seu currículo</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Preencha os dados abaixo. Campos com * são obrigatórios.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="font-semibold text-emerald-800">Currículo enviado com sucesso!</p>
                <p className="mt-1 text-sm text-emerald-700">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">Nome completo *</label>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={320}
                    className="field-input"
                  />
                </div>
                <div>
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
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Cargo pretendido *</label>
                  <select
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    required
                    className="field-input"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">CNH</label>
                  <input
                    name="cnh"
                    value={form.cnh}
                    onChange={handleChange}
                    placeholder="Ex.: D, E"
                    maxLength={20}
                    className="field-input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">Currículo (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="field-input file:mr-3 file:rounded-lg file:border-0 file:bg-navy/5 file:px-3 file:py-1 file:text-sm file:font-medium file:text-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">Observações</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="field-input min-h-[110px]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-gold">
                    Enviar currículo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
