import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Play, X, Calendar, User, Palette } from 'lucide-react'
import FrontSideCard from "../assets/Frontside Card Design.png"
import FrontSideCard2 from "../assets/FrontSide.jpg"
import cardb from "../assets/Red & Black Design Card.jpg"
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
      aspectRatio: 'aspect-[16/9]',
      containerHeight: 'min-h-[400px]',
      layout: 'landscape'
    },
    'Pre-Wedding Posts': {
      aspectRatio: 'aspect-square',
      containerHeight: 'min-h-[500px]',
      layout: 'square'
    },
    'Social Media': {
      aspectRatio: 'aspect-[9/16]',
      containerHeight: 'min-h-[700px]',
      layout: 'story'
    }
  }

  // Portfolio categories
  const categories = [
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
          title: "Wedding Invitation Suite", 
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400", 
          client: "Nisha Machhi",
          description: "Elegant wedding invitation suite with floral motifs and gold accents, perfect for a romantic celebration.",
          features: ["Floral designs", "Gold foil printing", "RSVP cards", "Thank you cards"],
          completionDate: "2024-02-14",
          projectType: "Wedding Stationery"
        },
        { 
          id: 6, 
          title: "Birthday Party Invite", 
          image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400", 
          client: "Nisha Machhi",
          description: "Fun and colorful birthday party invitation with playful elements and vibrant colors.",
          features: ["Colorful design", "Playful graphics", "Custom illustrations", "Premium paper"],
          completionDate: "2024-03-10",
          projectType: "Party Invitation"
        },
        { 
          id: 7, 
          title: "Anniversary Card", 
          image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400", 
          client: "Nisha Machhi",
          description: "Sophisticated anniversary invitation with romantic themes and elegant typography.",
          features: ["Romantic design", "Elegant fonts", "Heart motifs", "Embossed elements"],
          completionDate: "2024-03-18",
          projectType: "Anniversary Stationery"
        },
        { 
          id: 8, 
          title: "Event Invitation", 
          image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400", 
          client: "Nisha Machhi",
          description: "Corporate event invitation with professional design and clear event details.",
          features: ["Professional layout", "Event timeline", "RSVP tracking", "Brand integration"],
          completionDate: "2024-04-05",
          projectType: "Corporate Event"
        },
      ]
    },
    {
      name: "Menu Design",
      description: "Modern restaurant menus and food presentation designs",
      projects: [
        { 
          id: 9, 
          title: "Fine Dining Menu", 
          image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400", 
          client: "Maharaja Foods",
          description: "Elegant fine dining menu with sophisticated typography and premium feel.",
          features: ["Premium paper", "Gold accents", "Fine typography", "Food photography"],
          completionDate: "2024-01-20",
          projectType: "Restaurant Menu"
        },
        { 
          id: 10, 
          title: "Cafe Menu", 
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", 
          client: "Maharaja Foods",
          description: "Casual cafe menu with warm colors and friendly design approach.",
          features: ["Warm colors", "Casual typography", "Cozy feel", "Easy to read"],
          completionDate: "2024-02-05",
          projectType: "Cafe Menu"
        },
        { 
          id: 11, 
          title: "Bar Menu", 
          image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400", 
          client: "Maharaja Foods",
          description: "Stylish bar menu with dark theme and modern cocktail presentation.",
          features: ["Dark theme", "Modern design", "Cocktail focus", "Premium feel"],
          completionDate: "2024-02-28",
          projectType: "Bar Menu"
        },
      ]
    },
    {
      name: "Banner Design",
      description: "Eye-catching banners for events, promotions, and marketing",
      projects: [
        { 
          id: 13, 
          title: "Blood Donation Camp Banner", 
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600", 
          client: "Help Warriors Foundation",
          description: "Impactful banner design for blood donation camp with clear messaging and call-to-action.",
          features: ["Bold typography", "Medical imagery", "Clear CTA", "High impact"],
          completionDate: "2024-01-15",
          projectType: "Social Campaign"
        },
        { 
          id: 14, 
          title: "Health Campaign Banner", 
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600", 
          client: "Help Warriors Foundation",
          description: "Health awareness campaign banner with professional medical design.",
          features: ["Medical theme", "Professional look", "Informative", "Trust building"],
          completionDate: "2024-02-20",
          projectType: "Health Campaign"
        },
        { 
          id: 15, 
          title: "Event Promotion Banner", 
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", 
          client: "Help Warriors Foundation",
          description: "Dynamic event promotion banner with vibrant colors and engaging design.",
          features: ["Vibrant colors", "Event details", "Engaging design", "Multi-platform"],
          completionDate: "2024-03-12",
          projectType: "Event Promotion"
        },
      ]
    },
    {
      name: "Pre-Wedding Posts",
      description: "Beautiful pre-wedding social media content and announcements",
      projects: [
        { 
          id: 17, 
          title: "Engagement Announcement", 
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400", 
          client: "Wedding Couple",
          description: "Romantic engagement announcement with beautiful typography and floral elements.",
          features: ["Romantic design", "Floral elements", "Beautiful fonts", "Social ready"],
          completionDate: "2024-01-10",
          projectType: "Wedding Social"
        },
        { 
          id: 18, 
          title: "Save the Date Post", 
          image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400", 
          client: "Wedding Couple",
          description: "Elegant save the date social media post with wedding details and romantic theme.",
          features: ["Date focus", "Elegant design", "Wedding theme", "Share-worthy"],
          completionDate: "2024-01-25",
          projectType: "Wedding Social"
        },
        { 
          id: 19, 
          title: "Wedding Countdown", 
          image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400", 
          client: "Wedding Couple",
          description: "Exciting wedding countdown post to build anticipation for the big day.",
          features: ["Countdown design", "Excitement building", "Interactive feel", "Celebration theme"],
          completionDate: "2024-02-15",
          projectType: "Wedding Social"
        },
        { 
          id: 20, 
          title: "Couple Introduction", 
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400", 
          client: "Wedding Couple",
          description: "Beautiful couple introduction post with their story and journey together.",
          features: ["Personal story", "Couple focus", "Journey theme", "Emotional connect"],
          completionDate: "2024-03-01",
          projectType: "Wedding Social"
        }
      ]
    },
    {
      name: "Social Media",
      description: "Engaging social media posts and story templates",
      projects: [
        { 
          id: 21, 
          title: "Instagram Story Templates", 
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400", 
          client: "Beauty Brand",
          description: "Modern Instagram story templates with beauty brand aesthetic and engaging layouts.",
          features: ["Story format", "Brand colors", "Template series", "Beauty focus"],
          completionDate: "2024-01-05",
          projectType: "Social Templates"
        },
        { 
          id: 22, 
          title: "Facebook Post Design", 
          image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400", 
          client: "Local Business",
          description: "Professional Facebook post design for local business promotion and engagement.",
          features: ["Business focus", "Local appeal", "Professional look", "Engagement driven"],
          completionDate: "2024-02-12",
          projectType: "Business Social"
        },
        { 
          id: 23, 
          title: "LinkedIn Company Post", 
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", 
          client: "Corporate Brand",
          description: "Corporate LinkedIn post design with professional aesthetics and business messaging.",
          features: ["Corporate design", "Professional tone", "Business messaging", "LinkedIn optimized"],
          completionDate: "2024-03-08",
          projectType: "Corporate Social"
        },
        { 
          id: 24, 
          title: "YouTube Thumbnail", 
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400", 
          client: "Content Creator",
          description: "Eye-catching YouTube thumbnail design to maximize click-through rates.",
          features: ["High contrast", "Eye-catching", "Click-worthy", "YouTube optimized"],
          completionDate: "2024-03-20",
          projectType: "Video Content"
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
    setActiveCategory(index)
    setCurrentSlide(0)
  }

  const openModal = (project, type = 'view') => {
    setModalProject({ ...project, viewType: type })
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
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
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
        <div className="relative max-w-7xl mx-auto">
          <div className={`flex items-center justify-center gap-2 md:gap-6 ${currentConfig.containerHeight}`}>
            {/* Previous Slide - Hidden on mobile */}
            <motion.div
              className="relative cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 hidden md:block"
              onClick={prevSlide}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative ${currentConfig.aspectRatio} w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-gray-200`}>
                <img
                  src={visibleSlides.prev.image}
                  alt={visibleSlides.prev.title}
                  className="w-full h-full object-cover"
                />
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
              <div className={`relative ${currentConfig.aspectRatio} w-full max-w-[300px] md:max-w-[450px] rounded-3xl overflow-hidden shadow-2xl bg-white`}
                   style={{ 
                     border: '4px solid transparent',
                     backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #9333ea, #ec4899)',
                     backgroundOrigin: 'border-box',
                     backgroundClip: 'content-box, border-box'
                   }}>
                <img
                  src={visibleSlides.current.image}
                  alt={visibleSlides.current.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
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
              <div className={`relative ${currentConfig.aspectRatio} w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-gray-200`}>
                <img
                  src={visibleSlides.next.image}
                  alt={visibleSlides.next.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h5 className="text-sm font-semibold truncate">{visibleSlides.next.title}</h5>
                  <p className="text-xs opacity-80">{visibleSlides.next.client}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-800 hover:bg-white shadow-lg transition-all duration-300"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-800 hover:bg-white shadow-lg transition-all duration-300"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {currentCategory.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} of {totalSlides}
            </span>
          </div>
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
                    /* View Mode - Large Image */
                    <div className="relative">
                      <img
                        src={modalProject.image}
                        alt={modalProject.title}
                        className="w-full h-96 md:h-[500px] object-cover rounded-t-3xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white rounded-t-3xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{modalProject.title}</h3>
                        <p className="text-lg opacity-90">Client: {modalProject.client}</p>
                      </div>
                    </div>
                  ) : (
                    /* Details Mode - Project Information */
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <img
                            src={modalProject.image}
                            alt={modalProject.title}
                            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                          />
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