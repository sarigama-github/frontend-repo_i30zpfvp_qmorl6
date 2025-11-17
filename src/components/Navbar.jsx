import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Instagram, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-red-600 text-white grid place-items-center font-bold">J</div>
            <div className="leading-tight">
              <p className="text-sm text-gray-500">Since 1995</p>
              <p className="text-base font-semibold text-gray-900">Jain Foam & Furnishing</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItemClass}>Home</NavLink>
            <NavLink to="/products" className={navItemClass}>Products</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
            <NavLink to="/gallery" className={navItemClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:08369051217" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">
              <Phone size={16} /> 083690 51217
            </a>
            <a href="https://www.instagram.com/jain_foam?igsh=bDZhanJrNHJ0NXdv" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors">
              <Instagram size={18} />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-gray-200">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={navItemClass}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className={navItemClass}>Products</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navItemClass}>About</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className={navItemClass}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navItemClass}>Contact</NavLink>
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
