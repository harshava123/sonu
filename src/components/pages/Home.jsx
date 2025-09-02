import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handlePortfolioClick = () => {
    navigate('/work')
  }

  const handleContactClick = () => {
    navigate('/contact')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern - Big Dot Patches */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-16 left-10 w-40 h-40 bg-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 left-24 w-28 h-28 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-28 w-36 h-36 bg-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-300 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-gray-300 rounded-full"></div>
        <div className="absolute top-3/4 right-1/2 w-16 h-16 bg-gray-400 rounded-full"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-gray-200 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-gray-200 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-8">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="relative">
            {/* Infinity Symbol */}
            <div className="text-8xl md:text-9xl mb-6 text-transparent bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 bg-clip-text drop-shadow-lg">
              ∞
            </div>
            
            {/* Radiating Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border border-gray-300 rounded-full opacity-40"></div>
              <div className="absolute w-40 h-40 border border-gray-200 rounded-full opacity-30"></div>
              <div className="absolute w-48 h-48 border border-gray-100 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text drop-shadow-lg">
            Infinity Stories
          </span>
        </h1>
        
        {/* Divider with Arrow */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="mx-4 text-gray-600 text-2xl">↔</div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-light mb-8 tracking-widest uppercase text-gray-700 font-serif">
          Photography & Cinematography
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-gray-800 max-w-3xl mx-auto">
          Capturing life's most precious moments through the lens of creativity. 
          From intimate portraits to cinematic storytelling, every frame tells a unique story 
          that transcends time and space.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-6 justify-center flex-wrap">
          <button 
            className="group relative px-8 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-500 uppercase tracking-wider overflow-hidden shadow-lg"
            onClick={handlePortfolioClick}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 group-hover:scale-105"></span>
            <span className="relative text-white font-bold">View Portfolio</span>
          </button>
          
          <button 
            className="group relative px-8 py-4 text-base font-semibold rounded-full cursor-pointer transition-all duration-500 uppercase tracking-wider overflow-hidden border-2 border-gray-600 hover:border-gray-700 shadow-lg"
            onClick={handleContactClick}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></span>
            <span className="relative text-gray-700 group-hover:text-gray-800 transition-colors duration-500">Get In Touch</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex items-center gap-8 text-gray-600">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
          <div className="text-sm tracking-widest uppercase">Scroll to explore</div>
          <div className="w-16 h-px bg-gradient-to-r from-gray-500 to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements - Big Animated Dots */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-gray-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-gray-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-gray-600 rounded-full opacity-60 animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/3 right-10 w-10 h-10 bg-gray-500 rounded-full opacity-40 animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-gray-300 rounded-full opacity-30 animate-pulse delay-4000"></div>
      <div className="absolute bottom-1/2 left-1/4 w-8 h-8 bg-gray-400 rounded-full opacity-50 animate-pulse delay-5000"></div>
    </div>
  )
}

export default Home
