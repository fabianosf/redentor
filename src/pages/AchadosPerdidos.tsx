import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/i18n'

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
  const { t } = useLanguage()

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
        title={t('lost.title')}
        description={t('lost.description')}
      />

      <section className="section-pad">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <article className="card-surface h-fit p-5 sm:p-6 lg:p-8">
            <h2 className="text-lg font-bold text-navy">{t('lost.service')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {t('lost.serviceDesc')}
            </p>
            <a
              href="tel:+552124450910"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy/5 px-4 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (21) 2445-0910
            </a>
          </article>

          <article className="card-surface p-5 sm:p-6 lg:p-8">
            <h2 className="text-xl font-bold text-navy">{t('lost.formTitle')}</h2>
            <p className="mt-2 text-sm text-ink-muted">{t('lost.formHint')}</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="font-semibold text-emerald-800">{t('lost.successTitle')}</p>
                <p className="mt-1 text-sm text-emerald-700">{t('lost.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('lost.line')}
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('lost.date')}</label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('lost.descriptionLabel')}
                  </label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">{t('lost.phone')}</label>
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
                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    {t('lost.submit')}
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
