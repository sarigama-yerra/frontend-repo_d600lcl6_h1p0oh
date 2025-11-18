import { TrendingUp, Users, Activity, AlertTriangle } from 'lucide-react'

export default function DashboardPreview() {
  const cards = [
    { title: 'Средний балл', value: '3.4', change: '+0.2', icon: <TrendingUp className="h-4 w-4" />, color: 'from-emerald-500/20' },
    { title: 'Риск-группа', value: '12%', change: '-3%', icon: <AlertTriangle className="h-4 w-4" />, color: 'from-rose-500/20' },
    { title: 'Активность в LMS', value: '76%', change: '+5%', icon: <Activity className="h-4 w-4" />, color: 'from-indigo-500/20' },
    { title: 'Охват студентов', value: '4.2k', change: '+320', icon: <Users className="h-4 w-4" />, color: 'from-sky-500/20' },
  ]

  return (
    <section id="analytics" className="py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Превью дашборда</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Быстрый взгляд на ключевые метрики по курсам и студентам. Полные отчеты доступны после интеграции с вашей LMS.</p>
          </div>
          <a href="#cta" className="shrink-0 inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium px-5 py-2.5 rounded-lg transition">Получить доступ</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-700 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-4">
              <div className="flex items-center justify-between">
                <p className="text-slate-300 text-sm">{c.title}</p>
                <div className="h-8 w-8 rounded-md bg-sky-500/10 text-sky-300 grid place-items-center">{c.icon}</div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <p className="text-2xl font-semibold text-white">{c.value}</p>
                <span className="text-xs text-emerald-400">{c.change}</span>
              </div>
              <div className={`mt-3 h-12 rounded bg-gradient-to-t ${c.color} to-transparent`} />
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <p className="text-slate-300 text-sm">Динамика успеваемости</p>
            <div className="mt-3 h-48 rounded bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-fuchsia-500/15" />
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <p className="text-slate-300 text-sm">Распределение рисков</p>
            <div className="mt-3 h-48 rounded bg-gradient-to-r from-emerald-500/15 via-amber-500/15 to-rose-500/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
