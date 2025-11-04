import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-orange-500 to-red-500 text-white font-bold">FB</span>
              <span className="text-lg font-extrabold text-neutral-900">FlameBite</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-xs">
              Flame‑grilled goodness served hot and fast. Order online or swing by for a quick bite.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (234) 567‑890</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> 123 Flame St, Food City</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-900">Hours</h4>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700">
              <li>Mon‑Thu: 10:00 – 22:00</li>
              <li>Fri‑Sat: 10:00 – 23:30</li>
              <li>Sun: 11:00 – 21:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
                <Instagram size={16} /> Instagram
              </a>
              <a aria-label="Facebook" href="#" className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
                <Facebook size={16} /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 pt-6 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} FlameBite. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
