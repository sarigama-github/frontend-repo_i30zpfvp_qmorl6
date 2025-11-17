import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-bold">About Jain Foam & Furnishing</h1>
        <p className="text-gray-700">Jain Foam & Furnishing has been Bhayandar’s leading home décor and furnishing destination since 1995. With thousands of happy customers across Bhayandar, Mira Road, and Dahisar, we specialize in high-quality mattresses, curtains, wallpapers, PVC flooring, sofa repair, and custom furnishing solutions.</p>
        <p className="text-gray-700">Our mission is to provide quality, value, and style with a customer-first approach. With 30+ years of experience and a wide product range, we’re the most trusted furnishing shop in the Mira-Bhayandar region.</p>
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="text-sm text-gray-500">Operating Since</p>
            <p className="text-xl font-semibold">1995</p>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="text-sm text-gray-500">Customer Regions</p>
            <p className="text-xl font-semibold">Bhayandar • Mira Road • Dahisar</p>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white">
            <p className="text-sm text-gray-500">Timings</p>
            <p className="text-xl font-semibold">10:00 AM – 10:00 PM</p>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
