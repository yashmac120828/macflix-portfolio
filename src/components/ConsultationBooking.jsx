import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, MessageCircle } from 'lucide-react'
import { apiCall } from '../utils/api'
import { EmojiIcon } from './IconMap'

export default function ConsultationBooking() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [isBooked, setIsBooked] = useState(false)
  const [name, setName] = useState('')

  // Generate available time slots (9 AM to 6 PM, every 30 mins)
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ]

  // Generate next 7 days
  const getNextDays = () => {
    const days = []
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      days.push(date)
    }
    return days
  }

  const nextDays = getNextDays()

  const handleBook = () => {
    if (selectedDate && selectedTime && name) {
      // Send booking to backend
      handleBookingSubmit()
    }
  }

  const handleBookingSubmit = async () => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          date: selectedDate,
          time: selectedTime,
          type: 'consultation'
        })
      })

      if (response.ok) {
        setIsBooked(true)
        // Generate WhatsApp message
        const whatsappMessage = `Hi! I've booked a consultation call with Macflix for ${selectedDate?.toLocaleDateString()} at ${selectedTime}. Looking forward to discussing my project!`
        const whatsappLink = `https://wa.me/918780364562?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappLink, '_blank')
      }
    } catch (error) {
      console.error('Booking error:', error)
    }
  }

  if (isBooked) {
    return (
      <section className="py-20 bg-black overflow-hidden" id="consultation-booking">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600/20 rounded-full border border-green-500/50">
                <Calendar size={48} className="text-green-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Consultation Booked! 🎉
            </h3>
            <p className="text-gray-400 mb-8">
              Your consultation call is confirmed. We'll see you on {selectedDate?.toLocaleDateString()} at {selectedTime}.
            </p>
            <div className="bg-purple-600/20 border border-purple-500/50 rounded-lg p-6 text-left mb-8">
              <h4 className="font-semibold text-white mb-4">What to expect:</h4>
              <ul className="space-y-3">
                {[
                  '📱 We\'ll call you on your WhatsApp',
                  '💼 Strategy discussion for your project',
                  '📊 Proposal presentation',
                  '🚀 Project timeline & next steps'
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-3">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" id="consultation-booking">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Book Your Free <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Consultation</span>
          </h2>
          <p className="text-gray-400">Let's discuss your project and create a winning strategy</p>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            {/* Your Name */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <label className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                <Calendar size={16} /> Select Date
              </label>
              <div className="grid grid-cols-4 gap-3">
                {nextDays.map((date, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg font-semibold transition-all text-center ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-xs opacity-75">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-lg">
                      {date.getDate()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <label className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Clock size={16} /> Select Time
                </label>
                <div className="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                  {timeSlots.map((time, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg font-semibold transition-all text-sm ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Selected Summary */}
            {selectedDate && selectedTime && name && (
              <motion.div
                className="mb-8 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm text-gray-300">
                  📅 <span className="font-semibold text-white">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span> at <span className="font-semibold text-white">{selectedTime}</span>
                </p>
              </motion.div>
            )}

            {/* CTA Button */}
            <button
              onClick={handleBook}
              disabled={!selectedDate || !selectedTime || !name}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Confirm Booking & Open WhatsApp
            </button>
          </div>

          {/* Benefits */}
          <motion.div
            className="mt-8 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { emoji: '✓', text: 'No charge' },
              { emoji: '⏱️', text: '30 mins call' },
              { emoji: '🚀', text: 'Action plan' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center p-4 bg-gray-800/30 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-2xl mb-2 flex justify-center">
                  <EmojiIcon emoji={item.emoji} size="1.5em" color="white" />
                </div>
                <p className="text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
