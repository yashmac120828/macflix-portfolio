import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Users, Award, Clock } from 'lucide-react'
import Logo from './Logo'
import { HeroShimmer } from './ShimmerLoader'

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800) // 1.8 seconds loading simulation
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <HeroShimmer />
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-macflix-gradient py-16 sm:py-20" id="home">
      {/* Animated Background Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 hidden sm:block">
        <motion.div 
          className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-white/10 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          {/* Fixed Logo Container - Responsive sizes */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
            <Logo variant="hero" className="scale-100" />
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight flex items-center justify-center gap-0 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Mac Text */}
          <motion.span 
            className="font-[Orbitron] tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.span
              className="absolute -inset-1 bg-white/20 blur-sm rounded-lg"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Mac
          </motion.span>

          {/* Flix Text */}
          <motion.span 
            className="font-[Righteous] relative"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.span
              className="absolute -inset-1 bg-yellow-300/20 blur-sm rounded-lg"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent
                           drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Flix
            </span>
          </motion.span>

          {/* Background Effect */}
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-transparent to-yellow-500/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Where Creativity Meets Precision
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-white/80 max-w-3xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Transform your vision into stunning visuals with our professional design and video editing services. 
          From logos to Instagram reels, we craft content that captivates and converts.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="https://wa.me/918780364562"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white font-bold rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Let's Work Together</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <motion.a
            href="#portfolio"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white hover:text-macflix-primary transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} />
            <span>View Our Work</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, number: "50+", label: "Happy Clients" },
            { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, number: "10+", label: "Projects Done" },
            { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />, number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center px-2 sm:px-4">
              <div className="flex justify-center mb-2 sm:mb-4 text-yellow-300">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}