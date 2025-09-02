import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleNavClick = (path) => {
    navigate(path)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`flex justify-between items-center px-8 py-6 bg-transparent sticky top-0 z-50 overflow-hidden transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Background Pattern - Big Dot Patches */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 right-8 w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="absolute top-4 left-12 w-12 h-12 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-2 right-16 w-20 h-20 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-4 left-8 w-14 h-14 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex flex-col items-start relative z-10">
        <a 
          href="/" 
          className="text-3xl font-bold text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text transition-all duration-300 hover:scale-105 font-serif"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          Infinity Stories
        </a>
        <div className="text-sm text-gray-600 font-light tracking-widest uppercase mt-1">by Sonal</div>
      </div>
      
      <nav className="flex gap-4 items-center relative z-10">
        <a 
          className="no-underline text-sm sm:text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 hover:scale-105 shadow-sm"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('/')
          }}
        >
          Home
        </a>
        <a 
          className="no-underline text-sm sm:text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 hover:scale-105 shadow-sm"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('/work')
          }}
        >
          Portfolio
        </a>
        <a 
          className="no-underline text-sm sm:text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 hover:scale-105 shadow-sm"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('/contact')
          }}
        >
          Contact
        </a>
        {/* <button 
          className="group relative px-6 py-3 text-sm font-semibold rounded-full cursor-pointer transition-all duration-500 uppercase tracking-wider overflow-hidden shadow-md"
          onClick={() => handleNavClick('/contact')}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 group-hover:scale-105"></span>
          <span className="relative text-white font-bold">Get Quote</span>
        </button> */}
      </nav>
    </header>
  )
}

export default Header