import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-rose-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
        {/* Deals anchor target for navbar smooth jump */}
        <section id="deals" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">This Week’s Hot Deals</h2>
            <p className="mt-2 text-neutral-700">
              Save more with bundles and limited‑time offers. New combos drop every Monday.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-orange-600">New</div>
                <h3 className="mt-1 text-lg font-bold">Burger + Fries + Drink</h3>
                <p className="text-neutral-600">Your choice of burger with sides.</p>
                <div className="mt-4 text-2xl font-extrabold">$9.99</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-orange-600">Popular</div>
                <h3 className="mt-1 text-lg font-bold">Family Feast (x4)</h3>
                <p className="text-neutral-600">Four burgers, two fries, four drinks.</p>
                <div className="mt-4 text-2xl font-extrabold">$32.99</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-orange-600">Value</div>
                <h3 className="mt-1 text-lg font-bold">Chicken Stack Combo</h3>
                <p className="text-neutral-600">Chicken sandwich with seasoned fries.</p>
                <div className="mt-4 text-2xl font-extrabold">$8.99</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
