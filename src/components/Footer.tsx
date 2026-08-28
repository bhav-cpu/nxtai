import React from "react";
import { Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left side: Copyright text */}
        <p className="text-zinc-500 text-sm text-center sm:text-left">
          © 2025 nxtai.co.in. All rights reserved.
        </p>

        {/* Right side: Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/nxt.bhav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Camera className="w-5 h-5" />
          </a>
          <a
            href="https://chat.whatsapp.com/Dd0DMHLlOANLVBAXtA5aji?s=cl&p=i&mlu=4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
