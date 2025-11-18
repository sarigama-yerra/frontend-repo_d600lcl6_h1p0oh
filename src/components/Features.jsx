import { BarChart3, Brain, Users, Shield, Link as LinkIcon, Sparkles } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="h-5 w-5" />, 
      title: 'Визуализация метрик', 
      desc: 'Дашборды посещаемости, оценок, активности в LMS и вовлеченности студентов.'
    },
    {
      icon: <Brain className="h-5 w-5" />, 
      title: 'AI-рекомендации', 
      desc: 'Подсказки преподавателям и персональные советы студентам на основе данных.'
    },
    {
      icon: <Users className="h-5 w-5" />, 
      title: 'Анализ успеваемости', 
      desc: 'Автоматическая сегментация студентов по рискам и траекториям.'
    },
    {
      icon: <LinkIcon className="h-5 w-5" />, 
      title: 'Интеграция с Moodle', 
      desc: 'Бесшовная синхронизация курсов, оценок и активности из Moodle LMS.'
    },
    {
      icon: <Shield className="h-5 w-5" />, 
      title: 'Безопасность', 
      desc: 'Соответствие требованиям по защите персональных данных и ролевая модель доступа.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />, 
      title: 'Прогнозирование рисков', 
      desc: 'ML-модели выявляют вероятность академического отчисления заранее.'
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Что умеет платформа</h2>
          <p className="mt-3 text-slate-300">Собираем, анализируем и визуализируем ключевые образовательные метрики в едином месте.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-slate-800/60 border border-slate-700 p-5 hover:border-slate-600 transition">
              <div className="h-10 w-10 rounded-lg bg-sky-500/10 text-sky-300 grid place-items-center mb-3">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
