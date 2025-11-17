import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

const images = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582582494700-1bfd3a487a8b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604881987923-04a1b4b74a7f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-gray-700 mt-2">Explore wallpapers, sofas, curtains, mattresses and more. Follow us on Instagram @jain_foam.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-200">
              <img src={src} alt="Gallery" className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/jain_foam?igsh=bDZhanJrNHJ0NXdv" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700">View Instagram Feed</a>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
