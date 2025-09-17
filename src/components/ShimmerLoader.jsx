import { motion } from 'framer-motion'

// Shimmer animation keyframes
const shimmerAnimation = {
  shimmer: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    }
  }
}

// Base shimmer component
export const ShimmerBase = ({ className = '', children }) => (
  <motion.div
    className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse ${className}`}
    style={{
      backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite linear'
    }}
    variants={shimmerAnimation}
    animate="shimmer"
  >
    {children}
  </motion.div>
)

// Portfolio video shimmer
export const VideoShimmer = ({ aspectRatio = 'aspect-square', height = 'h-[500px]' }) => (
  <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ${height} ${aspectRatio}`}>
    <div className="relative w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 flex items-center justify-center">
      {/* Video container shimmer */}
      <ShimmerBase className="aspect-[9/16] h-[85%] rounded-lg" />
      
      {/* Play button shimmer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ShimmerBase className="w-16 h-16 rounded-full" />
      </div>
    </div>
  </div>
)

// Portfolio image shimmer
export const ImageShimmer = ({ aspectRatio = 'aspect-square', height = 'h-[500px]' }) => (
  <ShimmerBase className={`rounded-2xl ${height} ${aspectRatio}`} />
)

// Service card shimmer
export const ServiceCardShimmer = () => (
  <div className="bg-white rounded-2xl p-8 shadow-xl">
    {/* Icon shimmer */}
    <ShimmerBase className="w-16 h-16 rounded-xl mb-6" />
    
    {/* Title shimmer */}
    <ShimmerBase className="h-6 w-3/4 rounded mb-4" />
    
    {/* Description shimmer */}
    <div className="space-y-2">
      <ShimmerBase className="h-4 w-full rounded" />
      <ShimmerBase className="h-4 w-5/6 rounded" />
      <ShimmerBase className="h-4 w-4/6 rounded" />
    </div>
  </div>
)

// Testimonial card shimmer
export const TestimonialShimmer = () => (
  <div className="bg-white rounded-2xl p-8 shadow-xl">
    {/* Top gradient bar */}
    <ShimmerBase className="h-1 w-full rounded mb-4" />
    
    {/* Stars shimmer */}
    <div className="flex items-center mb-4 space-x-1">
      {[...Array(5)].map((_, i) => (
        <ShimmerBase key={i} className="w-5 h-5 rounded" />
      ))}
      <ShimmerBase className="h-4 w-20 rounded ml-2" />
    </div>
    
    {/* Content shimmer */}
    <div className="space-y-2 mb-6">
      <ShimmerBase className="h-4 w-full rounded" />
      <ShimmerBase className="h-4 w-11/12 rounded" />
      <ShimmerBase className="h-4 w-4/5 rounded" />
      <ShimmerBase className="h-4 w-3/4 rounded" />
    </div>
    
    {/* User info shimmer */}
    <div className="flex items-center">
      <ShimmerBase className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-1 space-y-2">
        <ShimmerBase className="h-5 w-32 rounded" />
        <ShimmerBase className="h-4 w-24 rounded" />
      </div>
    </div>
  </div>
)

// Hero section shimmer
export const HeroShimmer = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
      {/* Main title shimmer */}
      <div className="space-y-4">
        <ShimmerBase className="h-12 w-3/4 mx-auto rounded" />
        <ShimmerBase className="h-12 w-1/2 mx-auto rounded" />
      </div>
      
      {/* Subtitle shimmer */}
      <div className="space-y-2 max-w-2xl mx-auto">
        <ShimmerBase className="h-6 w-full rounded" />
        <ShimmerBase className="h-6 w-5/6 mx-auto rounded" />
      </div>
      
      {/* Button shimmer */}
      <ShimmerBase className="h-14 w-48 mx-auto rounded-full" />
    </div>
  </div>
)

// Navigation shimmer
export const NavShimmer = () => (
  <div className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-xl">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo shimmer */}
        <ShimmerBase className="h-8 w-32 rounded" />
        
        {/* Navigation items shimmer */}
        <div className="hidden md:flex space-x-8">
          {[...Array(5)].map((_, i) => (
            <ShimmerBase key={i} className="h-6 w-16 rounded" />
          ))}
        </div>
        
        {/* Mobile menu button shimmer */}
        <ShimmerBase className="md:hidden w-8 h-8 rounded" />
      </div>
    </div>
  </div>
)

