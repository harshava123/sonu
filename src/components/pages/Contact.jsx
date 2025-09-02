import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in your photography services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service Interested In:* ${formData.service || 'Not specified'}

*Message:*
${formData.message}

Looking forward to hearing from you!`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp number (replace with actual WhatsApp number)
    const whatsappNumber = '918125165597' // +91 81251 65597
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form after sending
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
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

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-12 text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text drop-shadow-lg">
            Contact Us
          </span>
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="mx-4 text-gray-600 text-2xl">↔</div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto">
          Ready to capture your special moments? Send us a message on WhatsApp to discuss your photography and cinematography needs.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a WhatsApp Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="event">Event Coverage</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="commercial">Commercial Shoots</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your photography needs, event details, or any questions you have..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">💬</span>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13L4 6.01V6h16ZM4 8.243l8 6l8-6V18H4V8.243Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">sonal@infinitystories.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 10H6v-2h12v2Zm0-3H6V7h12v2Zm0-3H6V4h12v2Z"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">+91 81251 65597</p>
                    <button 
                      onClick={() => window.open('https://wa.me/918125165597', '_blank')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300"
                    >
                      Chat Now
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-800">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Follow Us</h2>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/infinitystories_sonal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6a2.8 2.8 0 0 0 0-5.6zM18.5 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Follow us on Instagram for the latest photography work and behind-the-scenes content!
              </p>
            </div>
          </div>
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

export default Contact
