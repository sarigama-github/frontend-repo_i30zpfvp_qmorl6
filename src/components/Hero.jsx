import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Your One-Stop Destination for Mattresses, Curtains, Sofas & Home Furnishings in Bhayandar.
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover premium home décor essentials at Jain Foam & Furnishing — the most trusted furnishing shop in Bhayandar East for over 30 years. From luxury mattresses to custom-made sofas, wallpapers, carpets, and blinds, we help you transform your home with quality and style.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">Browse Products</a>
            <a href="/contact" className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:border-red-300 hover:text-red-600 transition-colors">Get a Quote</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
