import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ProductsGrid from './components/ProductsGrid'
import SEO from './components/SEO'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <ProductsGrid />
        <SEO />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
