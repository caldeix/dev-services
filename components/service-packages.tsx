"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import WhatsAppButton from "@/components/whatsapp-button"

interface Feature {
  name: string
  included: boolean
}

interface ServicePackage {
  id: string
  title: string
  price: number
  maintenancePrice: number
  features: Feature[]
  popular?: boolean
}

const packages: ServicePackage[] = [
  {
    id: "estatica",
    title: "Web Estática",
    price: 175,
    maintenancePrice: 50,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "Hasta 5 páginas", included: true },
      { name: "SEO Básico", included: true },
      { name: "Formulario de Contacto", included: true },
      { name: "Base de Datos", included: false },
      { name: "Panel de Administración", included: false },
      { name: "API Personalizada", included: false },
    ],
  },
  {
    id: "base-datos",
    title: "Con Base de Datos",
    price: 350,
    maintenancePrice: 75,
    popular: true,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "Hasta 8 páginas", included: true },
      { name: "SEO Avanzado", included: true },
      { name: "Formulario de Contacto", included: true },
      { name: "Base de Datos", included: true },
      { name: "Panel de Administración", included: false },
      { name: "API Personalizada", included: false },
    ],
  },
  {
    id: "completa",
    title: "Con BD y Panel Admin",
    price: 750,
    maintenancePrice: 150,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "Páginas Ilimitadas", included: true },
      { name: "SEO Avanzado", included: true },
      { name: "Formularios Avanzados", included: true },
      { name: "Base de Datos", included: true },
      { name: "Panel de Administración", included: true },
      { name: "API Personalizada", included: true },
    ],
  },
]

export default function ServicePackages() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [maintenanceSelections, setMaintenanceSelections] = useState<Record<string, boolean>>({})

  const toggleMaintenance = (packageId: string) => {
    setMaintenanceSelections((prev) => ({
      ...prev,
      [packageId]: !prev[packageId],
    }))
  }

  const getWhatsAppMessage = (pkg: ServicePackage) => {
    const maintenanceText = maintenanceSelections[pkg.id] ? ` + mantenimiento anual (${pkg.maintenancePrice}€/año)` : ""

    return `Estoy interesado en el paquete ${pkg.title}${maintenanceText}`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {packages.map((pkg) => {
        const isSelected = selectedPackage === pkg.id
        const hasMaintenance = maintenanceSelections[pkg.id]
        const totalPrice = pkg.price + (hasMaintenance ? pkg.maintenancePrice : 0)

        return (
          <div
            key={pkg.id}
            className={cn(
              "relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl cursor-pointer group",
              isSelected
                ? "ring-2 ring-blue-500 shadow-2xl scale-105 border-blue-200"
                : "border-gray-200 hover:border-gray-300",
              pkg.popular && "ring-2 ring-emerald-400 border-emerald-200",
            )}
            onClick={() => setSelectedPackage(isSelected ? null : pkg.id)}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Más Popular
                </span>
              </div>
            )}

            <div
              className={cn(
                "p-8 rounded-t-2xl transition-colors",
                isSelected
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : pkg.popular
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                    : "bg-gradient-to-r from-gray-50 to-gray-100",
              )}
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{totalPrice}€</span>
                {hasMaintenance && (
                  <span className="ml-2 text-sm opacity-80">
                    ({pkg.price}€ + {pkg.maintenancePrice}€/año)
                  </span>
                )}
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-emerald-600" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <X className="h-4 w-4 text-red-600" />
                      </div>
                    )}
                    <span className={cn("text-sm", feature.included ? "text-gray-800" : "text-gray-500")}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mantenimiento Toggle */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Mantenimiento Anual</p>
                    <p className="text-sm text-gray-600">Hosting + Dominio + Soporte</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-800 mr-3">{pkg.maintenancePrice}€/año</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleMaintenance(pkg.id)
                      }}
                      className={cn(
                        "relative w-12 h-6 rounded-full transition-colors",
                        hasMaintenance ? "bg-blue-500" : "bg-gray-300",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute w-4 h-4 bg-white rounded-full top-1 transition-transform shadow-sm",
                          hasMaintenance ? "translate-x-7" : "translate-x-1",
                        )}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <WhatsAppButton
                phoneNumber="34682704197"
                message={getWhatsAppMessage(pkg)}
                className={cn(
                  "w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 transform hover:scale-105",
                  isSelected
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl"
                    : pkg.popular
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800",
                )}
                disabled={!isSelected}
              />

              {!isSelected && (
                <p className="text-center text-sm text-gray-500 mt-3">Haz clic para seleccionar este paquete</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
