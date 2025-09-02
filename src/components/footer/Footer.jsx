import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-8 px-8 text-center relative overflow-hidden">
      {/* Background Pattern - Big Dot Patches */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gray-300 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-6 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text font-serif">Infinity Stories by Sonal</h3>
          <p className="text-gray-800 leading-relaxed text-sm">
            Capturing life's precious moments through the lens of creativity. 
            Professional photography and cinematography services that tell your unique story.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text font-serif">Services</h3>
          <a href="/work" className="text-gray-800 no-underline block mb-1.5 transition-all duration-300 hover:text-gray-700 hover:translate-x-1 text-sm">Portrait Photography</a>
          <a href="/work" className="text-gray-800 no-underline block mb-1.5 transition-all duration-300 hover:text-gray-700 hover:translate-x-1 text-sm">Wedding Photography</a>
          <a href="/work" className="text-gray-800 no-underline block mb-1.5 transition-all duration-300 hover:text-gray-700 hover:translate-x-1 text-sm">Event Coverage</a>
          <a href="/work" className="text-gray-800 no-underline block mb-1.5 transition-all duration-300 hover:text-gray-700 hover:translate-x-1 text-sm">Cinematography</a>
          <a href="/work" className="text-gray-800 no-underline block mb-1.5 transition-all duration-300 hover:text-gray-700 hover:translate-x-1 text-sm">Commercial Shoots</a>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text font-serif">Contact Info</h3>
          <div className="text-gray-800 mb-1.5 flex items-center gap-2 hover:text-gray-700 transition-colors duration-300 text-sm">
            <span></span>
            <span>sonal@infinitystories.com</span>
          </div>
          <div className="text-gray-800 mb-1.5 flex items-center gap-2 hover:text-gray-700 transition-colors duration-300 text-sm">
            <span></span>
            <span>+91 81251 65597</span>
          </div>
          <div className="text-gray-800 mb-1.5 flex items-center gap-2 hover:text-gray-700 transition-colors duration-300 text-sm">
            <span></span>
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text font-serif">Follow Us</h3>
          <div className="flex gap-3 justify-center md:justify-start mt-2">
            <a 
              href="https://www.instagram.com/infinitystories_sonal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white text-gray-700 border border-gray-200 p-2.5 rounded-full cursor-pointer transition-all duration-300 text-lg w-10 h-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 hover:rotate-12 hover:border-pink-500 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-300 group-hover:text-white"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6a2.8 2.8 0 0 0 0-5.6zM18.5 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 flex justify-center items-center gap-4 relative z-10">
        <div className="text-gray-700 text-sm text-center">
          © 2025 <span className="mx-2 text-transparent bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text font-semibold font-serif">Infinity Stories by Sonal</span>. All rights reserved.
        </div>
      </div>

      {/* Floating Elements - Big Animated Dots */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-gray-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-gray-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-gray-600 rounded-full opacity-60 animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/3 right-10 w-10 h-10 bg-gray-500 rounded-full opacity-40 animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-gray-300 rounded-full opacity-30 animate-pulse delay-4000"></div>
      <div className="absolute bottom-1/2 left-1/4 w-8 h-8 bg-gray-400 rounded-full opacity-50 animate-pulse delay-5000"></div>
    </footer>
  )
}

export default Footer


