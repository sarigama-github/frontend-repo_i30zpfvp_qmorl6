import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">Contact / Enquiry</h1>
          <p className="text-gray-700 mt-2">We’re here to help with product info, availability, and pricing. Same-day delivery available.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Find Us</h2>
          <p className="text-gray-700 mt-2">Shop No. 8-9, Panch Bhagini Sadan, BP Road, Opp. Vijay Punjab Hotel, Bhayandar East, Thane, Mira Bhayandar, Maharashtra 401105</p>
          <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
            <iframe title="Jain Foam & Furnishing Map" src="https://www.google.com/maps?q=Shop%20No.%208-9,%20Panch%20Bhagini%20Sadan,%20BP%20Road,%20Opp.%20Vijay%20Punjab%20Hotel,%20Bhayandar%20East,%20Thane,%20Mira%20Bhayandar,%20Maharashtra%20401105&output=embed" width="100%" height="360" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="mt-6 text-gray-700 space-y-1">
            <p><strong>Phone:</strong> 083690 51217</p>
            <p><strong>Email:</strong> raiv5253@gmail.com</p>
            <p><strong>Instagram:</strong> <a className="text-red-600 hover:underline" href="https://www.instagram.com/jain_foam?igsh=bDZhanJrNHJ0NXdv" target="_blank" rel="noreferrer">@jain_foam</a></p>
            <p><strong>Timings:</strong> 10:00 AM – 10:00 PM</p>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
