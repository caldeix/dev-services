"use client"

import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  included: boolean
}

interface ServiceCardProps {
  title: string
  price: number
  features: Feature[]
  highlighted?: boolean
}

export default function ServiceCard({ title, price, features, highlighted = false }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg",
        highlighted && "ring-2 ring-emerald-500 transform scale-105",
      )}
    >
      <div className={cn("p-6", highlighted ? "bg-emerald-500 text-white" : "bg-gray-50")}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}€</span>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? "" : "text-gray-500"}>{feature.name}</span>
            </li>
          ))}
        </ul>

        <button
          className={cn(
            "w-full mt-6 py-2 px-4 rounded-md font-medium transition-colors",
            highlighted ? "bg-emerald-500 text-white hover:bg-emerald-600" : "bg-gray-800 text-white hover:bg-gray-700",
          )}
          onClick={() => (window.location.href = "#contacto")}
        >
          Solicitar Información
        </button>
      </div>
    </div>
  )
}
