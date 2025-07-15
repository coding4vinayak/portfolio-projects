import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  className?: string;
}

export default function WhatsAppButton({ phoneNumber, className = "" }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 ${className}`}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
