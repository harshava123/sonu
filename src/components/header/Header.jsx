import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className={`px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-transparent sticky top-0 z-50 overflow-hidden transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Background Pattern - Big Dot Patches */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 right-8 w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="absolute top-4 left-12 w-12 h-12 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-2 right-16 w-20 h-20 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-4 left-8 w-14 h-14 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col items-start">
          <a 
            href="/" 
            className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text transition-all duration-300 hover:scale-105 font-serif"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              setIsMenuOpen(false)
            }}
          >
            Infinity Stories
          </a>
          <div className="text-xs sm:text-sm text-gray-600 font-light tracking-widest uppercase mt-1">by Sonal</div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-800"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-3 lg:gap-4 items-center">
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
        </nav>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden relative z-10 transition-[max-height] duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 mt-3' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
          <a 
            className="no-underline text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
            onClick={(e) => { e.preventDefault(); handleNavClick('/'); setIsMenuOpen(false) }}
          >
            Home
          </a>
          <a 
            className="no-underline text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
            onClick={(e) => { e.preventDefault(); handleNavClick('/work'); setIsMenuOpen(false) }}
          >
            Portfolio
          </a>
          <a 
            className="no-underline text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
            onClick={(e) => { e.preventDefault(); handleNavClick('/contact'); setIsMenuOpen(false) }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header