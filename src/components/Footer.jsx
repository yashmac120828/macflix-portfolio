import { MessageCircle, Instagram, Mail } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-12 bg-macflix-textdark text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo className="mb-4" />
            <p className="text-white/70 max-w-md">
              Where Creativity Meets Precision - Your trusted partner for all creative design solutions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/918780364562" 
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="https://instagram.com/mac_flix" 
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:yashmachhi1408@gmail.com" 
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70">© 2025 MacFlix</p>
              <p className="text-white/50 text-sm">Designed with ❤️</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            All rights reserved. MacFlix - Where Creativity Meets Precision
          </p>
        </div>
      </div>
    </footer>
  )
}