import { ShoppingBag, Phone, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold">FB</span>
              <span className="text-xl font-extrabold tracking-tight">FlameBite</span>
            </a>

            <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-700">
              {[
                { href: '#menu', label: 'Menu' },
                { href: '#deals', label: 'Deals' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center rounded-full px-3 py-2 hover:bg-neutral-100 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                <Phone size={18} />
                Call
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                <ShoppingBag size={18} />
                Order Now
              </button>
            </div>

            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 bg-white p-2 text-neutral-800"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
              <a href="#menu" className="rounded-md px-2 py-2 hover:bg-neutral-50">Menu</a>
              <a href="#deals" className="rounded-md px-2 py-2 hover:bg-neutral-50">Deals</a>
              <a href="#contact" className="rounded-md px-2 py-2 hover:bg-neutral-50">Contact</a>
              <div className="pt-2 flex items-center gap-2">
                <a href="tel:+1234567890" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
                  <Phone size={18} /> Call
                </a>
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 text-sm font-semibold text-white">
                  <ShoppingBag size={18} /> Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
