import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardPreview from './components/DashboardPreview'
import AISection from './components/AISection'
import Integrations from './components/Integrations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <AISection />
        <Integrations />
        <CTA />
      </main>
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} EduAnalytics. Все права защищены.</p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#features" className="hover:text-slate-200">Возможности</a>
            <a href="#analytics" className="hover:text-slate-200">Аналитика</a>
            <a href="#ai" className="hover:text-slate-200">AI</a>
            <a href="#integrations" className="hover:text-slate-200">Интеграции</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
