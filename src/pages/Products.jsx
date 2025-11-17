import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import { motion } from 'framer-motion'

const items = [
  { title: 'Premium Mattresses', points: ['Memory foam', 'Coir', 'Orthopedic'], img: 'https://images.unsplash.com/photo-1604881987923-04a1b4b74a7f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Curtains', points: ['Custom stitching', 'Wide fabric range', 'Tracks & rods'], img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Wallpapers', points: ['Imported & 3D', 'Custom printing', 'Installation'], img: 'https://images.unsplash.com/photo-1582582494700-1bfd3a487a8b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Sofa Making & Repair', points: ['New designs', 'Reupholstery', 'Foam replacement'], img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop' },
  { title: 'PVC & Vinyl Flooring', points: ['Durable', 'Economical', 'Easy maintenance'], img: 'https://images.unsplash.com/photo-1582582494700-1bfd3a487a8b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Blinds & Artificial Grass', points: ['Roller, zebra, venetian', 'Window solutions', 'Turf supply & install'], img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop' },
]

export default function Products() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Products & Services</h1>
        <p className="text-gray-700 mt-2">High-quality products at the best prices, with expert guidance and same-day delivery.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  {c.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
                <a href="/contact" className="inline-block mt-3 text-sm text-red-600 hover:underline">Get a quote</a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
