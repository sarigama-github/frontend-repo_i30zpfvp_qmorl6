import { Instagram, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Jain Foam & Furnishing</h3>
          <p className="text-gray-600 mt-2">Since 1995 • Bhayandar • Mira Road • Dahisar</p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex items-center gap-2"><Phone size={16}/> 083690 51217</p>
            <p className="flex items-center gap-2"><Mail size={16}/> raiv5253@gmail.com</p>
            <a href="https://www.instagram.com/jain_foam?igsh=bDZhanJrNHJ0NXdv" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-red-600"><Instagram size={16}/> @jain_foam</a>
            <p className="flex items-start gap-2"><MapPin size={16}/> Shop No. 8-9, Panch Bhagini Sadan, BP Road, Opp. Vijay Punjab Hotel, Bhayandar East, Thane, Mira Bhayandar, Maharashtra 401105</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Find Us</h4>
          <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
            <iframe title="Jain Foam & Furnishing Map" src="https://www.google.com/maps?q=Shop%20No.%208-9,%20Panch%20Bhagini%20Sadan,%20BP%20Road,%20Opp.%20Vijay%20Punjab%20Hotel,%20Bhayandar%20East,%20Thane,%20Mira%20Bhayandar,%20Maharashtra%20401105&output=embed" width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-6 border-t">© {new Date().getFullYear()} Jain Foam & Furnishing. All rights reserved.</div>
    </footer>
  )
}
