import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, MessageCircle, ArrowRight, Quote } from 'lucide-react'

const TestimonialPopup = ({ isVisible, onClose }) => {
  const handleRedirectToTestimonials = () => {
    // Close the popup
    onClose()
    
    // Smooth scroll to testimonials section
    setTimeout(() => {
      const testimonialsSection = document.getElementById('testimonials')
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 300)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors bg-white/80 backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Card Content */}
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            
            {/* Content Overlay */}
            <div className="relative p-8 text-center text-white">
              {/* MacFlix Logo */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="MacFlix Logo" 
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback if logo image doesn't exist
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'block'
                    }}
                  />
                  <div className="w-10 h-10 bg-white/30 rounded-lg hidden items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">MacFlix</h2>
              </div>

              {/* Review Stars */}
              <div className="mb-6">
                <div className="flex justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-6 h-6 text-yellow-300 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white/90 text-sm">Rated 5/5 by our clients</p>
              </div>

              {/* Message */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-white/70 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Love Our Work?</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Share your experience and help others discover our amazing services
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRedirectToTestimonials}
                className="w-full bg-white text-gray-900 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                Leave a Review
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Footer Text */}
              <p className="text-white/70 text-xs mt-4">
                Click to visit our testimonials section
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TestimonialPopup