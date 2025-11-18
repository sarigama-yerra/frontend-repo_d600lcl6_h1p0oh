import { useState } from 'react'
import { Menu, X, LineChart, GraduationCap, Brain, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Возможности', href: '#features' },
    { label: 'Аналитика', href: '#analytics' },
    { label: 'AI-рекомендации', href: '#ai' },
    { label: 'Интеграции', href: '#integrations' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 grid place-items-center shadow-lg shadow-sky-500/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold leading-tight">EduAnalytics</p>
              <p className="text-[10px] uppercase tracking-widest text-sky-300/80">AI for Education</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white text-sm">
                {item.label}
              </a>
            ))}
            <a href="/test" className="text-sky-300 hover:text-sky-200 text-sm">Проверка backend</a>
            <a href="#cta" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              <LineChart className="h-4 w-4" />
              Запросить демо
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-2">
                  {item.label}
                </a>
              ))}
              <a href="/test" className="text-sky-300 hover:text-sky-200 text-sm py-2">Проверка backend</a>
              <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                <LineChart className="h-4 w-4" />
                Запросить демо
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
