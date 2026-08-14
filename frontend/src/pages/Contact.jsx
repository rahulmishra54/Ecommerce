import React from 'react'
import ContactComp from '../components/ContactComp'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 relative overflow-hidden">
      {/* ambient background glow, consistent with other pages */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative px-6 md:px-16 py-10">
        <ContactComp />
      </div>
    </div>
  )
}

export default Contact