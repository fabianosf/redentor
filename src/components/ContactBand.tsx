import { Link } from 'react-router-dom'
import { Mail, Phone, ShieldCheck } from 'lucide-react'
import { ETHICS_CHANNEL_URL, contactInfo } from '@/data'
import { useLanguage } from '@/i18n'

export function ContactBand() {
  const { t } = useLanguage()

  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="overflow-hidden rounded-2xl bg-navy px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {t('contactBand.eyebrow')}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                {t('contactBand.title')}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/75 sm:text-base">
                {t('contactBand.subtitle')}
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link to="/fale-conosco" className="btn-gold w-full sm:w-auto">
                  {t('contactBand.sendMessage')}
                </Link>
                <a
                  href={ETHICS_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white w-full sm:w-auto"
                >
                  {t('contactBand.ethicsChannel')}
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm sm:p-6">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-start gap-3 text-sm hover:text-gold sm:items-center"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold sm:mt-0" aria-hidden="true" />
                  <span className="min-w-0 break-words">
                    {phone.label}: <strong>{phone.value}</strong>
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.emails[0].value}`}
                className="flex items-start gap-3 text-sm hover:text-gold sm:items-center"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold sm:mt-0" aria-hidden="true" />
                <span className="min-w-0 break-all">{contactInfo.emails[0].value}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{t('contactBand.ethicsNote')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
