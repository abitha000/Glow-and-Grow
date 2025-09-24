import React, { useState } from 'react'

export default function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-16 px-6 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-green-700 mb-4">Book a Consultation</h3>
      {submitted ? (
        <p className="text-green-600">Thank you! We will contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea className="w-full p-2 border rounded" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
        </form>
      )}
    </section>
  )
}