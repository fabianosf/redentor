import { Link } from 'react-router-dom'
import { Mail, Phone, ShieldCheck } from 'lucide-react'
import { ETHICS_CHANNEL_URL, contactInfo } from '@/data'

export function ContactBand() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="overflow-hidden rounded-2xl bg-navy px-6 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Fale conosco</p>
              <h2 className="mt-2 text-3xl font-extrabold">Estamos prontos para atender você</h2>
              <p className="mt-3 max-w-xl text-white/75">
                Dúvidas, sugestões ou denúncias: canais oficiais do Grupo Redentor.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/fale-conosco" className="btn-gold">
                  Enviar mensagem
                </Link>
                <a
                  href={ETHICS_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                >
                  Canal de Ética
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-3 text-sm hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span>
                    {phone.label}: <strong>{phone.value}</strong>
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.emails[0].value}`}
                className="flex items-center gap-3 text-sm hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>{contactInfo.emails[0].value}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Canal seguro de denúncias disponível 24h.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
