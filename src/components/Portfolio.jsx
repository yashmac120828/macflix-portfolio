import { useState, useEffect , useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize } from 'lucide-react'
import { getCloudinaryUrl } from '../utils/cloudinary'

// Add no-scrollbar styles to a style tag
const style = document.createElement('style')
style.textContent = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`
typeof document !== 'undefined' && document.head.appendChild(style)

// Cloudinary URLs for optimized images
const FrontSideCard = "Frontside_Card_Design_d7z4h4"
const FrontSideCard2 = "FrontSide_nbt8qf"
const cardb = "Red_Black_Design_Card_mgmag8"
const BH1 = "Birthday_Invi-1_kdi3go"
const BH2 = "Birthday_Invi-2_vucjmg"
const B1 = "B1_oqo46l"
const B2 = "B2_xyngpe"
const BLOOD_DONATION = "BLOOD_DONATION_CAMP_wh4hw3"
const VID1 = "1015_1_aoudjx"
const VID2 = "1027_yd0zha"
const VID3 = "1029_1_jyhxa4"
const FOOD_MENU = "32_Food_Menu_1_dakfll"
const BACKGROUND_IMAGE = "nethero_l0cx62"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [fullscreenVideo, setFullscreenVideo] = useState(null)
  const videoRef = useRef(null)
  const fullscreenVideoRef = useRef(null)

  
  // Category-specific configurations for aspect ratios and sizing
  const categoryConfigs = {
    'Visiting Cards': {
      aspectRatio: 'aspect-[3.5/2]', // Standard business card ratio
      height: 'h-[400px]',
      objectFit: 'object-contain'
    },
    'Birthday Cards': {
      aspectRatio: 'aspect-[4/5]', // Portrait orientation for birthday cards
      height: 'h-[500px]',
      objectFit: 'object-contain'
    },
    'Banner Design': {
      aspectRatio: 'aspect-[16/9]', // Standard banner ratio
      height: 'h-[400px]',
      objectFit: 'object-contain'
    },
    'Social Media': {
      aspectRatio: 'aspect-[9/16]', // Vertical social media post ratio
      height: 'h-[600px]',
      objectFit: 'object-contain'
    },
    'Video Editing': {
      aspectRatio: 'aspect-square', // Square container
      height: 'h-[500px]',
      objectFit: 'object-cover'
    },
    'Food Menu Design': {
      aspectRatio: 'aspect-[3/4]', // Menu card ratio
      height: 'h-[600px]',
      objectFit: 'object-contain'
    }
  }

  // Portfolio categories with projects
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
          description: "A sleek and professional business card design featuring modern typography and clean layout.",
          features: ["Premium cardstock", "Embossed logo", "Gold foil accents", "Double-sided design"],
          completionDate: "2024-03-15",
          projectType: "Business Identity",
          type: "image"
        },
        { 
          id: 2, 
          title: "Creative Designer Card", 
          image: FrontSideCard2, 
          client: "Bhautik Shah",
          description: "An innovative business card design with creative elements and unique layout.",
          features: ["Creative typography", "Color gradient", "Unique shape", "Matte finish"],
          completionDate: "2024-03-20",
          projectType: "Creative Design",
          type: "image"
        },
        { 
          id: 3, 
          title: "Insurance Professional Card", 
          image: cardb, 
          client: "Bhautik Shah",
          description: "Professional business card design for insurance industry with trust-building elements.",
          features: ["Professional layout", "Trust symbols", "Clear contact info", "Industry-specific design"],
          completionDate: "2024-03-25",
          projectType: "Professional Services",
          type: "image"
        }
      ]
    },
    {
      name: "Birthday Cards",
      description: "Creative and vibrant birthday celebration cards",
      projects: [
        { 
          id: 4, 
          title: "Birthday Celebration Card", 
          image: BH1, 
          client: "Nisha Machhi",
          description: "Elegant birthday card design with festive motifs and celebratory elements.",
          features: ["Festive designs", "Premium printing", "Custom typography", "Celebration theme"],
          completionDate: "2024-01-26",
          projectType: "Birthday Card",
          type: "image"
        },
        { 
          id: 5, 
          title: "Party Invitation Design", 
          image: BH2, 
          client: "Nisha Machhi",
          description: "Fun and colorful birthday party invitation with playful elements.",
          features: ["Colorful design", "Playful graphics", "Custom illustrations", "Premium paper"],
          completionDate: "2024-03-10",
          projectType: "Party Invitation",
          type: "image"
        }
      ]
    },
    {
      name: "Banner Design",
      description: "Eye-catching banners for events, promotions, and marketing",
      projects: [
        { 
          id: 6, 
          title: "Blood Donation Camp Banner", 
          image: B1, 
          client: "Help Warriors Foundation",
          description: "Impactful banner design for blood donation camp with clear messaging.",
          features: ["Bold typography", "Medical imagery", "Clear CTA", "High impact"],
          completionDate: "2024-01-15",
          projectType: "Social Campaign",
          type: "image"
        },
        { 
          id: 7, 
          title: "Health Campaign Banner", 
          image: B2, 
          client: "Help Warriors Foundation",
          description: "Health awareness campaign banner with professional medical design.",
          features: ["Medical theme", "Professional look", "Informative", "Trust building"],
          completionDate: "2024-01-15",
          projectType: "Health Campaign",
          type: "image"
        }
      ]
    },
    {
      name: "Social Media",
      description: "Engaging social media designs and promotional content",
      projects: [
        {
          id: 8,
          title: "Blood Donation Campaign",
          image: BLOOD_DONATION,
          client: "Help Warriors Foundation",
          description: "Social media campaign design for blood donation awareness.",
          features: ["Campaign Design", "Social Impact", "Clear Messaging", "Community Engagement"],
          completionDate: "2024-02-15",
          projectType: "Social Campaign",
          type: "image"
        }
      ]
    },
    {
      name: "Video Editing",
      description: "Professional video editing and motion graphics",
      projects: [
        {
          id: 9,
          title: "Creative Motion Edit",
          image: VID1,
          client: "MACFLIX",
          description: "Dynamic motion graphics and creative video editing showcase.",
          features: ["Motion Graphics", "Creative Transitions", "Visual Effects", "Color Grading"],
          completionDate: "2024-03-01",
          projectType: "Video Edit",
          type: "video",
          startTime: 15 // Start from 15 seconds where the best scenes begin
        },
        {
          id: 10,
          title: "Cinematic Edit",
          image: VID2,
          client: "MACFLIX",
          description: "Cinematic style video editing with smooth transitions.",
          features: ["Cinematic Effects", "Smooth Transitions", "Professional Audio", "Color Grading"],
          completionDate: "2024-03-15",
          projectType: "Video Edit",
          type: "video"
        },
        {
          id: 11,
          title: "Social Media Reel",
          image: VID3,
          client: "MACFLIX",
          description: "Engaging social media reel with trendy effects.",
          features: ["Trendy Effects", "Dynamic Transitions", "Music Sync", "Social Optimization"],
          completionDate: "2024-03-20",
          projectType: "Social Media",
          type: "video"
        }
      ]
    },
    {
      name: "Food Menu Design",
      description: "Creative and appetizing menu designs for restaurants",
      projects: [
        {
          id: 12,
          title: "Maharaja Foods Menu",
          image: FOOD_MENU,
          client: "Maharaja Foods",
          description: "Elegant and modern menu design featuring fast foods and breakfast items.",
          features: ["Modern Typography", "Professional Layout", "Food Categories", "Attractive Food Presentation"],
          completionDate: "2024-03-25",
          projectType: "Restaurant Menu",
          type: "image"
        }
      ]
    }
  ]

  const currentCategory = categories[activeCategory]
  const currentProject = currentCategory.projects[currentSlide]
  const totalSlides = currentCategory.projects.length

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isFullscreen) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides, isFullscreen])

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [activeCategory])

  // Handle video autoplay when project changes
  useEffect(() => {
    if (currentProject.type === 'video' && videoRef.current) {
      const video = videoRef.current;
      const startTime = currentProject.startTime || 0;
      
      console.log('Project changed to video:', currentProject.title, 'Start time:', startTime);
      
      const handleLoadedMetadata = () => {
        console.log('Metadata loaded in useEffect, setting time to:', startTime);
        video.currentTime = startTime;
        
        // Verify after seeking
        const handleSeeked = () => {
          console.log('Video seeked to:', video.currentTime);
          video.removeEventListener('seeked', handleSeeked);
        };
        video.addEventListener('seeked', handleSeeked);
      };
      
      if (video.readyState >= 1) {
        // Metadata already loaded
        console.log('Metadata already loaded, setting time immediately');
        video.currentTime = startTime;
      } else {
        // Wait for metadata to load
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
      
      // Try to play the video
      video.play().catch((error) => {
        console.log('Autoplay failed:', error);
      });
      
      // Cleanup
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [currentProject])

  // Handle fullscreen video state
  useEffect(() => {
    if (isFullscreen && fullscreenVideo && fullscreenVideoRef.current) {
      setIsPlaying(true);
      
      // Set start time if specified
      const startTime = fullscreenVideo.startTime || 0;
      fullscreenVideoRef.current.currentTime = startTime;
      
      fullscreenVideoRef.current.play().then(() => {
        // Video started playing, double-check start time
        setTimeout(() => {
          if (fullscreenVideoRef.current && Math.abs(fullscreenVideoRef.current.currentTime - startTime) > 1) {
            fullscreenVideoRef.current.currentTime = startTime;
          }
        }, 200);
      }).catch(() => {
        // Autoplay failed
      });
    } else {
      setIsPlaying(false);
    }
  }, [isFullscreen, fullscreenVideo])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleCategoryChange = (index) => {
    setActiveCategory(index)
  }

  return (
    <section className="h-screen relative bg-black overflow-hidden" id="portfolio">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 z-10"></div>
        <img 
          src={getCloudinaryUrl(BACKGROUND_IMAGE)}
          alt="Portfolio Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 min-h-screen flex flex-col py-4 md:py-8 overflow-y-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-white">
            Our Creative Portfolio
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Explore our diverse portfolio of creative works and professional designs
          </p>
        </motion.div>

        {/* Category Navigation - Scrollable on mobile */}
        <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 mb-4 md:mb-6 overflow-x-auto pb-2 md:pb-0 px-2 md:px-0 no-scrollbar">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => handleCategoryChange(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium whitespace-nowrap ${
                activeCategory === index
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white/10 text-white backdrop-blur-sm'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: activeCategory === index ? 1.05 : 1
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Main Content Layout - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center min-h-[450px] py-2 md:py-4">
          {/* Content Display - Full width on mobile */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSlide}`}
                className={`relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm ${categoryConfigs[currentCategory.name].height} ${
                  categoryConfigs[currentCategory.name].aspectRatio
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                {currentProject.type === 'video' ? (
                  <div 
                    className="relative w-full h-full bg-gradient-to-br from-red-900/30 via-black/50 to-purple-900/30 rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center"
                    onClick={() => {
                      setFullscreenVideo(currentProject);
                      setIsFullscreen(true);
                    }}
                  >
                    {/* Video Container - 9:16 aspect ratio centered */}
                    <div className="relative aspect-[9/16] h-[85%] bg-black rounded-lg overflow-hidden shadow-2xl">
                      <video
                        src={getCloudinaryUrl(currentProject.image, 'video')}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted={true}
                        playsInline
                        ref={videoRef}
                        onLoadedMetadata={() => {
                          // Set start time when metadata is loaded
                          console.log('Video metadata loaded, setting start time:', currentProject.startTime);
                          if (videoRef.current && currentProject.startTime) {
                            videoRef.current.currentTime = currentProject.startTime;
                            console.log('Set video time to:', videoRef.current.currentTime);
                          }
                        }}
                        onSeeked={() => {
                          // Video has finished seeking to the new time
                          console.log('Video seeked to:', videoRef.current?.currentTime);
                        }}
                        onPlay={() => {
                          // Ensure start time is correct when video starts playing
                          if (videoRef.current && currentProject.startTime && 
                              Math.abs(videoRef.current.currentTime - currentProject.startTime) > 1) {
                            console.log('Correcting video time on play');
                            videoRef.current.currentTime = currentProject.startTime;
                          }
                        }}
                      />
                      
                      {/* Video Overlay with Play Button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                        <div className="bg-red-600/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <Maximize size={24} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Pattern/Texture */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
                  </div>
                ) : (
                  <img
                    src={getCloudinaryUrl(currentProject.image)}
                    alt={currentProject.title}
                    className={`w-full h-full ${categoryConfigs[currentCategory.name].objectFit}`}
                  />
                )}
                
                
               
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Details - Full width on mobile */}
          <div className="w-full md:w-1/2 h-full text-white flex flex-col justify-center px-2 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSlide}-details`}
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -20, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3 md:space-y-4"
              >
                {/* Category Badge */}
                <motion.span
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  {currentCategory.name}
                </motion.span>

                {/* Project Title */}
                <motion.h3
                  className="text-4xl font-bold leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.title}
                </motion.h3>

                {/* Project Description */}
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.description}
                </motion.p>

                {/* Client & Date Info */}
                <motion.div
                  className="flex items-center gap-6 text-gray-400"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span><strong>Client:</strong> {currentProject.client}</span>
                  <span><strong>Date:</strong> {currentProject.completionDate}</span>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.features.map((feature, index) => (
                      <motion.span
                        key={feature}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href="https://wa.me/918780364562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Similar Design
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls - Adjusted for mobile */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6">
          <button
            onClick={prevSlide}
            className="p-1.5 md:p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 group"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {currentCategory.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-red-600 rounded-full'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 md:p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 group"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Auto-play Toggle - Adjusted for mobile */}
        <motion.div
          className="flex justify-center mt-3 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base ${
              isAutoPlay 
                ? 'bg-red-600 text-white'
                : 'bg-white/10 text-white backdrop-blur-sm'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
            <span>{isAutoPlay ? 'Auto-play ON' : 'Auto-play OFF'}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Fullscreen Video Overlay */}
      <AnimatePresence>
        {isFullscreen && fullscreenVideo && fullscreenVideo.type === 'video' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Video Container */}
              <div className="relative w-full h-full max-w-7xl mx-auto">
                <video
                  ref={fullscreenVideoRef}
                  src={getCloudinaryUrl(fullscreenVideo.image, 'video')}
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  onLoadedMetadata={() => {
                    // Set start time when metadata is loaded
                    console.log('Fullscreen video metadata loaded, setting start time:', fullscreenVideo.startTime);
                    if (fullscreenVideoRef.current && fullscreenVideo.startTime) {
                      fullscreenVideoRef.current.currentTime = fullscreenVideo.startTime;
                      console.log('Set fullscreen video time to:', fullscreenVideoRef.current.currentTime);
                    }
                  }}
                  onPlay={() => {
                    // Ensure start time is correct when video starts playing
                    if (fullscreenVideoRef.current && fullscreenVideo.startTime && 
                        Math.abs(fullscreenVideoRef.current.currentTime - fullscreenVideo.startTime) > 1) {
                      console.log('Correcting fullscreen video time on play');
                      fullscreenVideoRef.current.currentTime = fullscreenVideo.startTime;
                    }
                  }}
                />
                
                {/* Overlay Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="flex items-center justify-between">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white">{fullscreenVideo.title}</h3>
                    
                    {/* Controls */}
                    <div className="flex items-center gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={() => {
                          if (fullscreenVideoRef.current) {
                            if (isPlaying) {
                              fullscreenVideoRef.current.pause();
                            } else {
                              fullscreenVideoRef.current.play();
                            }
                            setIsPlaying(!isPlaying);
                          }
                        }}
                        className="w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        {isPlaying ? (
                          <Pause size={20} className="text-white" />
                        ) : (
                          <Play size={20} className="text-white" />
                        )}
                      </button>
                      
                      {/* Mute/Unmute Button */}
                      <button
                        onClick={() => {
                          setIsMuted(!isMuted);
                          if (fullscreenVideoRef.current) {
                            fullscreenVideoRef.current.muted = !isMuted;
                          }
                        }}
                        className="w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        {isMuted ? (
                          <VolumeX size={20} className="text-white" />
                        ) : (
                          <Volume2 size={20} className="text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsFullscreen(false);
                  setIsPlaying(false);
                  setFullscreenVideo(null);
                }}
                className="absolute top-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}