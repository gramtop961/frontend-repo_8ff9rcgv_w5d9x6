import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';

const items = [
  {
    id: 1,
    title: 'FlameBite Classic',
    desc: 'Juicy beef patty, cheddar, lettuce, tomato, signature sauce',
    price: 7.99,
    category: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1551782450-17144c3a80da?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Spicy Inferno',
    desc: 'Double pepper jack, jalapeños, chipotle mayo, onions',
    price: 9.49,
    category: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Crispy Chicken Stack',
    desc: 'Crispy fillet, pickles, slaw, honey heat glaze',
    price: 8.49,
    category: 'Chicken',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Truffle Fries',
    desc: 'Hand‑cut fries, truffle oil, parmesan, herbs',
    price: 4.99,
    category: 'Sides',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Mango Fizz',
    desc: 'Tropical mango soda with lime',
    price: 2.99,
    category: 'Drinks',
    image:
      'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Loaded Box',
    desc: 'Burger, fries, and drink combo',
    price: 12.49,
    category: 'Combos',
    image:
      'https://images.unsplash.com/photo-1550547660-1cdb6c8f1da5?q=80&w=1600&auto=format&fit=crop',
  },
];

const categories = ['All', 'Burgers', 'Chicken', 'Sides', 'Drinks', 'Combos'];

export default function MenuGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return items;
    return items.filter((i) => i.category === active);
  }, [active]);

  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Popular Picks</h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">Crowd favorites made fresh to order. Add to your box and check out in seconds.</p>
          </div>
          <a href="#deals" className="hidden sm:inline-flex text-sm font-semibold text-orange-600 hover:text-orange-700">This week’s deals →</a>
        </div>

        <div className="mt-6 flex w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto rounded-xl border border-black/5 bg-white/70 p-2 backdrop-blur">
          {categories.map((c) => {
            const activeTab = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`snap-start rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeTab
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow'
                    : 'bg-white text-neutral-800 border border-black/10 hover:bg-neutral-50'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-0 shadow-sm backdrop-blur transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-neutral-800 backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900">${item.price.toFixed(2)}</span>
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
