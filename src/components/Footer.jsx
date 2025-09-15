import { MessageCircle, Instagram, Mail, Zap, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-12 bg-gradient-to-br from-macflix-textdark to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Logo className="w-48 h-48 sm:w-56 sm:h-56" variant='footer' />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MacFlix
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
              Where Creativity Meets Precision - Your trusted partner for all creative design solutions.
            </p>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-center sm:justify-start">
              <Zap size={20} className="mr-2 text-purple-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center sm:justify-start group">
                  <span>Services</span>
                  <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center sm:justify-start group">
                  <span>Portfolio</span>
                  <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center sm:justify-start group">
                  <span>Testimonials</span>
                  <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center sm:justify-start group">
                  <span>Contact</span>
                  <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <motion.a 
                href="https://wa.me/918780364562" 
                className="bg-[#25D366] p-3 rounded-xl hover:bg-[#22BC5C] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 fill-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com/mac_flix" 
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={24} className="text-pink-400" />
              </motion.a>
              <motion.a 
                href="mailto:yashmachhi1408@gmail.com" 
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={24} className="text-purple-400" />
              </motion.a>
            </div>
            <div className="mt-8">
              <p className="text-white/70 mb-1">© 2025 MacFlix</p>
              <p className="text-white/50 text-sm">Crafted with ❤️ and Precision</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-white/70">
                <span className="block text-white font-medium mb-1">Email</span>
                yashmachhi1408@gmail.com
              </p>
              <p className="text-white/70">
                <span className="block text-white font-medium mb-1">WhatsApp</span>
                +91 8780364562
              </p>
              <p className="text-white/70">
                <span className="block text-white font-medium mb-1">Instagram</span>
                @mac_flix
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 sm:mb-0">
              All rights reserved. MacFlix - Where Creativity Meets Precision
            </p>
            <motion.button
              onClick={scrollToTop}
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}