import { ArrowRight, Zap, Settings, Rocket } from "lucide-react"

export default function FutureChanges() {
  const changes = [
    {
      title: "Cambios Pequeños",
      price: "25€",
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
      borderColor: "border-green-200",
    },
    {
      title: "Modificaciones Medias",
      price: "50€",
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
      borderColor: "border-blue-200",
    },
    {
      title: "Evoluciones Grandes",
      price: "150€-350€",
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
      borderColor: "border-purple-200",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {changes.map((change, index) => {
        const IconComponent = change.icon
        return (
          <div
            key={index}
            className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border ${change.borderColor} p-8 hover:shadow-2xl transition-all duration-300 group hover:scale-105`}
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${change.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{change.title}</h3>
            <div className={`text-3xl font-bold bg-gradient-to-r ${change.color} bg-clip-text text-transparent mb-4`}>
              {change.price}
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
