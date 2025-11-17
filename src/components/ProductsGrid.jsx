import { motion } from 'framer-motion'

const categories = [
  { title: 'Premium Mattresses', desc: 'Memory foam, coir, orthopedic', img: 'https://images.unsplash.com/photo-1604881987923-04a1b4b74a7f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Beautiful Curtains', desc: 'Custom stitching available', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Sofa Making & Repair', desc: 'Custom designs and refurbishing', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Wallpapers & Posters', desc: 'Imported & 3D, custom printing', img: 'https://images.unsplash.com/photo-1582582494700-1bfd3a487a8b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'PVC & Vinyl Carpets', desc: 'Durable flooring solutions', img: 'https://images.unsplash.com/photo-1582582494700-1bfd3a487a8b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Blinds & Artificial Grass', desc: 'Window blinds, artificial turf', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products & Services</h2>
            <p className="text-gray-600">High-quality products at the best prices with expert guidance and same-day delivery.</p>
          </div>
          <a href="/products" className="hidden sm:inline-block px-4 py-2 rounded-md border border-gray-300 hover:border-red-300 hover:text-red-600 transition-colors">View All</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.a href="/products" key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                <span className="inline-block mt-3 text-sm text-red-600 group-hover:underline">Explore</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
