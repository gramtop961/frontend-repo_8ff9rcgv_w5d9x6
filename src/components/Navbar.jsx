import { ShoppingBag, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold">FB</span>
            <span className="text-xl font-extrabold tracking-tight text-neutral-900">FlameBite</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#menu" className="hover:text-neutral-900 transition-colors">Menu</a>
            <a href="#deals" className="hover:text-neutral-900 transition-colors">Deals</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors">
              <Phone size={18} />
              Call
            </a>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow">
              <ShoppingBag size={18} />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
