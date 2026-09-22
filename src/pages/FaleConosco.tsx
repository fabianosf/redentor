import { useState } from 'react'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import {
  ETHICS_CHANNEL_URL,
  contactAddresses,
  contactInfo,
} from '@/data'

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
        title="Fale Conosco"
        breadcrumb="Contato"
        description="Canais oficiais de atendimento do Grupo Redentor."
      />

      <section className="section-pad">
        <div className="section-shell space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <article className="card-surface p-5 sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5">
                <Phone className="h-5 w-5 text-navy" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-navy">Telefones</h2>
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
              <h2 className="mt-4 text-lg font-bold text-navy">E-mails</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {contactInfo.emails.map((email) => (
                  <li key={email.value}>
                    {email.label}:{' '}
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
              <h2 className="mt-4 text-lg font-bold text-navy">Garagens</h2>
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
              <h2 className="text-xl font-bold text-navy">Canal de Ética</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Para denúncias, utilize o canal seguro e confidencial do Grupo Redentor.
              </p>
              <a
                href={ETHICS_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 inline-flex gap-2"
              >
                Acessar Canal de Ética
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="card-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">Envie uma mensagem</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Sugestões, reclamações ou elogios. Responderemos pelo e-mail informado.
              </p>

              {sent ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <p className="font-semibold text-emerald-800">Mensagem enviada com sucesso!</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    Responderemos em breve pelo e-mail informado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Nome *</label>
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
                      maxLength={100}
                      className="field-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-ink">Assunto *</label>
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
                    <label className="mb-1.5 block text-sm font-medium text-ink">Mensagem *</label>
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
                      Enviar mensagem
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
