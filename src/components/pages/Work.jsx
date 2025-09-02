import React, { useState, useEffect } from 'react'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'
import image8 from '../../assets/8.jpg'
import image9 from '../../assets/9.jpg'
import image10 from '../../assets/10.jpg'
import image16 from '../../assets/16.jpg'
import image17 from '../../assets/17.jpg'
import image18 from '../../assets/18.jpg'
import image19 from '../../assets/19.jpg'
import image21 from '../../assets/21.jpg'
import image22 from '../../assets/22.jpg'
import image26 from '../../assets/26.jpg'
import image27 from '../../assets/27.jpg'
import image36 from '../../assets/36.jpg'
import image37 from '../../assets/37.jpg'
import image38 from '../../assets/38.jpg'
import image39 from '../../assets/39.jpg'
import image40 from '../../assets/40.jpg'
import image41 from '../../assets/41.jpg'
import image42 from '../../assets/42.jpg'
import image43 from '../../assets/43.jpg'
import image44 from '../../assets/44.jpg'
import image47 from '../../assets/47.jpg'
import image48 from '../../assets/48.jpg'
import video1 from '../../assets/11.mp4'
import video2 from '../../assets/12.mp4'
import video3 from '../../assets/13.mp4'
import video4 from '../../assets/14.mp4'
import video5 from '../../assets/15.mp4'
import video6 from '../../assets/20.mp4'
import video7 from '../../assets/23.mp4'
import video8 from '../../assets/24.mp4'
import video9 from '../../assets/25.mp4'
import video10 from '../../assets/28.mp4'
import video11 from '../../assets/29.mp4'
import video12 from '../../assets/30.mp4'
import video13 from '../../assets/31.mp4'
import video14 from '../../assets/32.mp4'
import video15 from '../../assets/33.mp4'
import video16 from '../../assets/34.mp4'
import video17 from '../../assets/35.mp4'
import video18 from '../../assets/45.mp4'
import video19 from '../../assets/46.mp4'

