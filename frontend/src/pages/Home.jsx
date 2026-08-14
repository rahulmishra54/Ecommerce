import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLetter from "../components/NewsLetter.jsx"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 relative overflow-hidden">
      {/* ambient background glow, consistent across pages */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[30rem] h-[30rem] bg-purple-700/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-2/3 -right-40 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative">
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetter />
      </div>
    </div>
  )
}

export default Home