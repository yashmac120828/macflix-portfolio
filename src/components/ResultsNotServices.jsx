import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { EmojiIcon } from './IconMap'

export default function ResultsNotServices() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const results = [
    {
      problem: "We don't sell posts.",
      solution: "We build brand presence.",
      description: "Every design we create is a strategic asset that compounds your brand value over time.",
      emoji: "📱",
      color: "from-blue-600 to-cyan-600"
    },
    {
      problem: "We don't sell websites.",
      solution: "We build digital businesses.",
      description: "Your site isn't just beautiful—it's a revenue-generating machine with conversion optimization baked in.",
      emoji: "🌐",
      color: "from-purple-600 to-pink-600"
    },
    {
      problem: "We don't edit reels.",
      solution: "We improve attention.",
      description: "Every second counts. We engineer videos that stop scrolls, grab eyeballs, and drive action.",
      emoji: "🎬",
      color: "from-orange-600 to-red-600"
    }
  ]

  return (
    <section className="py-20 bg-black overflow-hidden" id="results">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/50 mb-6">
            <Zap size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">OUR PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Results Over <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We measure success by your growth metrics, not our deliverable count.
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${result.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-all duration-500`} />
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 group-hover:border-gray-700 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col`}>
                {/* Icon */}
                <div className="mb-6">
                  <EmojiIcon emoji={result.emoji} size="3em" color="white" />
                </div>

                {/* Problem Statement */}
                <h3 className="text-xl font-bold text-gray-300 mb-3">
                  {result.problem}
                </h3>

                {/* Arrow */}
                <div className="flex items-center gap-2 my-4">
                  <div className="h-0.5 bg-gradient-to-r from-gray-700 to-transparent flex-1" />
                  <ArrowRight size={20} className="text-purple-400" />
                </div>

                {/* Solution Statement */}
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  {result.solution}
                </h4>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10 rounded-2xl blur-3xl" />
          
          <div className="relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-md border border-gray-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your brand?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and build a strategy that actually drives growth.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('service-explorer')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
            >
              Explore Our Solution
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
