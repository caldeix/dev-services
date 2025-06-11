"use client"

import { useState, Fragment } from "react"
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
  discount?: boolean
  discount_percent?: number
  discount_main?: boolean
  discount_percent_main?: number
  features: Feature[]
  popular?: boolean
}

const packages: ServicePackage[] = [
  {
    id: "estatica",
    title: "Básica",
    price: 500,
    maintenancePrice: 100,
    discount: true,
    discount_percent: 45,
    discount_main: true,
    discount_percent_main: 70,
    popular: false,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "3 Páginas", included: true },
      { name: "SSL y hosting", included: true },
      { name: "Dominio", included: true },
      { name: "SEO", included: false },
      { name: "Formularios", included: false },
      { name: "Base de Datos", included: false },
      { name: "Panel de Administración", included: false },
      { name: "API Personalizada", included: false },
    ],
  },
  {
    id: "base-datos",
    title: "Avanzada",
    price: 1500,
    maintenancePrice: 300,
    discount: true,
    discount_percent: 75,
    discount_main: true,
    discount_percent_main: 40,
    popular: true,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "8 Páginas", included: true },
      { name: "SSL y hosting", included: true },
      { name: "Dominio", included: true },
      { name: "SEO", included: true },
      { name: "Formularios", included: true },
      { name: "Base de Datos", included: true },
      { name: "Panel de Administración", included: false },
      { name: "API Personalizada", included: false },
    ],
  },
  {
    id: "completa",
    title: "Completa",
    price: 3500,
    discount: true,
    discount_percent: 35,
    maintenancePrice: 700,
    discount_main: true,
    discount_percent_main: 25,
    popular: false,
    features: [
      { name: "Diseño Responsive", included: true },
      { name: "Páginas Ilimitadas", included: true },
      { name: "SSL y hosting", included: true },
      { name: "Dominio", included: true },
      { name: "SEO", included: true },
      { name: "Formularios", included: true },
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
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
              {pkg.popular && (
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                  Más Popular
                </span>
              )}
              {pkg.discount && (
                <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md whitespace-nowrap">
                  ¡Oferta Limitada!
                </span>
              )}
            </div>

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
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                {pkg.discount && (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    -{pkg.discount_percent}%
                  </span>
                )}
              </div>
              <div className="mt-2">
                {pkg.discount && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn("text-gray-500 line-through text-sm", isSelected ? "text-white" : "text-gray-600")}>
                      {pkg.price}€
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      Ahorra {Math.round(pkg.price * (pkg.discount_percent! / 100))}€
                    </span>
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      {pkg.discount ? Math.round(pkg.price * (1 - pkg.discount_percent! / 100)) : pkg.price}€
                    </span>
                    {hasMaintenance && (
                      <span className="ml-2 text-sm opacity-80 min-w-[80px]">
                        {pkg.discount_main ? (
                          <>
                            <span className={cn("line-through text-xs ", isSelected ? "text-white" : "text-gray-500")}>
                              +{pkg.maintenancePrice}€
                            </span>
                            <span className={cn("ml-1", isSelected ? "text-white" : "text-gray-600")}>
                              +{Math.round(pkg.maintenancePrice * (1 - pkg.discount_percent_main! / 100))}€/año
                            </span>
                          </>
                        ) : (
                          `+ ${pkg.maintenancePrice}€/año`
                        )}
                      </span>
                    )}
                  </div>
                  <div className="h-4">
                    {hasMaintenance && (
                      <div className={cn("text-xs text-gray-600", isSelected ? "text-white" : "text-gray-600")}>
                        Total: {Math.round(
                          (pkg.discount 
                            ? pkg.price * (1 - pkg.discount_percent! / 100) 
                            : pkg.price) +
                          (pkg.discount_main 
                            ? pkg.maintenancePrice * (1 - pkg.discount_percent_main! / 100)
                            : pkg.maintenancePrice)
                        )}€ el primer año
                      </div>
                    )}
                  </div>
                </div>
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
                    <span className={cn("text-sm", isSelected ? (feature.included ? "text-gray-800" : "text-gray-500") : (feature.included ? "text-gray-800" : "text-gray-500"))}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mantenimiento Toggle */}
              <div className={cn("mb-6 p-4 rounded-xl border", isSelected ? "bg-blue-50 border-blue-100" : "bg-gray-50 border-gray-200")}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className={cn("font-medium", isSelected ? "text-blue-800" : "text-gray-800")}>Mantenimiento Anual</p>
                    <p className={cn("text-sm", isSelected ? "text-gray-600" : "text-gray-600")}>Hosting + Dominio + SSL + Soporte</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      {pkg.discount_main && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-500 line-through text-sm">
                            {pkg.maintenancePrice}€
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                            -{pkg.discount_percent_main}%
                          </span>
                        </div>
                      )}
                      <div className={cn("text-lg font-bold", isSelected ? "text-blue-800" : "text-gray-800")}>
                        {pkg.discount_main 
                          ? Math.round(pkg.maintenancePrice * (1 - pkg.discount_percent_main! / 100))
                          : pkg.maintenancePrice}€/año
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleMaintenance(pkg.id)
                      }}
                      className={cn(
                        "relative w-12 h-6 rounded-full transition-colors flex-shrink-0",
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
                {pkg.discount_main && (
                  <div className={cn("text-xs font-medium mt-1", isSelected ? "text-gray-600" : "text-gray-600")}>
                    ¡Ahorras {Math.round(pkg.maintenancePrice * (pkg.discount_percent_main! / 100))}€ al año!
                  </div>
                )}
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
                <p className={cn("text-center text-sm mt-3", isSelected ? "text-blue-100" : "text-gray-500")}>
                  Haz clic para seleccionar este paquete
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
