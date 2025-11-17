import { motion } from 'framer-motion'
import { Truck, BadgeCheck, Clock } from 'lucide-react'

export default function Highlights() {
  const items = [
    { icon: BadgeCheck, title: '30+ Years of Trust', desc: 'Serving Bhayandar, Mira Road & Dahisar since 1995.' },
    { icon: Truck, title: 'Same-Day Delivery', desc: 'Fast delivery on most products and services.' },
    { icon: Clock, title: '10:00 AM – 10:00 PM', desc: 'Open all days for your convenience.' },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-50 text-red-600">
                  <it.icon />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{it.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
