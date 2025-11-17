import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './index.css'

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-white text-center p-8">
      <div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-gray-600 mt-2">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-block mt-4 px-4 py-2 rounded-md bg-red-600 text-white">Go Home</a>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
