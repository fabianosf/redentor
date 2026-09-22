import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { footerSections } from '@/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-shell py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
                <circle cx="20" cy="20" r="19" fill="#FFD700" />
                <path
                  d="M20 8c1.2 0 2.2.8 2.5 1.9l.4 1.6h2.6c.7 0 1.2.7.9 1.3l-1.3 2.4 1.7 1.7c.5.5.2 1.4-.5 1.5l-2.7.4-.8 2.6c-.2.7-1.1.9-1.6.4L20 20.3l-1.2 1.5c-.5.5-1.4.3-1.6-.4l-.8-2.6-2.7-.4c-.7-.1-1-1-.5-1.5l1.7-1.7-1.3-2.4c-.3-.6.2-1.3.9-1.3h2.6l.4-1.6C17.8 8.8 18.8 8 20 8z"
                  fill="#001a52"
                />
                <rect x="17.5" y="22" width="5" height="10" rx="1" fill="#001a52" />
              </svg>
              <div className="leading-tight">
                <span className="block text-[11px] font-semibold tracking-[0.18em] text-gold">GRUPO</span>
                <span className="block text-base font-extrabold tracking-wide">REDENTOR</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">© 1950 – {year} Grupo Redentor</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                {section.title}
              </h5>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/65 transition hover:text-gold"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-white/65 transition hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
