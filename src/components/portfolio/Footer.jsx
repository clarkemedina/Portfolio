import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Clarke-Kent Navoa Medina. All rights reserved.
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
        </div>
      </div>
    </footer>
  );
}