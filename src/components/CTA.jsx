import { LineChart } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-sky-600 to-indigo-600 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold">Готовы посмотреть демо?</h3>
              <p className="text-sky-50/90 mt-2">Оставьте контакты — команда свяжется, подключит Moodle и покажет, как платформа работает на ваших данных.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input className="sm:col-span-1 bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Имя" />
              <input className="sm:col-span-1 bg-white/10 placeholder-white/60 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Email" />
              <button type="button" className="sm:col-span-1 inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 transition">
                <LineChart className="h-4 w-4" /> Запросить демо
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
