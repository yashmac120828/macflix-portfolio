import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, MessageCircle, X, Calendar, User } from 'lucide-react'
import { getCloudinaryUrl } from '../utils/cloudinary'
import { ImageShimmer } from './ShimmerLoader'

// Cloudinary URLs for optimized images
const bloodDonation10_10_2025="Blood_donation_camp_2X3_fhgmbk"
const myElectricals="MY_Electricals_2_s5iwgd"
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
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)

  // Portfolio categories with projects
  const categories = [
    {
      name: "Visiting Cards",
      projects: [
        {
          id: 1,
          title: "Modern Visiting Card",
          image: myElectricals,
          client: "MY Electricals",
          description: "A modern and sleek business card design featuring bold typography and a clean layout.",
          features: ["High-quality cardstock", "Modern typography", "Clean layout", "Minimalist design"],
          completionDate: "2025-11-10",
          category: "Visiting Cards",
          type: "image"
        },
        { 
          id: 2, 
          title: "Corporate Business Card", 
          image: FrontSideCard, 
          client: "Bhautik Shah",
          description: "A sleek and professional business card design featuring modern typography and clean layout.",
          features: ["Premium cardstock", "Embossed logo", "Gold foil accents", "Double-sided design"],
          completionDate: "2024-03-15",
          category: "Visiting Cards",
          type: "image"
        },
        { 
          id: 3, 
          title: "Creative Designer Card", 
          image: FrontSideCard2, 
          client: "Bhautik Shah",
          description: "An innovative business card design with creative elements and unique layout.",
          features: ["Creative typography", "Color gradient", "Unique shape", "Matte finish"],
          completionDate: "2024-03-20",
          category: "Visiting Cards",
          type: "image"
        },
        { 
          id: 4, 
          title: "Insurance Professional Card", 
          image: cardb, 
          client: "Bhautik Shah",
          description: "Professional business card design for insurance industry with trust-building elements.",
          features: ["Professional layout", "Trust symbols", "Clear contact info", "Industry-specific design"],
          completionDate: "2024-03-25",
          category: "Visiting Cards",
          type: "image"
        }
      ]
    },
    {
      name: "Banner Design",
      projects: [
        {
          id: 5, 
          title: "Blood Donation Camp Banner", 
          image: bloodDonation10_10_2025, 
          client: "Help Warriors Foundation",
          description: "Impactful banner design for blood donation camp with clear messaging.",
          features: ["Bold typography", "Medical imagery", "Clear CTA", "High impact"],
          completionDate: "2025-12-12",
          category: "Banner Design",
          type: "image" 
        },
        { 
          id: 6, 
          title: "Health Campaign Banner", 
          image: B1, 
          client: "Help Warriors Foundation",
          description: "Impactful banner design for blood donation camp with clear messaging.",
          features: ["Bold typography", "Medical imagery", "Clear CTA", "High impact"],
          completionDate: "2024-01-15",
          category: "Banner Design",
          type: "image"
        },
        { 
          id: 7, 
          title: "Health Awareness Banner", 
          image: B2, 
          client: "Help Warriors Foundation",
          description: "Health awareness campaign banner with professional medical design.",
          features: ["Medical theme", "Professional look", "Informative", "Trust building"],
          completionDate: "2024-01-15",
          category: "Banner Design",
          type: "image"
        }
      ]
    },
    {
      name: "Birthday Cards",
      projects: [
        { 
          id: 8, 
          title: "Birthday Celebration Card", 
          image: BH1, 
          client: "Nisha Machhi",
          description: "Elegant birthday card design with festive motifs and celebratory elements.",
          features: ["Festive designs", "Premium printing", "Custom typography", "Celebration theme"],
          completionDate: "2024-01-26",
          category: "Birthday Cards",
          type: "image"
        },
        { 
          id: 9, 
          title: "Party Invitation Design", 
          image: BH2, 
          client: "Nisha Machhi",
          description: "Fun and colorful birthday party invitation with playful elements.",
          features: ["Colorful design", "Playful graphics", "Custom illustrations", "Premium paper"],
          completionDate: "2024-03-10",
          category: "Birthday Cards",
          type: "image"
        }
      ]
    },
    {
      name: "Social Media",
      projects: [
        {
          id: 10,
          title: "Blood Donation Campaign",
          image: BLOOD_DONATION,
          client: "Help Warriors Foundation",
          description: "Social media campaign design for blood donation awareness.",
          features: ["Campaign Design", "Social Impact", "Clear Messaging", "Community Engagement"],
          completionDate: "2024-02-15",
          category: "Social Media",
          type: "image"
        }
      ]
    },
    {
      name: "Food Menu Design",
      projects: [
        {
          id: 11,
          title: "Maharaja Foods Menu",
          image: FOOD_MENU,
          client: "Maharaja Foods",
          description: "Elegant and modern menu design featuring fast foods and breakfast items.",
          features: ["Modern Typography", "Professional Layout", "Food Categories", "Attractive Food Presentation"],
          completionDate: "2024-03-25",
          category: "Food Menu Design",
          type: "image"
        }
      ]
    }
  ]

  // Get all projects in a flat array
  const allProjects = categories.flatMap(cat => cat.projects)

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory)

  // Simulate loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [activeCategory])

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Creative <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our professional creative work that brings brands to life
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {['All', ...categories.map(cat => cat.name)].map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(6)].map((_, index) => (
                <ImageShimmer key={index} height="h-96" />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-900">
                    <motion.img
                      src={getCloudinaryUrl(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCard === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredCard === project.id ? 0 : 20,
                          opacity: hoveredCard === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={18} />
                        View Details
                      </motion.button>
                      
                      <motion.a
                        href="https://wa.me/918780364562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredCard === project.id ? 0 : 20,
                          opacity: hoveredCard === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle size={18} />
                        Request This
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-red-600/20 text-red-400 rounded-full border border-red-600/30">
                      {project.category}
                    </span>
                    
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Project Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{project.completionDate}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Project Image */}
              <div className="relative h-96 bg-gray-950">
                <img
                  src={getCloudinaryUrl(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12">
                {/* Category */}
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-red-600/20 text-red-400 rounded-full border border-red-600/30">
                  {selectedProject.category}
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-8 text-gray-400">
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Client</span>
                    <span className="font-semibold text-white">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Completion Date</span>
                    <span className="font-semibold text-white">{selectedProject.completionDate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/918780364562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={20} />
                    Get a Quote
                  </motion.a>
                  <motion.a
                    href="mailto:yashmachhi1408@gmail.com"
                    className="flex-1 px-8 py-4 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700 transition-colors text-center border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Email Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}