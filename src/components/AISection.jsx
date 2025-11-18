import { Bot, Lightbulb, MessageSquare } from 'lucide-react'

export default function AISection() {
  const items = [
    {
      title: 'Подсказки преподавателям',
      desc: 'Адаптивные рекомендации по заданиям, дедлайнам и дополнительным материалам для улучшения результатов.',
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      title: 'Советы студентам',
      desc: 'Персональные планы обучения, рекомендации по курсам и прогноз вероятности отчисления.',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: 'Автоматические отчеты',
      desc: 'Готовые еженедельные сводки по группам и курсам в мессенджерах и email.',
      icon: <Bot className="h-5 w-5" />
    },
  ]

  return (
    <section id="ai" className="py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI-возможности</h2>
          <p className="mt-3 text-slate-300">Рекомендательные алгоритмы помогают вовремя поддержать студентов и оптимизировать работу преподавателей.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-slate-800/60 border border-slate-700 p-6">
              <div className="h-10 w-10 rounded-lg bg-sky-500/10 text-sky-300 grid place-items-center mb-3">{i.icon}</div>
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
