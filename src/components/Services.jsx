import React from 'react'

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <h3 className="text-2xl font-bold text-center text-green-700 mb-8">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-bold text-green-600">Consultations</h4>
          <p>Book one-on-one Siddha consultations online.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-bold text-green-600">Herbal Guidance</h4>
          <p>Get recommendations for safe and effective herbal remedies.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-bold text-green-600">Lifestyle Advice</h4>
          <p>Personalized diet and lifestyle suggestions to support healing.</p>
        </div>
      </div>
    </section>
  )
}