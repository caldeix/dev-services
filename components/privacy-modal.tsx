"use client"

import { useState } from "react"
import { X, Shield } from "lucide-react"

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-300 hover:text-white transition-colors hover:underline"
      >
        Política de Privacidad
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Política de Privacidad</h3>
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
                <h4 className="font-bold text-lg text-gray-800 mb-3">1. Introducción</h4>
                <p className="text-gray-600 leading-relaxed">
                  Bienvenido a mi portafolio web. En este sitio, me comprometo a respetar tu privacidad. Esta política
                  describe cómo se maneja tu información al interactuar con mi sitio web.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">2. Información Recopilada</h4>
                <p className="text-gray-600 leading-relaxed">
                  Este sitio web no recopila, almacena ni procesa ninguna información personal de los usuarios.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">3. Uso de la Información</h4>
                <p className="text-gray-600 leading-relaxed">
                  Al no recopilar información personal, no hay uso de datos personales por parte de este sitio web.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">4. Contacto</h4>
                <p className="text-gray-600 leading-relaxed">
                  Si decides contactarme a través de WhatsApp o teléfono, la información que proporciones será utilizada
                  únicamente para responder a tu consulta y no será compartida con terceros.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">5. Cambios en la Política de Privacidad</h4>
                <p className="text-gray-600 leading-relaxed">
                  Esta política puede ser actualizada ocasionalmente. Los cambios serán publicados en esta página.
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
