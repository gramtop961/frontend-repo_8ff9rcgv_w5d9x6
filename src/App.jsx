import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60rem_60rem_at_120%_-10%,rgba(255,186,117,0.15),transparent_40%),radial-gradient(50rem_50rem_at_-10%_120%,rgba(255,105,97,0.12),transparent_40%)] text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />

        <section id="deals" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">This Week’s Hot Deals</h2>
                <p className="mt-2 max-w-2xl text-neutral-700">Hand‑picked combos with bold flavors and better value. New drops every Monday.</p>
              </div>
              <a href="#menu" className="hidden sm:inline-flex text-sm font-semibold text-orange-600 hover:text-orange-700">Browse menu →</a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[{
                tag: 'New',
                title: 'Burger + Fries + Drink',
                desc: 'Your choice of burger with sides',
                price: 9.99,
              },{
                tag: 'Popular',
                title: 'Family Feast (x4)',
                desc: 'Four burgers, two fries, four drinks',
                price: 32.99,
              },{
                tag: 'Value',
                title: 'Chicken Stack Combo',
                desc: 'Chicken sandwich with seasoned fries',
                price: 8.99,
              }].map((d, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-xl">
                  <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
                  <div className="relative">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">{d.tag}</span>
                    <h3 className="mt-3 text-lg font-bold tracking-tight">{d.title}</h3>
                    <p className="text-sm text-neutral-600">{d.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-2xl font-extrabold">${d.price.toFixed(2)}</div>
                      <button className="inline-flex items-center rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
