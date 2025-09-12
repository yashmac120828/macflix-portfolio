import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Play } from 'lucide-react'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Portfolio categories based on your Instagram highlights
  const categories = [
    {
      name: "Visiting Cards",
      description: "Professional business card designs with modern layouts",
      projects: [
        { id: 1, title: "Corporate Business Card", image: "/api/placeholder/600/400", client: "Tech Corp" },
        { id: 2, title: "Creative Designer Card", image: "/api/placeholder/600/400", client: "Design Studio" },
        { id: 3, title: "Medical Professional Card", image: "/api/placeholder/600/400", client: "Dr. Smith Clinic" },
        { id: 4, title: "Luxury Brand Card", image: "/api/placeholder/600/400", client: "Fashion House" }
      ]
    },
    {
      name: "Invitation Cards",
      description: "Elegant invitations for weddings, events, and celebrations",
      projects: [
        { id: 5, title: "Wedding Invitation Suite", image: "/api/placeholder/600/400", client: "Sarah & John" },
        { id: 6, title: "Birthday Party Invite", image: "/api/placeholder/600/400", client: "Kids Party" },
        { id: 7, title: "Corporate Event Invite", image: "/api/placeholder/600/400", client: "Annual Meeting" },
        { id: 8, title: "Baby Shower Invitation", image: "/api/placeholder/600/400", client: "Family Event" }
      ]
    },
    {
      name: "Menu Design",
      description: "Modern restaurant menus and food presentation designs",
      projects: [
        { id: 9, title: "Fine Dining Menu", image: "/api/placeholder/600/400", client: "Restaurant Elite" },
        { id: 10, title: "Cafe Menu Board", image: "/api/placeholder/600/400", client: "Coffee Corner" },
        { id: 11, title: "Food Truck Menu", image: "/api/placeholder/600/400", client: "Street Eats" },
        { id: 12, title: "Digital Menu Display", image: "/api/placeholder/600/400", client: "Modern Bistro" }
      ]
    },
    {
      name: "Banner Design",
      description: "Eye-catching banners for events, promotions, and marketing",
      projects: [
        { id: 13, title: "Event Promotion Banner", image: "/api/placeholder/600/400", client: "Music Festival" },
        { id: 14, title: "Sale Banner Design", image: "/api/placeholder/600/400", client: "Fashion Store" },
        { id: 15, title: "Grand Opening Banner", image: "/api/placeholder/600/400", client: "New Restaurant" },
        { id: 16, title: "Social Media Banner", image: "/api/placeholder/600/400", client: "Online Campaign" }
      ]
    },
    {
      name: "Pre-Wedding Posts",
      description: "Unique brand identities and logo designs for businesses",
      projects: [
        { id: 17, title: "Tech Startup Logo", image: "/api/placeholder/600/400", client: "InnovateTech" },
        { id: 18, title: "Restaurant Logo", image: "/api/placeholder/600/400", client: "Taste Paradise" },
        { id: 19, title: "Fashion Brand Logo", image: "/api/placeholder/600/400", client: "Style Studio" },
        { id: 20, title: "Healthcare Logo", image: "/api/placeholder/600/400", client: "MedCare Plus" }
      ]
    },
    {
      name: "Social Media",
      description: "Engaging social media posts and story templates",
      projects: [
        { id: 21, title: "Instagram Story Templates", image: "/api/placeholder/600/400", client: "Beauty Brand" },
        { id: 22, title: "Facebook Post Design", image: "/api/placeholder/600/400", client: "Local Business" },
        { id: 23, title: "LinkedIn Company Post", image: "/api/placeholder/600/400", client: "Corporate Brand" },
        { id: 24, title: "YouTube Thumbnail", image: "/api/placeholder/600/400", client: "Content Creator" }
      ]
    }
  ]

  const currentCategory = categories[activeCategory]
  const totalSlides = currentCategory.projects.length

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-macflix-gradient bg-clip-text text-transparent">
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
                  ? 'bg-macflix-gradient text-white shadow-lg transform scale-105'
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

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Auto-play Toggle */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-macflix-gradient text-white' 
                  : 'bg-white text-gray-600 border border-gray-300'
              }`}
            >
              <Play size={16} />
              <span>{isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}</span>
            </button>
          </div>

          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSlide}`}
                className="relative h-96 md:h-[500px]"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={currentCategory.projects[currentSlide].image}
                  alt={currentCategory.projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-2xl md:text-3xl font-bold mb-2">
                      {currentCategory.projects[currentSlide].title}
                    </h4>
                    <p className="text-lg mb-4 text-gray-200">
                      Client: {currentCategory.projects[currentSlide].client}
                    </p>
                    
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronRight size={24} />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {currentCategory.projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  currentSlide === index 
                    ? 'ring-4 ring-macflix-primary shadow-lg scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: currentSlide === index ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-macflix-gradient/20"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

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
            className="inline-flex items-center px-8 py-4 bg-macflix-gradient text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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