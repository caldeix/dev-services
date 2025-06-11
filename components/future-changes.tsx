import { ArrowRight, Zap, Settings, Rocket, ShieldCheck } from "lucide-react"

export default function FutureChanges() {
  const changes: Array<{
    title: string
    price: number
    discount: boolean
    discount_percent: number
    icon: any
    description: string
    examples: string[]
    color: string
    bgColor: string
    borderColor: string
  }> = [
    {
      title: "Cambios Pequeños",
      price: 50,
      discount: false,
      discount_percent: 20, // 20% discount
      icon: Zap,
      description: "Modificaciones menores que no afectan a la estructura",
      examples: [
        "Cambios de texto",
        "Actualización de imágenes",
        "Pequeños ajustes de estilo",
        "Corrección de errores menores",
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Modificaciones Medias",
      price: 125,
      discount: false,
      discount_percent: 30,
      icon: Settings,
      description: "Cambios que requieren más tiempo pero no alteran la estructura principal",
      examples: [
        "Añadir nuevas secciones",
        "Implementar formularios adicionales",
        "Cambios en el diseño de páginas existentes",
        "Integración de widgets básicos",
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Evoluciones Grandes",
      price: 550, // Using the higher value for calculation
      discount: false,
      discount_percent: 43, // 15% discount
      icon: Rocket,
      description: "Cambios significativos que requieren replanteamiento o nuevas funcionalidades",
      examples: [
        "Rediseño completo de secciones",
        "Implementación de nuevas funcionalidades complejas",
        "Integración con sistemas externos",
        "Desarrollo de características personalizadas",
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {changes.map((change, index) => {
        const IconComponent = change.icon
        return (
          <div
            key={index}
            className={`relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border ${change.borderColor} p-8 hover:shadow-2xl transition-all duration-300 group hover:scale-105 ${
              change.discount ? 'ring-2 ring-offset-4 ring-red-400' : ''
            }`}
          >
            {change.discount && (
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                ¡Oferta!
              </div>
            )}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${change.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{change.title}</h3>
            <div className="mb-4">
              {change.discount && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    -{change.discount_percent}%
                  </span>
                  <span className="text-gray-500 line-through text-lg">
                    {change.price}€ 
                  </span>
                </div>
              )}
              <div className={`text-3xl font-bold bg-gradient-to-r ${change.color} bg-clip-text text-transparent`}>
                {change.discount 
                  ? `${Math.round(change.price * (1 - change.discount_percent / 100))}€` 
                  : `${change.price}€`}
                {change.title === "Evoluciones Grandes" && !change.discount}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{change.description}</p>

            <ul className="space-y-3">
              {change.examples.map((example, i) => (
                <li key={i} className="flex items-start group/item">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${change.color} flex items-center justify-center mr-3 mt-0.5`}
                  >
                    <ArrowRight className="h-3 w-3 text-white group-hover/item:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="text-gray-700">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
