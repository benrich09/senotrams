"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+255746795020\?text=Hello Senotrams, I need your services!" /* TODO: replace with your real WhatsApp number */
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 wa-pulse"
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  );
}
