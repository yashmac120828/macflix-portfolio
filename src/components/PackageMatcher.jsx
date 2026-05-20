import { motion } from 'framer-motion'
import { useContext, useMemo } from 'react'
import { LeadContext } from '../context/LeadContext'
import { Check, ArrowRight, Zap } from 'lucide-react'

export default function PackageMatcher() {
  const { leadData, updateLeadFields } = useContext(LeadContext)

  // Pricing database
  const pricingEngine = {
    'Design & Branding': {
      'Brand Identity Kits': {
        Standard: { price: '₹2,999', range: '₹2,999', timeline: '3 days' },
        Creative: { price: '₹5,999', range: '₹5,999–7,999', timeline: '5 days' },
        Premium: { price: '₹9,999', range: '₹9,999+', timeline: '7 days' }
      }
    },
    'Video Editing': {
      'Reels': {
        Standard: { price: '₹499', range: '₹499', timeline: '24 hrs' },
        Creative: { price: '₹999', range: '₹999–1,299', timeline: '72 hrs' },
        Premium: { price: '₹1,499', range: '₹1,499+', timeline: '5 days' }
      },
      'YouTube': {
        Standard: { price: '₹499', range: '₹499–5 min', timeline: '2 days' },
        Creative: { price: '₹999', range: '₹999–10 min', timeline: '4 days' },
        Premium: { price: '₹1,499', range: '₹1,499–20 min', timeline: '5 days' }
      }
    },
    'Websites': {
      'Portfolio': {
        Standard: { price: '₹7,999', range: '₹7,999', timeline: '5-7 days' },
        Creative: { price: '₹14,999', range: '₹14,999', timeline: '10-14 days' },
        Premium: { price: '₹24,999', range: '₹24,999', timeline: '15-20 days' }
      },
      'Business': {
        Standard: { price: '₹14,999', range: '₹14,999', timeline: '7-10 days' },
        Creative: { price: '₹29,999', range: '₹29,999', timeline: '14-18 days' },
        Premium: { price: '₹49,999', range: '₹49,999', timeline: '20-30 days' }
      }
    },
    'AI Services': {
      'AI Creative': {
        Standard: { price: '₹10,999', range: '₹10,999', timeline: '2-4 days' },
        Creative: { price: '₹19,999', range: '₹19,999', timeline: '5-7 days' },
        Premium: { price: '₹39,999', range: '₹39,999', timeline: '7-12 days' }
      }
    },
    'Social Media Management': {
      'Instagram': {
        Standard: { price: '₹5,999/mo', range: '₹5,999', timeline: 'Monthly' },
        Creative: { price: '₹11,999/mo', range: '₹11,999', timeline: 'Monthly' },
        Premium: { price: '₹21,999/mo', range: '₹21,999', timeline: 'Monthly' }
      }
    }
  }

  // Recommend package based on selections
  const recommendedPackage = useMemo(() => {
    if (!leadData.businessType || !leadData.budget) {
      return null
    }

    let tier = 'Standard'
    const budget = leadData.budget

    if (budget === '20k-50k' || budget === '50k+') {
      tier = 'Premium'
    } else if (budget === '5k-20k') {
      tier = 'Creative'
    }

    return {
      tier,
      name: `${tier} Package`,
      description: getPriceDescription(tier),
      features: getPackageFeatures(tier)
    }
  }, [leadData.businessType, leadData.budget])

  function getPriceDescription(tier) {
    const descriptions = {
      Standard: 'Perfect for getting started with professional results',
      Creative: 'Best for growing businesses wanting advanced features',
      Premium: 'Enterprise-level solutions with full customization'
    }
    return descriptions[tier]
  }

  function getPackageFeatures(tier) {
    const features = {
      Standard: [
        'Single service delivery',
        'Basic customization',
        '1 revision round',
        '24-72 hour delivery',
        'Email support'
      ],
      Creative: [
        'Multiple service options',
        'Advanced customization',
        '2 revision rounds',
        'Priority delivery',
        'Dedicated support',
        'Strategy consultation'
      ],
      Premium: [
        'Full service integration',
        'Complete customization',
        '3+ revision rounds',
        'Fast delivery',
        'Priority 24/7 support',
        'Monthly strategy reviews',
        'Scalable solutions'
      ]
    }
    return features[tier]
  }

  const estimatePriceRange = (budget) => {
    const ranges = {
      '<5k': '₹2,999–5,999',
      '5k-20k': '₹7,999–20,000',
      '20k-50k': '₹24,999–50,000',
      '50k+': '₹50,000 and above'
    }
    return ranges[budget] || 'Custom pricing'
  }

  if (!leadData.businessType || !leadData.budget) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" id="package-matcher">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/50 mb-6">
            <Zap size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">RECOMMENDED JUST FOR YOU</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Your Perfect Package
          </h2>
          <p className="text-gray-400">Based on your needs, timeline, and budget</p>
        </motion.div>

        {/* Package Recommendation Card */}
        {recommendedPackage && (
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-red-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-purple-500/50 rounded-2xl overflow-hidden">
                {/* Header with tier badge */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {recommendedPackage.name}
                      </h3>
                      <p className="text-purple-100">{recommendedPackage.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                      <span className="text-white font-bold">{recommendedPackage.tier}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Pricing Info */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">ESTIMATED PRICE RANGE</p>
                      <p className="text-3xl font-bold text-white">
                        {estimatePriceRange(leadData.budget)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">TYPICAL TIMELINE</p>
                      <p className="text-3xl font-bold text-white">
                        {leadData.timeline || '1-2 weeks'}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-4">What's Included:</h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {recommendedPackage.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Profile Summary */}
                  <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 mb-4">YOUR PROFILE</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Business Type</p>
                        <p className="text-white font-semibold">{leadData.businessType}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Budget</p>
                        <p className="text-white font-semibold">{leadData.budget}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-1">Goals</p>
                        <p className="text-white font-semibold">{leadData.goals.slice(0, 2).join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const element = document.getElementById('lead-form')
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:shadow-xl hover:shadow-purple-600/50 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Exact Proposal</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '✓', text: 'No Hidden Charges' },
            { icon: '📧', text: 'Quick Response Time' },
            { icon: '🎯', text: 'Results-Focused' }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
            >
              <div className="text-2xl mb-2">{badge.icon}</div>
              <p className="text-gray-300 text-sm font-semibold">{badge.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
