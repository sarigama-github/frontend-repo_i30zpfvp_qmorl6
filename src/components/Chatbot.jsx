import { useEffect, useRef, useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi! Ask me about products, timings, delivery, or pricing.' }])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async () => {
    const content = input.trim()
    if (!content) return
    setMessages((m) => [...m, { role: 'user', text: content }])
    setInput('')

    try {
      const res = await fetch(`${BACKEND}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', text: data.reply || 'Thanks!'}])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', text: 'Sorry, something went wrong. Please try again.' }])
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors">
        <MessageCircle size={18} /> Chat
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[90vw] max-w-sm rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b bg-gradient-to-r from-red-50 to-white">
            <p className="font-semibold text-gray-900">Jain Foam Assistant</p>
            <p className="text-xs text-gray-600">Ask about products, timings, delivery, pricing</p>
          </div>
          <div className="h-72 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={`inline-block px-3 py-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t flex items-center gap-2">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} rows={1} placeholder="Type your message..." className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
            <button onClick={send} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white text-sm hover:bg-red-700">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
