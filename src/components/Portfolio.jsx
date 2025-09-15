import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Play, X, Calendar, User, Palette } from 'lucide-react'
import FrontSideCard from "../assets/Frontside Card Design.png"
import FrontSideCard2 from "../assets/FrontSide.jpg"
import cardb from "../assets/Red & Black Design Card.jpg"
import B1 from "../assets/B1.png"
import B2 from "../assets/B2.png"
import BH1 from "../assets/Birthday Invi-1.png"
import BH2 from "../assets/Birthday Invi-2.png"
import MHAP from "../assets/Mahek Auto Point.png"
import MHFM from "../assets/Maharaja Food Menu.png"
import Video1 from "../assets/1027 (1)(1).mp4"
import Video2 from "../assets/1027.mp4"
import Video3 from "../assets/1029 (1).mp4"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalProject, setModalProject] = useState(null)

  // Category-specific configurations
  const categoryConfigs = {
    'Visiting Cards': {
      aspectRatio: 'aspect-[3.5/2]',
      containerHeight: 'min-h-[400px]',
      layout: 'card'
    },
    'Invitation Cards': {
      aspectRatio: 'aspect-[4/5]',
      containerHeight: 'min-h-[600px]',
      layout: 'portrait'
    },
    'Menu Design': {
      aspectRatio: 'aspect-[3/4]',
      containerHeight: 'min-h-[600px]',
      layout: 'portrait'
    },
    'Banner Design': {
      aspectRatio: '',
      containerHeight: 'min-h-[400px]',
      layout: 'landscape',
      customAspectRatios: {
        'B1': 'aspect-square', // 10x10
        'B2': 'aspect-[3/2]'  // 6x4
      }
    },
    'Video Editing': {
      aspectRatio: 'aspect-[9/16]',
      containerHeight: 'min-h-[700px]',
      layout: 'video'
    }
  }

  // Portfolio categories
  const categories = [
     {
      name: "Video Editing",
      description: "Professional video editing and motion graphics",
      projects: [
        { 
          id: 21, 
          title: "Ayodhya Diwali Celebration",
          type: "video",
          image: Video1,
          client: "Self Edited Reel",
          description: "A great celebration of ayodhya diwali",
          features: ["Motion graphics", "Edge Cutted", "Color grading", "Sound design"],
          completionDate: "2024-01-05",
          projectType: "Instagram Reel"
        },
        { 
          id: 22, 
          title: "Singham Again", 
          type: "video",
          image: Video2,
          client: "Self Edited Reel",
          description: "Professional video with elegant animations and clear messaging.",
          features: ["Professional editing", "Custom animations", "Voice-over", "Background music"],
          completionDate: "2024-02-12",
          projectType: "Instagram Reels"
        },
        { 
          id: 23, 
          title: "Pavagadh Hills Editing ", 
          type: "video",
          image: Video3,
          client: "Self Edited Reel",
          description: "A soft touched hills of pavagadh.",
          features: ["Quick cuts", "Text animations", "Visual effects", "Music sync"],
          completionDate: "2024-03-08",
          projectType: "Social Ad"
        }
      ]
    },
    {
      name: "Visiting Cards",
      description: "Professional business card designs with modern layouts",
      projects: [
        { 
          id: 1, 
          title: "Corporate Business Card", 
          image: FrontSideCard, 
          client: "Bhautik Shah",
          description: "A sleek and professional business card design featuring modern typography and clean layout. Perfect for corporate professionals.",
          features: ["Premium cardstock", "Embossed logo", "Gold foil accents", "Double-sided design"],
          completionDate: "2024-03-15",
          projectType: "Business Identity"
        },
        { 
          id: 2, 
          title: "Creative Designer Card", 
          image: FrontSideCard2, 
          client: "Bhautik Shah",
          description: "An innovative business card design with creative elements and unique layout that reflects the designer's personality.",
          features: ["Creative typography", "Color gradient", "Unique shape", "Matte finish"],
          completionDate: "2024-03-20",
          projectType: "Creative Design"
        },
        { 
          id: 3, 
          title: "Insurance Professional Card", 
          image: cardb, 
          client: "Bhautik Shah",
          description: "Professional business card design for insurance industry with trust-building elements and clear contact information.",
          features: ["Professional layout", "Trust symbols", "Clear contact info", "Industry-specific design"],
          completionDate: "2024-03-25",
          projectType: "Professional Services"
        },
        
      ]
    },
    {
      name: "Invitation Cards",
      description: "Elegant invitations for weddings, events, and celebrations",
      projects: [
        { 
          id: 5, 
          title: "Birthday Invitation Card", 
          image: BH1, 
          client: "Nisha Machhi",
          description: "Elegant wedding invitation suite with floral motifs and gold accents, perfect for a romantic celebration.",
          features: ["Floral designs", "Gold foil printing", "RSVP cards", "Thank you cards"],
          completionDate: "2024-01-26",
          projectType: "Birthday Invitation Card"
        },
        { 
          id: 6, 
          title: "Birthday Party Invite", 
          image: BH2, 
          client: "Nisha Machhi",
          description: "Fun and colorful birthday party invitation with playful elements and vibrant colors.",
          features: ["Colorful design", "Playful graphics", "Custom illustrations", "Premium paper"],
          completionDate: "2024-03-10",
          projectType: "Party Invitation"
        }
        
      ]
    },
    {
      name: "Menu Design",
      description: "Modern restaurant menus and food presentation designs",
      projects: [
        { 
          id: 9, 
          title: "Fine Dining Menu", 
          image: MHFM, 
          client: "Maharaja Foods",
          description: "Elegant fine dining menu with sophisticated typography and premium feel.",
          features: ["Premium paper", "Gold accents", "Fine typography", "Food photography"],
          completionDate: "2024-01-20",
          projectType: "Restaurant Menu"
        }
       
      ]
    },
    {
      name: "Banner Design",
      description: "Eye-catching banners for events, promotions, and marketing",
      projects: [
        { 
          id: 13, 
          title: "Blood Donation Camp Banner", 
          image: B1, 
          client: "Help Warriors Foundation",
          description: "Impactful banner design for blood donation camp with clear messaging and call-to-action.",
          features: ["Bold typography", "Medical imagery", "Clear CTA", "High impact"],
          completionDate: "2024-01-15",
          projectType: "Social Campaign"
        },
        { 
          id: 14, 
          title: "Blood Donation Camp Banner", 
          image: B2, 
          client: "Help Warriors Foundation",
          description: "Health awareness campaign banner with professional medical design.",
          features: ["Medical theme", "Professional look", "Informative", "Trust building"],
          completionDate: "2024-01-15",
          projectType: "Health Campaign"
        }
        
      ]
    }
   
  ]

  const currentCategory = categories[activeCategory]
  const currentConfig = categoryConfigs[currentCategory.name]
  const totalSlides = currentCategory.projects.length

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || showModal) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides, showModal])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleCategoryChange = (index) => {
    // First, trigger a fade-out effect
    const carousel = document.querySelector('.carousel-container')
    if (carousel) {
      carousel.style.opacity = '0'
      carousel.style.transform = 'scale(0.95)'
      carousel.style.transition = 'all 0.3s ease'
    }

    // After a short delay, update the category and reset the carousel
    setTimeout(() => {
      setActiveCategory(index)
      setCurrentSlide(0)
      
      // Then fade back in
      if (carousel) {
        carousel.style.opacity = '1'
        carousel.style.transform = 'scale(1)'
      }
    }, 300)
  }

  const openModal = (project, type = 'view') => {
    setModalProject({ ...project, viewType: type, muted: true })
    setShowModal(true)
    setIsAutoPlay(false)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalProject(null)
    setIsAutoPlay(true)
  }

  // Get slides for 3-slide layout
  const getVisibleSlides = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides
    const nextIndex = (currentSlide + 1) % totalSlides
    
    return {
      prev: currentCategory.projects[prevIndex],
      current: currentCategory.projects[currentSlide],
      next: currentCategory.projects[nextIndex]
    }
  }

  const visibleSlides = getVisibleSlides()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Creative Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio through interactive categories. Each project showcases our commitment to creativity and precision.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => {
                handleCategoryChange(index);
                // Smooth scroll to portfolio section when changing category
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Description */}
        <motion.div
          className="text-center mb-8"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentCategory.name}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
        </motion.div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isAutoPlay 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                : 'bg-white text-gray-600 border border-gray-300'
            }`}
          >
            <Play size={16} />
            <span>{isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}</span>
          </button>
        </div>

        {/* 3-Slide Carousel */}
        <div className="relative max-w-7xl mx-auto carousel-container" style={{ transition: 'all 0.3s ease' }}>
          <div className={`flex items-center justify-center gap-2 md:gap-6 ${currentConfig.containerHeight}`}>
            {/* Previous Slide - Hidden on mobile */}
            <motion.div
              className="relative cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 hidden md:block"
              onClick={prevSlide}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative ${
                currentCategory.name === 'Banner Design' 
                  ? currentConfig.customAspectRatios[visibleSlides.prev.image.includes('B1') ? 'B1' : 'B2']
                  : currentConfig.aspectRatio
              } w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-gray-200`}>
                {visibleSlides.prev.type === 'video' ? (
                  <video
                    src={visibleSlides.prev.image}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={visibleSlides.prev.image}
                    alt={visibleSlides.prev.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h5 className="text-sm font-semibold truncate">{visibleSlides.prev.title}</h5>
                  <p className="text-xs opacity-80">{visibleSlides.prev.client}</p>
                </div>
              </div>
            </motion.div>

            {/* Current (Main) Slide */}
            <motion.div
              className="relative z-10"
              key={currentSlide}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`relative ${
                currentCategory.name === 'Banner Design' 
                  ? currentConfig.customAspectRatios[visibleSlides.current.image.includes('B1') ? 'B1' : 'B2']
                  : currentConfig.aspectRatio
              } w-full max-w-[300px] md:max-w-[450px] rounded-3xl overflow-hidden shadow-2xl bg-white`}
                   style={{ 
                     border: '4px solid transparent',
                     backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #9333ea, #ec4899)',
                     backgroundOrigin: 'border-box',
                     backgroundClip: 'content-box, border-box'
                   }}>
                {visibleSlides.current.type === 'video' ? (
                  <video
                    src={visibleSlides.current.image}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={visibleSlides.current.image}
                    alt={visibleSlides.current.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
                
              </div>
              
              {/* Project Info - Moved outside the card */}
              <motion.div
                className="mt-6 text-center pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{visibleSlides.current.title}</h4>
                <p className="text-gray-600 mb-4">
                  Client: {visibleSlides.current.client}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
                  <button 
                    onClick={() => openModal(visibleSlides.current, 'view')}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <Eye size={16} />
                    <span>View Project</span>
                  </button>
                  <button 
                    onClick={() => openModal(visibleSlides.current, 'details')}
                    className="flex items-center justify-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Next Slide - Hidden on mobile */}
            <motion.div
              className="relative cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 hidden md:block"
              onClick={nextSlide}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative ${
                currentCategory.name === 'Banner Design' 
                  ? currentConfig.customAspectRatios[visibleSlides.next.image.includes('B1') ? 'B1' : 'B2']
                  : currentConfig.aspectRatio
              } w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-gray-200`}>
                {visibleSlides.next.type === 'video' ? (
                  <video
                    src={visibleSlides.next.image}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={visibleSlides.next.image}
                    alt={visibleSlides.next.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h5 className="text-sm font-semibold truncate">{visibleSlides.next.title}</h5>
                  <p className="text-xs opacity-80">{visibleSlides.next.client}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-800 shadow-lg"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            whileHover={{ 
              x: -5,
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-800 shadow-lg"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            whileHover={{ 
              x: 5,
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </motion.button>

          {/* Progress Indicators */}
          <motion.div 
            className="flex justify-center mt-8 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentCategory.projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: currentSlide === index ? 1.25 : 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={false}
              />
            ))}
          </motion.div>

          {/* Slide Counter */}
          <motion.div 
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              key={currentSlide}
              className="text-sm text-gray-500 inline-block"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {currentSlide + 1} of {totalSlides}
            </motion.span>
          </motion.div>
        </div>

        {/* Modal for View/Details */}
        <AnimatePresence>
          {showModal && modalProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    <X size={20} />
                  </button>
                  
                  {modalProject.viewType === 'view' ? (
                    /* View Mode - Large Image/Video */
                    <div className="relative">
                      {modalProject.type === 'video' ? (
                        <div className="flex flex-col md:flex-row h-[80vh] max-h-[800px]">
                          {/* Video Section with 9:16 aspect ratio */}
                          <div className="md:w-1/2 relative flex items-center justify-center p-4 bg-black/90">
                            <div className="h-full aspect-[9/16] relative max-h-full">
                              <video
                                src={modalProject.image}
                                className="w-full h-full object-contain rounded-xl"
                                autoPlay
                                loop
                                playsInline
                                controls
                                id="modalVideo"
                              />
                            </div>
                            {/* Sound Control */}
                            <button
                              onClick={() => {
                                const video = document.getElementById('modalVideo');
                                if (video) {
                                  video.muted = !video.muted;
                                }
                              }}
                              className="absolute bottom-8 right-8 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg z-10"
                            >
                              {document.getElementById('modalVideo')?.muted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"/>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                                </svg>
                              )}
                            </button>
                          </div>
                          {/* Details Section */}
                          <div className="md:w-1/2 p-8 bg-white overflow-y-auto">
                            <div className="max-w-lg mx-auto">
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{modalProject.title}</h3>
                              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                                <div className="flex items-center space-x-2">
                                  <User size={18} />
                                  <span>{modalProject.client}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar size={18} />
                                  <span>{modalProject.completionDate}</span>
                                </div>
                              </div>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                                  <p className="text-gray-600 leading-relaxed">{modalProject.description}</p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                                  <ul className="space-y-2">
                                    {modalProject.features?.map((feature, index) => (
                                      <li key={index} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                                        <span className="text-gray-600">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={modalProject.image}
                            alt={modalProject.title}
                            className="w-full h-96 md:h-[500px] object-cover rounded-t-3xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white rounded-t-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{modalProject.title}</h3>
                            <p className="text-lg opacity-90">Client: {modalProject.client}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    /* Details Mode - Project Information */
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          {modalProject.type === 'video' ? (
                            <video
                              src={modalProject.image}
                              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                              autoPlay
                              loop
                              muted
                              playsInline
                              controls
                            />
                          ) : (
                            <img
                              src={modalProject.image}
                              alt={modalProject.title}
                              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                          )}
                        </div>
                        <div className="md:w-1/2 space-y-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                              {modalProject.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                              <div className="flex items-center space-x-1">
                                <User size={16} />
                                <span>{modalProject.client}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span>{modalProject.completionDate}</span>
                              </div>
                            </div>
                            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                              <Palette size={14} />
                              <span>{modalProject.projectType}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                            <p className="text-gray-600 leading-relaxed">{modalProject.description}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {modalProject.features?.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex space-x-4 pt-4">
                            <button
                              onClick={() => setModalProject({ ...modalProject, viewType: 'view' })}
                              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                            >
                              View Full Size
                            </button>
                            <a
                              href="https://wa.me/918780364562"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center"
                            >
                              Get Similar Design
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {modalProject.viewType === 'view' && (
                  <div className="p-8">
                    <div className="text-center space-y-4">
                      <button
                        onClick={() => setModalProject({ ...modalProject, viewType: 'details' })}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 mr-4"
                      >
                        View Project Details
                      </button>
                      <a
                        href="https://wa.me/918780364562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition-colors inline-block"
                      >
                        Get Similar Design
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to bring your vision to life? Let's create something extraordinary together!
          </p>
          <motion.a
            href="https://wa.me/918780364562"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <ExternalLink className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}