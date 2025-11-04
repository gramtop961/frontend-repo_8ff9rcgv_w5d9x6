import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400/40 to-red-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-yellow-300/40 to-orange-500/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900"
            >
              Fast. Fresh. <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Flame‑Grilled</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg text-neutral-700 max-w-xl"
            >
              Crave‑worthy burgers, crispy fries, and icy sips delivered hot and fast. Your new favorite fast food starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow"
              >
                Order Now
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-md border border-black/10 px-6 py-3 text-neutral-800 font-semibold hover:bg-neutral-50"
              >
                View Menu
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center gap-4 text-sm text-neutral-700"
            >
              <span className="inline-flex items-center gap-1 text-orange-600 font-semibold">
                <Star size={16} className="fill-orange-500 text-orange-500" /> 4.9/5
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={16} className="text-neutral-500" /> 15‑20 min delivery
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl shadow-orange-500/10">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
                alt="Signature burger with crispy fries and soda"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
