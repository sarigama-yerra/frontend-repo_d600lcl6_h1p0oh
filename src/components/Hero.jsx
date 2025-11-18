import { Brain, LineChart, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-300 bg-sky-950/40 border border-sky-800/50 rounded-full px-3 py-1 text-xs mb-4">
              <Sparkles className="h-3.5 w-3.5" /> AI-платформа для образования
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Аналитика успеваемости и AI-рекомендации
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              EduAnalytics помогает колледжам и университетам Казахстана понимать прогресс студентов, прогнозировать академические риски и принимать решения на основе данных.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-lg transition">
                <LineChart className="h-5 w-5" /> Запросить демо
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-lg transition">
                Узнать больше
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <p className="text-slate-300 text-sm">Посещаемость</p>
                  <div className="mt-3 h-24 bg-gradient-to-t from-sky-500/20 to-transparent rounded" />
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <p className="text-slate-300 text-sm">Оценки</p>
                  <div className="mt-3 h-24 bg-gradient-to-t from-indigo-500/20 to-transparent rounded" />
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <p className="text-slate-300 text-sm">Активность в LMS</p>
                  <div className="mt-3 h-24 bg-gradient-to-t from-fuchsia-500/20 to-transparent rounded" />
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <p className="text-slate-300 text-sm">Риски</p>
                  <div className="mt-3 h-24 bg-gradient-to-t from-rose-500/20 to-transparent rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
