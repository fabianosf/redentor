import { useState } from 'react'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import {
  ETHICS_CHANNEL_URL,
  contactAddresses,
  contactInfo,
} from '@/data'
import { useLanguage } from '@/i18n'

interface ContactForm {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const initial: ContactForm = { nome: '', email: '', assunto: '', mensagem: '' }
const ALLOWED_KEYS = new Set(Object.keys(initial))

export function FaleConosco() {
  const [form, setForm] = useState<ContactForm>(initial)
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
        title={t('contact.title')}
        breadcrumb={t('contact.breadcrumb')}
        description={t('contact.description')}
      />

      <section className="section-pad">
        <div className="section-shell space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <article className="card-surface p-5 sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5">
                <Phone className="h-5 w-5 text-navy" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-navy">{t('contact.phones')}</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {contactInfo.phones.map((phone) => (
                  <li key={phone.tel}>
                    {phone.label}:{' '}
                    <a href={`tel:${phone.tel}`} className="font-medium text-navy hover:underline">
                      {phone.value}
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5">
                <Mail className="h-5 w-5 text-navy" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-navy">{t('contact.emails')}</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {contactInfo.emails.map((email) => (
                  <li key={email.value}>
                    {t(email.labelKey)}:{' '}
                    <a
                      href={`mailto:${email.value}`}
                      className="font-medium text-navy hover:underline"
                    >
                      {email.value}
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5">
                <MapPin className="h-5 w-5 text-navy" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-navy">{t('contact.garages')}</h2>
              <ul className="mt-3 space-y-3 text-sm text-ink-muted">
                {contactAddresses.map((address) => (
                  <li key={address.empresa}>
                    <p className="font-semibold text-navy">{address.empresa}</p>
                    <p>{address.logradouro}</p>
                    <p>{address.cidade}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <article className="card-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{t('contact.ethicsTitle')}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {t('contact.ethicsDesc')}
              </p>
              <a
                href={ETHICS_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 inline-flex gap-2"
              >
                {t('contact.ethicsCta')}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="card-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{t('contact.formTitle')}</h2>
              <p className="mt-2 text-sm text-ink-muted">{t('contact.formHint')}</p>

              {sent ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <p className="font-semibold text-emerald-800">{t('contact.successTitle')}</p>
                  <p className="mt-1 text-sm text-emerald-700">{t('contact.successDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">{t('contact.name')}</label>
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
                    <label className="mb-1.5 block text-sm font-medium text-ink">{t('contact.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="field-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-ink">{t('contact.subject')}</label>
                    <input
                      name="assunto"
                      value={form.assunto}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="field-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-ink">{t('contact.message')}</label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="field-input min-h-[140px]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-gold w-full sm:w-auto">
                      {t('contact.submit')}
                    </button>
                  </div>
                </form>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
