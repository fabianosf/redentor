import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import { jobOpenings, jobRoleKeys, jobsInfo, contactInfo } from '@/data'
import { useLanguage } from '@/i18n'

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
  const { t } = useLanguage()

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
        title={t('work.title')}
        breadcrumb={t('work.breadcrumb')}
        description={t('work.description')}
      />

      <section className="section-pad">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <article className="card-surface p-5 sm:p-6">
              <h2 className="text-lg font-bold text-navy">{t('work.featured')}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {jobOpenings.map((job) => (
                  <span
                    key={job.id}
                    className="rounded-full border border-navy/15 bg-offwhite px-3 py-1.5 text-sm font-medium text-navy"
                  >
                    {t(job.titleKey)}
                  </span>
                ))}
              </div>
            </article>

            <article className="card-surface p-5 sm:p-6">
              <h2 className="text-lg font-bold text-navy">{t('work.inPerson')}</h2>
              <p className="mt-3 text-sm text-ink-muted">{t('jobs.schedule')}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {jobsInfo.addresses.map((address) => (
                  <li key={address}>{address}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                {t('jobs.emailLabel')}{' '}
                <a href={`mailto:${jobsInfo.email}`} className="font-medium text-navy hover:underline">
                  {jobsInfo.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                {t('work.phones')}{' '}
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

          <div className="card-surface p-5 sm:p-6 lg:p-8">
            <h2 className="text-xl font-bold text-navy">{t('work.formTitle')}</h2>
            <p className="mt-2 text-sm text-ink-muted">{t('work.formHint')}</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="font-semibold text-emerald-800">{t('work.successTitle')}</p>
                <p className="mt-1 text-sm text-emerald-700">{t('work.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.fullName')}</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.email')}</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.phone')}</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.role')}</label>
                  <select
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    required
                    className="field-input"
                  >
                    <option value="" disabled>
                      {t('work.select')}
                    </option>
                    {jobRoleKeys.map((roleKey) => (
                      <option key={roleKey} value={roleKey}>
                        {t(roleKey)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.cnh')}</label>
                  <input
                    name="cnh"
                    value={form.cnh}
                    onChange={handleChange}
                    placeholder={t('work.cnhPlaceholder')}
                    maxLength={20}
                    className="field-input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.resume')}</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="field-input file:mr-3 file:rounded-lg file:border-0 file:bg-navy/5 file:px-3 file:py-1 file:text-sm file:font-medium file:text-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('work.notes')}</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="field-input min-h-[110px]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    {t('work.submit')}
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
