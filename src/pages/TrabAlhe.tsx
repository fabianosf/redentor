import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import {
  contactInfo,
  jobOpenings,
  jobRoleKeys,
  jobsInfo,
  trainingItems,
} from '@/data'
import { useLanguage } from '@/i18n'

interface FormData {
  nome: string
  email: string
  celular: string
  cargo: string
  cnh: string
  mensagem: string
  lgpd: boolean
  veracidade: boolean
  informativo: boolean
}

const initialForm: FormData = {
  nome: '',
  email: '',
  celular: '',
  cargo: '',
  cnh: '',
  mensagem: '',
  lgpd: false,
  veracidade: false,
  informativo: false,
}

const ALLOWED_KEYS = new Set(Object.keys(initialForm))

export function TrabAlhe() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const target = e.target
    const { name } = target
    if (!ALLOWED_KEYS.has(name)) return
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: target.checked }))
      return
    }
    setForm((prev) => ({ ...prev, [name]: target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.lgpd || !form.veracidade) return
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
              <h2 className="text-lg font-bold text-navy">{t('work.contactsTitle')}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {contactInfo.phones.map((phone, index) => (
                  <li key={phone.tel} className="flex items-start gap-2.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                    <span>
                      {index === 0 ? t('work.callRedentor') : t('work.callBarra')}:{' '}
                      <a href={`tel:${phone.tel}`} className="font-medium text-navy hover:underline">
                        {phone.value}
                      </a>
                    </span>
                  </li>
                ))}
                {jobsInfo.emails.map((email) => (
                  <li key={email.value} className="flex items-start gap-2.5">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                    <span>
                      {t('work.sendEmail')} ({email.label}):{' '}
                      <a
                        href={`mailto:${email.value}`}
                        className="break-all font-medium text-navy hover:underline"
                      >
                        {email.value}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-navy">{t('work.inPerson')}</p>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                {jobsInfo.addresses.map((address) => (
                  <li key={address}>{address}</li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-5 sm:p-6">
              <h2 className="text-lg font-bold text-navy">{t('work.scheduleTitle')}</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {jobsInfo.schedule.map((item) => (
                  <li
                    key={item.dayKey}
                    className="flex justify-between gap-4 border-b border-slate-100 pb-2 last:border-0"
                  >
                    <span className="font-medium text-navy">{t(item.dayKey)}</span>
                    <span>{t(item.hoursKey)}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-5 sm:p-6">
              <h2 className="text-lg font-bold text-navy">{t('work.trainingsTitle')}</h2>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
                {trainingItems.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.fullName')}
                  </label>
                  <input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    className="field-input"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.email')}
                  </label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.mobile')}
                  </label>
                  <input
                    name="celular"
                    value={form.celular}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    className="field-input"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.role')}
                  </label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.cnh')}
                  </label>
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
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.resume')}
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="field-input file:mr-3 file:rounded-lg file:border-0 file:bg-navy/5 file:px-3 file:py-1 file:text-sm file:font-medium file:text-navy"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    {t('work.notes')}
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={3}
                    className="field-input min-h-[90px]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-4">
                  <label className="flex items-start gap-3 text-sm text-ink-muted">
                    <input
                      type="checkbox"
                      name="lgpd"
                      checked={form.lgpd}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-navy focus:ring-navy"
                    />
                    <span>{t('work.lgpdConsent')}</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-ink-muted">
                    <input
                      type="checkbox"
                      name="veracidade"
                      checked={form.veracidade}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-navy focus:ring-navy"
                    />
                    <span>{t('work.truthConsent')}</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-ink-muted">
                    <input
                      type="checkbox"
                      name="informativo"
                      checked={form.informativo}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-navy focus:ring-navy"
                    />
                    <span>{t('work.newsletterConsent')}</span>
                  </label>
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
