import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} Glow and Grow. All rights reserved.</p>
    </footer>
  )
}