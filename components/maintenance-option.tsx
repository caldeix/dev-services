"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function MaintenanceOption() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Mantenimiento Anual</h3>

      <div className="flex items-center">
        <button className="relative" onClick={() => setIsSelected(!isSelected)} aria-pressed={isSelected}>
          <div className={cn("w-14 h-7 rounded-full transition-colors", isSelected ? "bg-emerald-500" : "bg-gray-300")}>
            <div
              className={cn(
                "absolute w-5 h-5 bg-white rounded-full top-1 transition-transform",
                isSelected ? "translate-x-8" : "translate-x-1",
              )}
            />
          </div>
        </button>

        <div className="ml-4">
          <p className="font-medium">Añadir mantenimiento anual</p>
          <p className="text-gray-600 text-sm">Incluye hosting, dominio y soporte técnico básico</p>
        </div>

        <div className="ml-auto">
          <span className="text-xl font-bold">
            50€<span className="text-sm font-normal text-gray-600">/año</span>
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>El mantenimiento anual incluye:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Renovación del dominio</li>
          <li>Hosting en servidores de alta velocidad</li>
          <li>Certificado SSL</li>
          <li>Soporte técnico básico</li>
          <li>Copias de seguridad mensuales</li>
        </ul>
      </div>
    </div>
  )
}
