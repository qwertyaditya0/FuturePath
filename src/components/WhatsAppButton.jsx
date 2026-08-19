import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function WhatsAppButton() {
  const phoneNumber = "918429400771";

  const message =
    "Hi Future Path Education, I need admission guidance.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Future Path Education on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition hover:scale-110 hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} fill="currentColor" />

      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-lg sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;