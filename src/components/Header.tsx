import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data'

const LOGO_URL = 'https://gruporedentor.com.br/img/logo200.png'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#212529]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={LOGO_URL} alt="Grupo Redentor" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 text-sm">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded text-gray-300 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                )
              }
              if (item.disabled) {
                return (
                  <span
                    key={item.href}
                    className="px-3 py-2 rounded text-gray-600 cursor-default select-none"
                    aria-disabled="true"
                  >
                    {item.label}
                  </span>
                )
              }
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded transition-colors duration-150 ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Login + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="/portal/"
              className="flex items-center gap-1.5 rounded border border-white/30 px-3 py-1 text-sm text-white hover:bg-white hover:text-[#212529] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
              <strong>Login</strong>
            </a>
            <button
              className="md:hidden p-1.5 text-gray-300 hover:text-white"
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-[#1a1e21] border-t border-white/10">
          {navItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm border-b border-white/5 text-gray-300 hover:text-white"
                >
                  {item.label}
                </a>
              )
            }
            if (item.disabled) {
              return (
                <span
                  key={item.href}
                  className="block px-4 py-2.5 text-sm border-b border-white/5 text-gray-600 cursor-default"
                  aria-disabled="true"
                >
                  {item.label}
                </span>
              )
            }
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm border-b border-white/5 ${
                  pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