// Project details shimmer
export const ProjectDetailsShimmer = () => (
  <div className="w-full text-white space-y-4">
    {/* Category badge shimmer */}
    <ShimmerBase className="h-8 w-24 rounded-full bg-gray-600" />
    
    {/* Title shimmer */}
    <ShimmerBase className="h-10 w-3/4 rounded bg-gray-600" />
    
    {/* Description shimmer */}
    <div className="space-y-2">
      <ShimmerBase className="h-5 w-full rounded bg-gray-600" />
      <ShimmerBase className="h-5 w-5/6 rounded bg-gray-600" />
    </div>
    
    {/* Client & Date shimmer */}
    <div className="flex gap-6">
      <ShimmerBase className="h-5 w-32 rounded bg-gray-600" />
      <ShimmerBase className="h-5 w-28 rounded bg-gray-600" />
    </div>
    
    {/* Features shimmer */}
    <div className="space-y-3">
      <ShimmerBase className="h-6 w-32 rounded bg-gray-600" />
      <div className="flex flex-wrap gap-2">
        {[...Array(4)].map((_, i) => (
          <ShimmerBase key={i} className="h-8 w-24 rounded-full bg-gray-600" />
        ))}
      </div>
    </div>
    
    {/* CTA button shimmer */}
    <ShimmerBase className="h-12 w-48 rounded-full bg-gray-600" />
  </div>
)

// Contact form shimmer
export const ContactShimmer = () => (
  <div className="space-y-6">
    {/* Form fields shimmer */}
    <div className="grid md:grid-cols-2 gap-6">
      <ShimmerBase className="h-12 rounded-lg" />
      <ShimmerBase className="h-12 rounded-lg" />
    </div>
    <ShimmerBase className="h-12 rounded-lg" />
    <ShimmerBase className="h-32 rounded-lg" />
    <ShimmerBase className="h-12 w-32 rounded-lg" />
  </div>
)

// Contact section shimmer (complete contact page)
export const ContactSectionShimmer = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header shimmer */}
      <div className="text-center mb-16">
        <ShimmerBase className="h-12 w-64 mx-auto rounded mb-4" />
        <div className="space-y-2 max-w-2xl mx-auto">
          <ShimmerBase className="h-6 w-full rounded" />
          <ShimmerBase className="h-6 w-3/4 mx-auto rounded" />
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info shimmer */}
        <div className="space-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start space-x-4">
              <ShimmerBase className="w-12 h-12 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <ShimmerBase className="h-6 w-32 rounded" />
                <ShimmerBase className="h-5 w-48 rounded" />
              </div>
            </div>
          ))}
          
          {/* Social links shimmer */}
          <div className="flex space-x-4 pt-6">
            {[...Array(4)].map((_, i) => (
              <ShimmerBase key={i} className="w-10 h-10 rounded-lg" />
            ))}
          </div>
        </div>
        
        {/* Contact form shimmer */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ContactShimmer />
        </div>
      </div>
      
      {/* Business card download shimmer */}
      <div className="mt-16 text-center">
        <ShimmerBase className="h-14 w-48 mx-auto rounded-full" />
      </div>
    </div>
  </section>
)

// Footer shimmer
export const FooterShimmer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Logo section */}
        <div className="md:col-span-1">
          <ShimmerBase className="h-8 w-32 rounded mb-4 bg-gray-700" />
          <div className="space-y-2">
            <ShimmerBase className="h-4 w-full rounded bg-gray-700" />
            <ShimmerBase className="h-4 w-5/6 rounded bg-gray-700" />
          </div>
        </div>
        
        {/* Links sections */}
        {[...Array(3)].map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <ShimmerBase className="h-6 w-24 rounded bg-gray-700" />
            <div className="space-y-2">
              {[...Array(4)].map((_, linkIndex) => (
                <ShimmerBase key={linkIndex} className="h-4 w-20 rounded bg-gray-700" />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <ShimmerBase className="h-5 w-48 rounded bg-gray-700" />
          <div className="flex space-x-4">
            {[...Array(3)].map((_, i) => (
              <ShimmerBase key={i} className="w-8 h-8 rounded bg-gray-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

// Add shimmer CSS animation
const shimmerCSS = `
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
`

// Inject CSS if not already present
if (typeof document !== 'undefined' && !document.getElementById('shimmer-styles')) {
  const style = document.createElement('style')
  style.id = 'shimmer-styles'
  style.textContent = shimmerCSS
  document.head.appendChild(style)
}

export default ShimmerBase