import Link from "next/link"
import { Phone, ExternalLink } from "lucide-react"
import ServicePackages from "@/components/service-packages"
import FutureChanges from "@/components/future-changes"
import PrivacyModal from "@/components/privacy-modal"
import CookieModal from "@/components/cookie-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Servicios de Desarrollo Web
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones web profesionales diseñadas para hacer crecer tu negocio
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section id="servicios" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Elige tu Paquete Ideal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecciona el paquete que mejor se adapte a tus necesidades y añade mantenimiento anual si lo deseas
            </p>
          </div>
          <ServicePackages />
        </section>

        <section id="evoluciones" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Evoluciones Futuras</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tu web puede crecer contigo. Estos son nuestros precios para futuras mejoras
            </p>
          </div>
          <FutureChanges />
        </section>

        <section id="contacto" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Hablamos?</h2>
            <p className="text-gray-600">Estoy aquí para ayudarte a hacer realidad tu proyecto web</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 mr-3 text-gray-600" />
                <span className="text-lg font-medium">+34 682704197</span>
              </div>

              <Link
                href="https://caldeix.github.io/me/"
                target="_blank"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-6 group"
              >
                <ExternalLink className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Ver mi CV y experiencia
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Servicios de Desarrollo Web</p>
              <p className="text-gray-400 text-sm mt-1">
                Creado con ❤️ por{" "}
                <a 
                  href="https://caldeix.github.io/me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  bycaldeix
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <PrivacyModal />
              <CookieModal />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
