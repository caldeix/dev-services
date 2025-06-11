"use client"

import { useState } from "react"
import { X, Cookie } from "lucide-react"

export default function CookieModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-300 hover:text-white transition-colors hover:underline"
      >
        Política de Cookies
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-center">
                <Cookie className="h-6 w-6 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Política de Cookies</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">¿Qué son las cookies?</h4>
                <p className="text-gray-600 leading-relaxed">
                  Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo cuando los
                  visitas. Sirven para diversos propósitos, como recordar tus preferencias, analizar cómo utilizas el
                  sitio, o permitir funcionalidades específicas.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Uso de cookies en este sitio</h4>
                <p className="text-gray-600 leading-relaxed">
                  Este sitio web no utiliza cookies propias ni de terceros. No se almacena ningún tipo de información en
                  tu dispositivo cuando navegas por esta página.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">Datos retenidos</h4>
                <p className="text-gray-600 leading-relaxed">
                  Este sitio web no retiene ningún dato personal de los usuarios. La navegación es completamente anónima
                  y no se realiza ningún tipo de seguimiento.
                </p>
              </div>

              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">Última actualización: 25/08/2024</p>
            </div>

            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
