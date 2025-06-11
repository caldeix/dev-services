import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string
  message: string
  className?: string
  disabled?: boolean
}

export default function WhatsAppButton({ phoneNumber, message, className, disabled = false }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  if (disabled) {
    return (
      <button
        disabled
        className={cn("inline-flex items-center justify-center opacity-50 cursor-not-allowed", className)}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Solicitar Información
      </button>
    )
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center justify-center", className)}
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      Solicitar Información
    </a>
  )
}