function Work() {
  const [activeTab, setActiveTab] = useState('captures')
  const [isReelsOpen, setIsReelsOpen] = useState(false)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex((idx) => (idx + 1) % images.length)
  }

  const showPrevImage = () => {
    setImageIndex((idx) => (idx - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('.reel-video'))
    if (videos.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoEl = entry.target
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            if (videoEl && typeof videoEl.play === 'function') {
              videoEl.play().catch(() => {})
            }
          } else {
            if (videoEl && typeof videoEl.pause === 'function') {
              videoEl.pause()
            }
          }
        })
      },
      { threshold: [0, 0.6, 1] }
    )

    videos.forEach((v) => observer.observe(v))
    return () => {
      videos.forEach((v) => observer.unobserve(v))
      observer.disconnect()
    }
  }, [activeTab])

  // Manage modal open/close side-effects
  useEffect(() => {
    if (!isReelsOpen) return
    // Lock body scroll
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Autoplay visible reel in modal
    const modalVideos = Array.from(document.querySelectorAll('.reel-modal-video'))
    const modalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            if (v && typeof v.play === 'function') v.play().catch(() => {})
          } else {
            if (v && typeof v.pause === 'function') v.pause()
          }
        })
      },
      { threshold: [0, 0.7, 1] }
    )
    modalVideos.forEach((v) => modalObserver.observe(v))

    return () => {
      modalVideos.forEach((v) => modalObserver.unobserve(v))
      modalObserver.disconnect()
      document.body.style.overflow = previousOverflow
    }
  }, [isReelsOpen])

  const openReel = (index) => {
    setIsReelsOpen(true)
    // Small timeout to ensure modal content is mounted before scrolling
    setTimeout(() => {
      const el = document.getElementById(`reel-slide-${index}`)
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'center' })
    }, 0)
  }

  const closeReels = () => setIsReelsOpen(false)

  const images = [
    { src: image1, alt: 'Portfolio Image 1' },
    { src: image2, alt: 'Portfolio Image 2' },
    { src: image3, alt: 'Portfolio Image 3' },
    { src: image4, alt: 'Portfolio Image 4' },
    { src: image5, alt: 'Portfolio Image 5' },
    { src: image6, alt: 'Portfolio Image 6' },
    { src: image7, alt: 'Portfolio Image 7' },
    { src: image8, alt: 'Portfolio Image 8' },
    { src: image9, alt: 'Portfolio Image 9' },
    { src: image10, alt: 'Portfolio Image 10' },
    { src: image16, alt: 'Portfolio Image 16' },
    { src: image17, alt: 'Portfolio Image 17' },
    { src: image18, alt: 'Portfolio Image 18' },
    { src: image19, alt: 'Portfolio Image 19' },
    { src: image21, alt: 'Portfolio Image 21' },
    { src: image22, alt: 'Portfolio Image 22' },
    { src: image26, alt: 'Portfolio Image 26' },
    { src: image27, alt: 'Portfolio Image 27' },
    { src: image36, alt: 'Portfolio Image 36' },
    { src: image37, alt: 'Portfolio Image 37' },
    { src: image38, alt: 'Portfolio Image 38' },
    { src: image39, alt: 'Portfolio Image 39' },
    { src: image40, alt: 'Portfolio Image 40' },
    { src: image41, alt: 'Portfolio Image 41' },
    { src: image42, alt: 'Portfolio Image 42' },
    { src: image43, alt: 'Portfolio Image 43' },
    { src: image44, alt: 'Portfolio Image 44' },
    { src: image47, alt: 'Portfolio Image 47' },
    { src: image48, alt: 'Portfolio Image 48' }
  ]

  const videos = [
    { src: video1, alt: 'Portfolio Video 11' },
    { src: video2, alt: 'Portfolio Video 12' },
    { src: video3, alt: 'Portfolio Video 13' },
    { src: video4, alt: 'Portfolio Video 14' },
    { src: video5, alt: 'Portfolio Video 15' },
    { src: video6, alt: 'Portfolio Video 20' },
    { src: video7, alt: 'Portfolio Video 23' },
    { src: video8, alt: 'Portfolio Video 24' },
    { src: video9, alt: 'Portfolio Video 25' },
    { src: video10, alt: 'Portfolio Video 28' },
    { src: video11, alt: 'Portfolio Video 29' },
    { src: video12, alt: 'Portfolio Video 30' },
    { src: video13, alt: 'Portfolio Video 31' },
    { src: video14, alt: 'Portfolio Video 32' },
    { src: video15, alt: 'Portfolio Video 33' },
    { src: video16, alt: 'Portfolio Video 34' },
    { src: video17, alt: 'Portfolio Video 35' },
    { src: video18, alt: 'Portfolio Video 45' },
    { src: video19, alt: 'Portfolio Video 46' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern - Big Dot Patches (denser) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
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
        {/* Extra dots for richer background */}
        <div className="absolute top-24 left-1/2 w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="absolute top-28 left-[60%] w-8 h-8 bg-gray-400 rounded-full"></div>
        <div className="absolute top-32 left-[40%] w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="absolute bottom-24 left-[55%] w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-28 right-[20%] w-12 h-12 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-36 right-[35%] w-8 h-8 bg-gray-300 rounded-full"></div>
        {/* Additional subtle dots */}
        <div className="absolute top-[22%] left-[20%] w-14 h-14 bg-gray-200 rounded-full"></div>
        <div className="absolute top-[18%] right-[18%] w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="absolute top-[42%] left-[12%] w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="absolute top-[48%] right-[12%] w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-[22%] left-[15%] w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="absolute bottom-[18%] right-[15%] w-14 h-14 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-[30%] left-[30%] w-9 h-9 bg-gray-400 rounded-full"></div>
        <div className="absolute top-[34%] right-[40%] w-7 h-7 bg-gray-200 rounded-full"></div>
        {/* Dense cluster around title */}
        <div className="absolute top-[26%] left-[48%] w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="absolute top-[27%] left-[52%] w-5 h-5 bg-gray-400 rounded-full"></div>
        <div className="absolute top-[29%] left-[50%] w-7 h-7 bg-gray-200 rounded-full"></div>
        <div className="absolute top-[31%] left-[46%] w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="absolute top-[33%] left-[54%] w-5 h-5 bg-gray-400 rounded-full"></div>
        <div className="absolute top-[35%] left-[50%] w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="absolute top-[37%] left-[56%] w-6 h-6 bg-gray-200 rounded-full"></div>
        <div className="absolute top-[38%] left-[44%] w-5 h-5 bg-gray-300 rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-12 text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text drop-shadow-lg">
            Portfolio
          </span>
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="mx-4 text-gray-600 text-2xl">↔</div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto">
          A collection of moments captured through the lens of creativity. 
          Each image and video tells a unique story, preserving memories that last forever.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-8">
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('captures')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'captures'
                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                Captures
              </button>
              <button
                onClick={() => setActiveTab('frames')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'frames'
                    ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                 Frames
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20">
        {activeTab === 'captures' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-zoom-in"
                onClick={() => { setImageIndex(index); setIsImageOpen(true) }}
              >
                <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-2xl">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">Capture {index + 1}</h3>
                  <p className="text-sm text-gray-200">Photography by Sonal</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'frames' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="w-full aspect-[9/16] bg-black overflow-hidden rounded-2xl">
                  <video 
                    src={video.src}
                    className="reel-video w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onClick={(e) => { e.stopPropagation(); openReel(index) }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
                  <h3 className="text-lg font-semibold mb-1 tracking-wide">Frame&nbsp;{index + 1}</h3>
                  <p className="text-sm text-gray-200">Cinematography by Sonal</p>
                </div>
                {/* removed play bubble overlay */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reels Modal */}
      {isReelsOpen && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-lg backdrop-saturate-150 flex">
          {/* Close button */}
          <button
            onClick={closeReels}
            className="absolute top-4 right-4 z-[1000] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {/* Vertical scroll-snap container */}
          <div className="flex-1 h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
            {videos.map((video, idx) => (
              <section
                id={`reel-slide-${idx}`}
                key={idx}
                className="h-screen w-full flex items-center justify-center snap-start"
              >
                <div className="w-[min(450px,90vw)] h-[min(90vh,800px)] bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src={video.src}
                    id={`reel-video-${idx}`}
                    className="reel-modal-video w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                    preload="metadata"
                    onClick={() => toggleMute(idx)}
                  />
                  {/* Right-side controls removed per request */}
                  {/* Caption */}
                  <div className="absolute left-4 bottom-4 right-20 text-white select-none pointer-events-none">
                    <h3 className="font-semibold">Frames</h3>
                    <p className="text-sm text-gray-200">Cinematography by Sonal</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal for Captures */}
      {isImageOpen && (
        <div className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-md" onClick={() => setIsImageOpen(false)}>
          {/* Close */}
          <button onClick={() => setIsImageOpen(false)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center">×</button>

          {/* Caption on left */}
          <div className="absolute left-4 bottom-4 right-20 text-white select-none pointer-events-none">
            <h3 className="font-semibold">Captures</h3>
            <p className="text-sm text-gray-200">Photography by Sonal</p>
          </div>

          {/* Image with in-frame arrows */}
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[imageIndex]?.src}
                alt={images[imageIndex]?.alt}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              />
              <button onClick={(e) => { e.stopPropagation(); showPrevImage() }} className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center">‹</button>
              <button onClick={(e) => { e.stopPropagation(); showNextImage() }} className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center">›</button>
            </div>
          </div>
        </div>
      )}

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

export default Work
