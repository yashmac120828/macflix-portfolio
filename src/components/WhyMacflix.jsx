import { motion } from 'framer-motion'
import { Check, X, Sparkles } from 'lucide-react'
import { EmojiIcon } from './IconMap'

export default function WhyMacflix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const localMarketPoints = [
    { text: 'Generic templates', included: false },
    { text: 'Slow response', included: false },
    { text: 'Limited revisions', included: false },
    { text: 'No strategy', included: false },
    { text: 'No AI workflow', included: false },
    { text: 'Basic support', included: false }
  ]

  const macflixPoints = [
    { text: 'Brand-focused execution', included: true },
    { text: 'Premium editing/design systems', included: true },
    { text: 'AI-powered workflows', included: true },
    { text: 'Consultation support', included: true },
    { text: 'Multiple revisions', included: true },
    { text: 'Growth mindset', included: true },
    { text: 'Cross-platform expertise', included: true },
    { text: 'Scalable systems', included: true }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" id="why-macflix">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Sparkles size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why brands choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Macflix</span> over ordinary freelancers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We don't just deliver content. We build sustainable brand growth systems.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Local Market Card */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600 transition-all">
              <h3 className="text-2xl font-bold text-gray-300 mb-6">Local Market</h3>
              <div className="space-y-4">
                {localMarketPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Macflix Card */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Macflix</h3>
                <div className="px-3 py-1 bg-purple-600/30 rounded-full">
                  <span className="text-xs font-semibold text-purple-300">PREMIUM</span>
                </div>
              </div>
              <div className="space-y-4">
                {macflixPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-100">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Difference Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { emoji: '⚡', title: 'AI-Powered', desc: 'Automation that scales your output 10x' },
            { emoji: '🎯', title: 'Strategy-Driven', desc: 'Every design serves your growth goals' },
            { emoji: '📈', title: 'Results-Focused', desc: 'We measure by your success metrics' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all"
            >
              <div className="mb-3 flex justify-center">
                <EmojiIcon emoji={item.emoji} size="1.5em" color="white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
