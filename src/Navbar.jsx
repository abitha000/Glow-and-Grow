import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Glow & Grow</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}