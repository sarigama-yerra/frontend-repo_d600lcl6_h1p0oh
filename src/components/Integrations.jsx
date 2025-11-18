import { Link2, Server, Lock } from 'lucide-react'

export default function Integrations() {
  return (
    <section id="integrations" className="py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Интеграции и безопасность</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Платформа подключается к Moodle LMS и другим источникам данных. Безопасность и приватность — приоритет.</p>

            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><Link2 className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" /> API-интеграция с Moodle: курсы, оценки, активность</li>
              <li className="flex items-start gap-2"><Server className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" /> Синхронизация по расписанию и вебхуки</li>
              <li className="flex items-start gap-2"><Lock className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" /> Данные хранятся в соответствии с законодательством РК</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <p className="text-slate-300 text-sm">Пример подключения</p>
            <div className="mt-3 rounded-lg bg-slate-950 p-4 text-xs text-slate-300 font-mono overflow-auto">
              <pre>{`fetch(`${'${import.meta.env.VITE_BACKEND_URL}'}/moodle/sync`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ courseId: 123 }),
})`}</pre>
            </div>
            <p className="mt-3 text-xs text-slate-400">Базовый URL настраивается через переменную окружения.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
