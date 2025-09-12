import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ArrowRight, Play, Users, Award, Clock } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-macflix-gradient" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
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
          {/* Fixed Logo Container - Much smaller and simpler */}
          <div className="w-24 h-24 mx-auto">
            <Logo variant="hero" className="scale-100" />
            
          </div>
        </motion.div>
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Mac<span className="text-yellow-300">Flix</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-light mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Where Creativity Meets Precision
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Transform your vision into stunning visuals with our professional design and video editing services. 
          From logos to Instagram reels, we craft content that captivates and converts.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="https://wa.me/918780364562"
            className="group px-8 py-4 bg-white text-macflix-primary font-bold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center space-x-3"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            <span>Let's Work Together</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>

          <motion.a
            href="#portfolio"
            className="group px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-macflix-primary transition-all duration-300 flex items-center space-x-3"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} />
            <span>View Our Work</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { icon: <Users size={32} />, number: "50+", label: "Happy Clients" },
            { icon: <Award size={32} />, number: "10+", label: "Projects Done" },
            { icon: <Clock size={32} />, number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-yellow-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}