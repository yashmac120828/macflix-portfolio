import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Instagram, 
  Zap, 
  ArrowRight,
  Download,
  X,
  QrCode,
  Eye
} from 'lucide-react'
import { useState } from 'react'
import logo from "../assets/logo.png"

export default function Contact() {
  const [qrOverlay, setQrOverlay] = useState(null)

  const generateQRCode = (data, size = 200) => {
    // Simple QR code pattern generator (placeholder)
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&bgcolor=ffffff&color=000000`
  }

  const downloadBusinessCard = () => {
    // Create business card design and download
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    // Set canvas size (16:9 ratio for better visibility)
    canvas.width = 1200
    canvas.height = 675
    
    // Create main background
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Add purple gradient overlay
    const overlay = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    overlay.addColorStop(0, 'rgba(88, 28, 135, 0.2)') // from-purple-900/20
    overlay.addColorStop(1, 'rgba(219, 39, 119, 0.2)') // to-pink-900/20
    ctx.fillStyle = overlay
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Create and load logo
    const logoImg = new Image()
    logoImg.src = logo
    
    logoImg.onload = () => {
      // Add logo with proper scaling
      const logoSize = 120
      const padding = 60
      ctx.drawImage(logoImg, padding, padding, logoSize, logoSize)
      
      // Add company name with gradient
      const gradient = ctx.createLinearGradient(padding + logoSize + 20, 0, padding + logoSize + 400, 0)
      gradient.addColorStop(0, '#A78BFA') // purple-400
      gradient.addColorStop(1, '#F472B6') // pink-400
      ctx.fillStyle = gradient
      ctx.font = 'bold 72px Arial'
      ctx.fillText('MacFlix', padding + logoSize + 20, padding + 70)
      
      // Add tagline
      ctx.font = '32px Arial'
      ctx.fillStyle = 'rgba(209, 213, 219, 0.8)' // text-gray-300
      ctx.fillText('Where Creativity Meets Precision', padding + logoSize + 20, padding + 120)
      
      // Add divider
      const dividerY = 220
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(padding, dividerY)
      ctx.lineTo(canvas.width - padding, dividerY)
      ctx.stroke()
      
      // Contact Info Section
      ctx.font = 'bold 36px Arial'
      ctx.fillStyle = '#A78BFA' // purple-400
      ctx.fillText('Contact Info', padding, dividerY + 60)
      
      ctx.font = '28px Arial'
      ctx.fillStyle = 'rgba(209, 213, 219, 0.8)' // text-gray-300
      ctx.fillText('Email: yashmachhi1408@gmail.com', padding, dividerY + 120)
      ctx.fillText('Phone: +91 8780364562', padding, dividerY + 170)
      ctx.fillText('Instagram: @mac_flix', padding, dividerY + 220)
      
      // Services Section
      ctx.font = 'bold 36px Arial'
      ctx.fillStyle = '#F472B6' // pink-400
      ctx.fillText('Services', canvas.width/2 + 50, dividerY + 60)
      
      const services = [
        '• Logo Design',
        '• Banner Design',
        '• Video Editing',
        '• Instagram Reels',
        '• Event Cards'
      ]
      
      ctx.font = '28px Arial'
      ctx.fillStyle = 'rgba(209, 213, 219, 0.8)' // text-gray-300
      services.forEach((service, index) => {
        ctx.fillText(service, canvas.width/2 + 50, dividerY + 120 + (index * 50))
      })
      
      // Add decorative corner elements
      const cornerSize = 40
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 2
      
      // Top left corner
      ctx.beginPath()
      ctx.moveTo(30, 30)
      ctx.lineTo(30, 30 + cornerSize)
      ctx.moveTo(30, 30)
      ctx.lineTo(30 + cornerSize, 30)
      ctx.stroke()
      
      // Top right corner
      ctx.beginPath()
      ctx.moveTo(canvas.width - 30, 30)
      ctx.lineTo(canvas.width - 30 - cornerSize, 30)
      ctx.moveTo(canvas.width - 30, 30)
      ctx.lineTo(canvas.width - 30, 30 + cornerSize)
      ctx.stroke()
      
      // Bottom left corner
      ctx.beginPath()
      ctx.moveTo(30, canvas.height - 30)
      ctx.lineTo(30, canvas.height - 30 - cornerSize)
      ctx.moveTo(30, canvas.height - 30)
      ctx.lineTo(30 + cornerSize, canvas.height - 30)
      ctx.stroke()
      
      // Bottom right corner
      ctx.beginPath()
      ctx.moveTo(canvas.width - 30, canvas.height - 30)
      ctx.lineTo(canvas.width - 30 - cornerSize, canvas.height - 30)
      ctx.moveTo(canvas.width - 30, canvas.height - 30)
      ctx.lineTo(canvas.width - 30, canvas.height - 30 - cornerSize)
      ctx.stroke()
      
      // Download the image
      const link = document.createElement('a')
      link.download = 'MacFlix-Business-Card.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }

  const openQROverlay = (type) => {
    setQrOverlay(type)
  }

  const closeQROverlay = () => {
    setQrOverlay(null)
  }

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white relative" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl">
              <Zap size={28} className="text-white sm:w-8 sm:h-8" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Let's <span className="text-yellow-300">Connect</span>
          </h2>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto px-4">
            Ready to transform your ideas into stunning visuals? Reach out and let's create something amazing together!
          </p>
        </motion.div>

        {/* MacFlix Business Card */}
        <motion.div
          className="mb-8 sm:mb-16 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black rounded-2xl sm:rounded-3xl p-4 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 mb-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Logo image */}
                  <img src={logo} alt="MacFlix Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl" />
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MacFlix</h3>
                    <p className="text-gray-300 text-base sm:text-lg">Where Creativity Meets Precision</p>
                  </div>
                </div>
                <motion.button
                  onClick={downloadBusinessCard}
                  className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span>Download Card</span>
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
  <h4 className="text-xl font-bold mb-4 text-macflix-purple">Contact Info</h4>
  <div className="space-y-3 text-macflix-textdark">
    {/* Email */}
    <div className="flex items-center space-x-3 text-gray-300">
     <svg 
  xmlns="http://www.w3.org/2000/svg" 
  className="w-6 h-6 text-macflix-primary" 
  fill="none" 
  viewBox="0 0 24 24" 
  stroke="currentColor" 
  strokeWidth="2"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M3 6l9 7 9-7" 
  />
</svg>

      <p>yashmachhi1408@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-3 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" 
           className="w-6 h-6 text-macflix-secondary" 
           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.26 3.78a1 1 0 01-.27 1.08l-2.2 2.2a11.05 11.05 0 005.22 5.22l2.2-2.2a1 1 0 011.08-.27l3.78 1.26a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.27 21 3 14.73 3 7V6a1 1 0 011-1z" />
      </svg>
      <p>+91 8780364562</p>
    </div>

    {/* Instagram */}
    <div className="flex items-center space-x-3 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" 
           className="w-6 h-6 text-macflix-accent" 
           viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
      </svg>
      <p>@mac_flix</p>
    </div>
  </div>
</div>

                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-pink-400">Services</h4>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <p>• Logo Design</p>
                    <p>• Banner Design</p>
                    <p>• Video Editing</p>
                    <p>• Instagram Reels</p>
                    <p>• Event Cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* QR Codes Section */}
        <motion.div
          className="mb-8 sm:mb-16 max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Quick Connect</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <motion.div
              className="text-center w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                onClick={() => openQROverlay('whatsapp')}
                className="flex flex-col items-center p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl hover:bg-white/20 transition-all duration-300 group w-full"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-3 sm:p-4 bg-[#25D366] rounded-xl sm:rounded-2xl mb-2 sm:mb-3 group-hover:bg-[#22BC5C] transition-colors duration-300">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <QrCode size={18} className="text-white/70 mb-2 sm:w-5 sm:h-5" />
                <span className="text-white font-semibold text-base sm:text-lg">WhatsApp</span>
                <span className="text-white/70 text-xs sm:text-sm mt-1">Tap To Scan</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              className="text-center w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                onClick={() => openQROverlay('instagram')}
                className="flex flex-col items-center p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl hover:bg-white/20 transition-all duration-300 group w-full"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-3 sm:p-4 bg-pink-600 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 group-hover:bg-pink-500 transition-colors duration-300">
                  <Instagram size={28} className="text-white sm:w-8 sm:h-8" />
                </div>
                <QrCode size={18} className="text-white/70 mb-2 sm:w-5 sm:h-5" />
                <span className="text-white font-semibold text-base sm:text-lg">Instagram</span>
                <span className="text-white/70 text-xs sm:text-sm mt-1">Tap To Scan</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <div className="mb-8 sm:mb-16 px-4">
          {/* Email Contact Card */}
          <motion.div
            className="max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Email</h3>
            <p className="text-white/80 mb-4 text-sm sm:text-base">yashmachhi1408@gmail.com</p>
            
            <motion.a
              href="mailto:yashmachhi1408@gmail.com"
              className="flex items-center justify-center text-yellow-300 hover:translate-x-2 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold mr-2 text-sm sm:text-base">Send Email</span>
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-12 mx-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Start Your Project Today</h3>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their brands with MacFlix. 
            Your creative journey starts with a simple message.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <motion.a
              href="https://wa.me/918780364562"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white font-bold rounded-xl sm:rounded-2xl hover:bg-[#22BC5C] transition-colors duration-300 flex items-center justify-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm sm:text-base">WhatsApp Now</span>
            </motion.a>
            <motion.a
              href="mailto:yashmachhi1408@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Send Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* QR Code Overlay */}
      <AnimatePresence>
        {qrOverlay && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQROverlay}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeQROverlay}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
              
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  qrOverlay === 'whatsapp' ? 'bg-green-100' : 'bg-pink-100'
                }`}>
                  {qrOverlay === 'whatsapp' ? 
                    <MessageCircle size={32} className="text-green-600" /> : 
                    <Instagram size={32} className="text-pink-600" />
                  }
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {qrOverlay === 'whatsapp' ? 'WhatsApp QR Code' : 'Instagram QR Code'}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {qrOverlay === 'whatsapp' ? 
                    'Scan to start a WhatsApp conversation' : 
                    'Scan to follow @mac_flix on Instagram'
                  }
                </p>
                
                <div className="bg-white p-4 rounded-2xl border-2 border-gray-200 mb-6">
                  <img 
                    src={generateQRCode(
                      qrOverlay === 'whatsapp' ? 
                        'https://wa.me/918780364562' : 
                        'https://www.instagram.com/mac__flix/'
                    )} 
                    alt={`${qrOverlay} QR Code`}
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={() => {
                      const link = qrOverlay === 'whatsapp' ? 
                        'https://wa.me/918780364562' : 
                        'https://www.instagram.com/mac__flix/'
                      window.open(link, '_blank')
                    }}
                    className={`px-6 py-3 rounded-2xl text-white font-bold transition-colors duration-300 ${
                      qrOverlay === 'whatsapp' ? 
                        'bg-green-600 hover:bg-green-700' : 
                        'bg-pink-600 hover:bg-pink-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {qrOverlay === 'whatsapp' ? 'Open WhatsApp' : 'Open Instagram'}
                  </motion.button>
                  
                  <button
                    onClick={closeQROverlay}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}