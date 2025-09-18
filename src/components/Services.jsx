import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { ServiceCardShimmer } from './ShimmerLoader'

import { 
  
  Video, 
  Image, 
  Camera, 
  Instagram, 
  Youtube, 
  CreditCard, 
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react'

export default function Services() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading for services
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading simulation
    
    return () => clearTimeout(timer)
  }, [])

  const services = [
    
    { 
      icon: <Image size={40} />, 
      title: "Banner Designing", 
      description: "Eye-catching banners for all your marketing and promotional needs",
      color: "from-pink-600 to-red-600"
    },
    { 
      icon: <Video size={40} />, 
      title: "Video Editing", 
      description: "Professional video editing that brings your stories to life",
      color: "from-red-600 to-orange-600"
    },
    { 
      icon: <Camera size={40} />, 
      title: "Photo Editing", 
      description: "Transform your photos with professional retouching and enhancement",
      color: "from-orange-600 to-yellow-600"
    },
    { 
      icon: <Instagram size={40} />, 
      title: "Instagram Reels Editing", 
      description: "Viral-worthy reels that boost your social media presence",
      color: "from-yellow-600 to-green-600"
    },
    { 
      icon: <Youtube size={40} />, 
      title: "YouTube Content", 
      description: "Complete YouTube solutions from thumbnails to video editing",
      color: "from-green-600 to-blue-600"
    },
    { 
      icon: <CreditCard size={40} />, 
      title: "Visiting Cards", 
      description: "Professional business cards that make a lasting first impression",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      icon: <Calendar size={40} />, 
      title: "Event Cards", 
      description: "Beautiful invitations and cards for all your special occasions",
      color: "from-indigo-600 to-purple-600"
    },
  ]

  // Duplicate services for seamless looping
  const duplicatedServices = [...services, ...services, ...services]

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl">
              <Sparkles size={24} className="text-white sm:w-8 sm:h-8" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-800">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            We offer comprehensive creative solutions to elevate your brand and captivate your audience
          </p>
        </motion.div>

        {/* Film Roll Container - 2 Rows - Only visible on larger screens */}
        <div className="relative hidden lg:block">
          {/* Scrolling Services - Row 1 (Left to Right) */}
          <div className="py-8 relative overflow-hidden bg-gradient-to-b from-white/10 to-white/5">
            <motion.div
              className="flex space-x-6 mb-6"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
            >
              {duplicatedServices.slice(0, 12).map((service, index) => (
              <motion.div
              key={`row1-${index}`}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-shrink-0 w-72 border border-white/20"
              whileHover={{ scale: 1.02 }}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* MacFlix Logo */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-90">
                <img src={logo} alt="MacFlix" className="w-full h-full object-contain" />
              </div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {React.cloneElement(service.icon, { size: 32 })}
              </div>                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  
                </motion.div>
              ))}
            </motion.div>

            {/* Scrolling Services - Row 2 (Right to Left) */}
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [-1920, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
            >
              {duplicatedServices.slice(12, 24).map((service, index) => (
              <motion.div
              key={`row2-${index}`}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-shrink-0 w-72 border border-white/20"
              whileHover={{ scale: 1.02 }}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* MacFlix Logo */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-90">
                <img src={logo} alt="MacFlix" className="w-full h-full object-contain" />
              </div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {React.cloneElement(service.icon, { size: 32 })}
              </div>                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                 
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Responsive Grid for Mobile and Tablet */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {isLoading ? (
            // Show shimmer loading cards
            [...Array(8)].map((_, index) => (
              <ServiceCardShimmer key={`shimmer-${index}`} />
            ))
          ) : (
            services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* MacFlix Logo */}
              <div className="absolute top-4 right-4 w-10 sm:w-12 h-10 sm:h-12 opacity-90">
                <img src={logo} alt="MacFlix" className="w-full h-full object-contain" />
              </div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

             
            </motion.div>
            ))
          )}
        </div>

        
      </div>
    </section>
  )
}