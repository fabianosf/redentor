import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { footerSections } from '@/data'

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="mb-2"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx="12" cy="12" r="10" />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
          </svg>
          <small className="block mb-3 text-gray-500">
            © 1950 – {new Date().getFullYear()}
          </small>
        </div>

        {/* Dynamic sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h5 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              {section.title}
            </h5>
            <ul className="space-y-1.5 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-gray-800 transition-colors"
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
    </footer>
  )
}
