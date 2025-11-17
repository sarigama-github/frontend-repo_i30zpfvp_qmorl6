import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function ContactForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message')
    }
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setStatus({ ok: true, msg: data.message || 'Submitted!' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
        <input name="phone" required placeholder="Contact Number" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
      </div>
      <input type="email" name="email" placeholder="Email (optional)" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
      <textarea name="message" required rows="4" placeholder="Service Needed / Message" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
      <button disabled={loading} className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-60">
        {loading ? 'Sending...' : 'Submit Enquiry'}
      </button>
      {status && (
        <p className={status.ok ? 'text-green-600' : 'text-red-600'}>{status.msg}</p>
      )}
    </form>
  )
}
