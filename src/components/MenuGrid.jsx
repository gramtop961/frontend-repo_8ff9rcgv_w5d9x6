import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    title: 'FlameBite Classic',
    desc: 'Juicy beef patty, cheddar, lettuce, tomato, signature sauce',
    price: 7.99,
    image:
      'https://images.unsplash.com/photo-1551782450-17144c3a80da?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Spicy Inferno',
    desc: 'Double pepper jack, jalapeños, chipotle mayo, onions',
    price: 9.49,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Crispy Chicken Stack',
    desc: 'Crispy fillet, pickles, slaw, honey heat glaze',
    price: 8.49,
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Truffle Fries',
    desc: 'Hand‑cut fries, truffle oil, parmesan, herbs',
    price: 4.99,
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Mango Fizz',
    desc: 'Tropical mango soda with lime',
    price: 2.99,
    image:
      'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Loaded Box',
    desc: 'Burger, fries, and drink combo',
    price: 12.49,
    image:
      'https://images.unsplash.com/photo-1550547660-1cdb6c8f1da5?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Popular Picks</h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Crowd favorites made fresh to order. Add to your box and check out in seconds.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-orange-600 hover:text-orange-700">
            View full menu →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-800">${item.price.toFixed(2)}</span>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white font-semibold hover:bg-neutral-800">
                  <Plus size={18} /> Add to box
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
