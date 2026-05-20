import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext } from 'react'
import { X, ChevronRight } from 'lucide-react'
import { LeadContext } from '../context/LeadContext'
import { EmojiIcon } from './IconMap'

export default function ServiceExplorer() {
  const [selectedService, setSelectedService] = useState(null)
  const [step, setStep] = useState(1)
  const { leadData, updateLeadFields, toggleService, toggleGoal } = useContext(LeadContext)

  const services = [
    {
      id: 'design',
      title: 'Design & Branding',
      icon: '🎨',
      description: 'Brand identity, social designs, and visual systems',
      services: ['Banner Designing', 'Brand Identity Kits', 'Social Media Design']
    },
    {
      id: 'video',
      title: 'Video Editing',
      icon: '🎬',
      description: 'Reels, YouTube, products, and corporate videos',
      services: ['Reels Editing', 'YouTube Editing', 'Product Promos', 'Corporate Videos']
    },
    {
      id: 'web',
      title: 'Websites',
      icon: '🌐',
      description: 'Portfolio, business, startup, and e-commerce sites',
      services: ['Portfolio Websites', 'Business Websites', 'Startup Websites', 'E-commerce']
    },
    {
      id: 'ai',
      title: 'AI Services',
      icon: '⚡',
      description: 'AI creative tools and automation systems',
      services: ['AI Creative Generation', 'AI Automation', 'AI Video Enhancement']
    },
    {
      id: 'social',
      title: 'Social Media Management',
      icon: '📱',
      description: 'Content creation and management across platforms',
      services: ['Instagram Management', 'YouTube Management', 'Multi-Platform Management']
    },
    {
      id: 'apps',
      title: 'Web Applications',
      icon: '🛠️',
      description: 'Custom dashboards and business automation tools',
      services: ['Admin Dashboards', 'CRM Systems', 'Booking Systems']
    },
    {
      id: 'seo',
      title: 'SEO & Optimization',
      icon: '📈',
      description: 'Search optimization and performance tuning',
      services: ['SEO Packages', 'Site Speed Optimization', 'Analytics Setup']
    },
    {
      id: 'automation',
      title: 'Automation',
      icon: '🔗',
      description: 'Workflow automation and API integrations',
      services: ['API Integration', 'Workflow Automation', 'System Integration']
    }
  ]

  const businessTypes = [
    'Startup',
    'Restaurant',
    'Creator',
    'Agency',
    'Clinic',
    'Local business',
    'Personal brand'
  ]

  const budgetRanges = [
    { label: '<₹5,000', value: '<5k' },
    { label: '₹5k–20k', value: '5k-20k' },
    { label: '₹20k–50k', value: '20k-50k' },
    { label: '₹50k+', value: '50k+' }
  ]

  const goals = [
    'Lead generation',
    'Sales',
    'Followers',
    'Website traffic',
    'Branding',
    'Automation'
  ]

  const handleServiceSelect = (service) => {
    // Add service to selected services
    if (!leadData.selectedServices.includes(service.title)) {
      toggleService(service.title)
    }
    setSelectedService(service)
    setStep(1)
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Move to next phase
      setSelectedService(null)
      setStep(1)
    }
  }

  const handleProceed = () => {
    setSelectedService(null)
    const element = document.getElementById('package-matcher')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gray-900 overflow-hidden" id="service-explorer">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tell us what you <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">need</span>
          </h2>
          <p className="text-gray-400">Select your service, and we'll recommend the perfect package for your goals</p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              className="group relative text-left"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all" />
              <div className="relative bg-gray-800/50 border border-gray-700 group-hover:border-purple-500 rounded-xl p-6 transition-all h-full flex flex-col">
                <div className="mb-3">
                  <EmojiIcon emoji={service.icon} size="2em" color="white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 flex-grow">{service.description}</p>
                <div className="mt-4 text-purple-400 flex items-center gap-2">
                  <span className="text-xs font-semibold">SELECT</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Modal for Details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg z-10 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Progress Bar */}
                <div className="bg-gray-800 h-1">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-8">
                  {/* Step 1: Service Confirmation */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key="step1"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h3>
                      <p className="text-gray-400 mb-6">{selectedService.description}</p>
                      
                      <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Services Included:</h4>
                        <ul className="space-y-2">
                          {selectedService.services.map((svc, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center gap-2">
                              <span className="text-purple-400">✓</span> {svc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all"
                      >
                        Continue to Next Step
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Business Type */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key="step2"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">What's your business type?</h3>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {businessTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => updateLeadFields({ businessType: type })}
                            className={`p-3 rounded-lg font-semibold transition-all ${
                              leadData.businessType === type
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={handleNext}
                        disabled={!leadData.businessType}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50"
                      >
                        Next
                      </button>
                    </motion.div>
                  )}

                  {/* Step 3: Budget */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key="step3"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">What's your budget?</h3>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {budgetRanges.map((range) => (
                          <button
                            key={range.value}
                            onClick={() => updateLeadFields({ budget: range.value })}
                            className={`p-3 rounded-lg font-semibold transition-all ${
                              leadData.budget === range.value
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={handleNext}
                        disabled={!leadData.budget}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50"
                      >
                        Next
                      </button>
                    </motion.div>
                  )}

                  {/* Step 4: Goals */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key="step5"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">What are your goals?</h3>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {goals.map((goal) => (
                          <button
                            key={goal}
                            onClick={() => toggleGoal(goal)}
                            className={`p-3 rounded-lg font-semibold transition-all ${
                              leadData.goals.includes(goal)
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={handleProceed}
                        disabled={leadData.goals.length === 0}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50"
                      >
                        See Your Package Recommendation
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
