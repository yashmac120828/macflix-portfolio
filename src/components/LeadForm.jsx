import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { LeadContext } from '../context/LeadContext'
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { apiCall } from '../utils/api'
import { EmojiIcon } from './IconMap'

export default function LeadForm() {
  const { leadData, updateLeadFields } = useContext(LeadContext)
  const [formStep, setFormStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  // Validation function
  const validateField = (name, value) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else {
          delete newErrors.name
        }
        break

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Invalid email address'
        } else {
          delete newErrors.email
        }
        break

      case 'phone':
        const phoneRegex = /^\d{10}$/
        if (!value.trim()) {
          newErrors.phone = 'Phone is required'
        } else if (!phoneRegex.test(value.replace(/\D/g, ''))) {
          newErrors.phone = 'Invalid phone number (10 digits)'
        } else {
          delete newErrors.phone
        }
        break

      case 'whatsapp':
        const whatsappRegex = /^\d{10}$/
        if (!value.trim()) {
          newErrors.whatsapp = 'WhatsApp number is required'
        } else if (!whatsappRegex.test(value.replace(/\D/g, ''))) {
          newErrors.whatsapp = 'Invalid WhatsApp number (10 digits)'
        } else {
          delete newErrors.whatsapp
        }
        break

      case 'businessName':
        if (!value.trim()) {
          newErrors.businessName = 'Business name is required'
        } else {
          delete newErrors.businessName
        }
        break

      case 'requirements':
        if (!value.trim()) {
          newErrors.requirements = 'Requirements are required'
        } else if (value.length < 10) {
          newErrors.requirements = 'Please describe your requirements in detail'
        } else {
          delete newErrors.requirements
        }
        break

      default:
        break
    }

    setErrors(newErrors)
    return !Object.keys(newErrors).length
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateLeadFields({ [name]: value })
    validateField(name, value)
  }

  const canProceedStep1 = leadData.name && leadData.email && leadData.phone && !errors.name && !errors.email && !errors.phone

  const canProceedStep2 = leadData.whatsapp && leadData.businessName && leadData.requirements && !errors.whatsapp && !errors.businessName && !errors.requirements

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate all fields
    const allFieldsValid = 
      canProceedStep1 && 
      canProceedStep2 &&
      validateField('name', leadData.name) &&
      validateField('email', leadData.email) &&
      validateField('phone', leadData.phone) &&
      validateField('whatsapp', leadData.whatsapp) &&
      validateField('businessName', leadData.businessName) &&
      validateField('requirements', leadData.requirements)

    if (!allFieldsValid) return

    setIsSubmitting(true)

    try {
      // Send to backend
      const response = await apiCall.createLead({
        ...leadData,
        phone: leadData.phone.replace(/\D/g, ''),
        whatsapp: leadData.whatsapp.replace(/\D/g, '')
      })

      if (response.success) {
        setSubmitSuccess(true)
        // Scroll to success message
        setTimeout(() => {
          const element = document.getElementById('consultation-booking')
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 1000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: error.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <section className="py-20 bg-gray-900 overflow-hidden" id="lead-form">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600/20 rounded-full border border-green-500/50">
                <CheckCircle size={48} className="text-green-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Thank you! We've received your details.
            </h3>
            <p className="text-gray-400 mb-8">
              We'll generate your customized quotation and send it to your email shortly. 
              You'll also receive a WhatsApp message from us to discuss your project.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-6 text-left mb-8">
              <h4 className="font-semibold text-white mb-4">What happens next:</h4>
              <ol className="space-y-3">
                {[
                  { icon: '📄', label: 'Auto-generated quotation PDF sent to your email' },
                  { icon: '💬', label: 'WhatsApp message with next steps' },
                  { icon: '📞', label: 'Consultation call scheduling' },
                  { icon: '🚀', label: 'Project kickoff within 24-48 hours' }
                ].map((step, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-3">
                    <EmojiIcon emoji={step.icon} size="1.2em" color="white" />
                    {step.label}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden" id="lead-form">
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
            Tell us more about your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">project</span>
          </h2>
          <p className="text-gray-400">We'll create a custom quotation based on your needs</p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-400">Step {formStep} of 2</span>
                <span className="text-sm font-semibold text-purple-400">{Math.round((formStep / 2) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${(formStep / 2) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Step 1: Contact Information */}
            {formStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={leadData.name}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('name', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={leadData.email}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={leadData.phone}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('phone', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    disabled={!canProceedStep1}
                    className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Step 2
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {formStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <MessageCircle className="inline mr-2" size={16} />
                      WhatsApp Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={leadData.whatsapp}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('whatsapp', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.whatsapp ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.whatsapp && (
                      <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Business/Brand Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={leadData.businessName}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('businessName', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.businessName ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="Your business name"
                    />
                    {errors.businessName && (
                      <p className="text-red-400 text-sm mt-1">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Requirements *
                    </label>
                    <textarea
                      name="requirements"
                      value={leadData.requirements}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField('requirements', e.target.value)}
                      rows="4"
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none ${
                        errors.requirements ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="Describe your project requirements in detail..."
                    />
                    {errors.requirements && (
                      <p className="text-red-400 text-sm mt-1">{errors.requirements}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {errors.submit && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                      <p className="text-red-400">{errors.submit}</p>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="flex gap-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="flex-1 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canProceedStep2 || isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⌛</span> Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Get My Quotation
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.form>

        {/* Trust Section */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { emoji: '🔒', text: 'Your data is secure' },
            { emoji: '📧', text: 'Quotation within 1 hour' },
            { emoji: '💬', text: 'WhatsApp follow-up' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <EmojiIcon emoji={item.emoji} size="1.5em" color="white" className="mb-2 block" />
              <p className="text-sm text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
