import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Font Awesome icon component helper
const FAIcon = ({ icon, className = '' }) => (
  <i className={`${icon} ${className}`} aria-hidden="true" />
)

export default function ServicesInfo() {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      id: 'social',
      name: 'Social Media Management',
      faIcon: 'fa-solid fa-mobile-screen-button',
      categories: [
        {
          title: 'Instagram Standard',
          price: '₹5,999/month',
          features: [
            '8 Posts',
            '4 Reels',
            '8 Stories',
            'Caption writing',
            'Hashtag strategy',
            '1 revision',
            'Monthly analytics'
          ]
        },
        {
          title: 'Instagram Creative',
          price: '₹11,999/month',
          features: [
            '15 Posts',
            '8 Reels',
            '20 Stories',
            'Caption writing',
            'Hashtag strategy',
            'Engagement support',
            '2 revisions',
            'Monthly analytics'
          ]
        },
        {
          title: 'Instagram Premium',
          price: '₹21,999/month',
          features: [
            '25 Posts',
            '15 Reels',
            'Daily Stories',
            'Caption writing',
            'Hashtag strategy',
            'Engagement support',
            'Strategy calls',
            '3 revisions',
            'Monthly analytics'
          ]
        }
      ],
      comparison: [
        { feature: 'Monthly Posts', macflix: '8–25', market: '8–10' },
        { feature: 'Reel/Video Creation', macflix: '4–15', market: '2–4' },
        { feature: 'Story Support', macflix: 'Daily', market: 'Limited' },
        { feature: 'Analytics Reporting', macflix: 'Detailed', market: 'Basic' },
        { feature: 'Strategy Consultation', macflix: 'Yes (Premium)', market: 'No' },
        { feature: 'Revision Rounds', macflix: '1–3', market: '1' }
      ]
    },
    {
      id: 'design',
      name: 'Design Services',
      faIcon: 'fa-solid fa-pen-nib',
      categories: [
        {
          title: 'Standard Post',
          price: '₹299',
          features: [
            'Clean, ready-to-post design using Canva Pro',
            'Canva stock image included',
            'Text placed in neat, professional layout',
            'Background removal if needed',
            '1 size delivered (1:1 or 9:16)',
            '1 revision',
            'Delivered in 24 hours'
          ]
        },
        {
          title: 'Creative Post',
          price: '₹499',
          features: [
            'Design with brand colors & 2–3 font combinations',
            'Shapes, icons & borders added',
            'Canva stock image included',
            'Basic photo correction',
            '2 sizes delivered (1:1 + 9:16)',
            '2 revisions',
            'Delivered in 48 hours'
          ]
        },
        {
          title: 'Premium Post',
          price: '₹749',
          features: [
            'Every element placed with purpose',
            'Advanced photo editing & retouching',
            'Canva stock or client photo handled',
            '3 sizes delivered (1:1, 9:16, 4:5)',
            '3 revisions',
            'Delivered in 48–72 hours'
          ]
        }
      ],
      comparison: [
        { feature: 'Design Complexity', macflix: '★★★★★', market: '★★☆☆☆' },
        { feature: 'Revision Rounds', macflix: 'Up to 3', market: 'Usually 1' },
        { feature: 'Turnaround Time', macflix: '24–72 hrs', market: '3–5 days' },
        { feature: 'Price Competitiveness', macflix: 'Best Value', market: 'Higher' }
      ]
    },
    {
      id: 'carousel',
      name: 'Carousel Design',
      faIcon: 'fa-solid fa-table-cells-large',
      categories: [
        {
          title: 'Standard Carousel',
          price: '₹699',
          features: [
            'Up to 3 slides',
            'Client provides content/text',
            'Clean professional layout',
            'Canva Pro stock elements included',
            'Basic icons/shapes added',
            '1 size delivered (1:1 or 4:5)',
            '1 revision',
            'Delivered in 24 hours'
          ]
        },
        {
          title: 'Creative Carousel',
          price: '₹1,299',
          features: [
            'Up to 5 slides',
            'Content flow organized by us',
            'Custom layouts for each slide',
            'Brand colors & matching fonts used',
            'Shapes, icons & layered elements',
            'Multiple sizes delivered',
            '2 revisions',
            'Delivered in 48 hours'
          ]
        },
        {
          title: 'Premium Carousel',
          price: '₹2,499',
          features: [
            'Up to 7 slides',
            'Full carousel structure planned by us',
            'Slide sequence designed for engagement',
            'Premium layouts with balanced spacing',
            'Advanced image editing/retouching',
            'Infographic or storytelling style',
            '3 revisions',
            'Delivered in 72 hours'
          ]
        }
      ],
      comparison: [
        { feature: 'Slide Quality', macflix: 'Premium', market: 'Basic' },
        { feature: 'Customization', macflix: 'Full', market: 'Limited' },
        { feature: 'Delivery Speed', macflix: '24–72 hrs', market: '5–7 days' },
        { feature: 'Value for Money', macflix: '★★★★★', market: '★★★☆☆' }
      ]
    },
    {
      id: 'reel',
      name: 'Reel Editing',
      faIcon: 'fa-solid fa-film',
      categories: [
        {
          title: 'Standard Reel',
          price: '₹499',
          features: [
            'Basic cuts & trimming',
            'Music sync',
            'Simple transitions',
            'Basic text/captions added',
            '1080p export',
            '1 aspect ratio delivered',
            'Thumbnail included',
            '1 revision',
            'Delivered in 24 hours'
          ]
        },
        {
          title: 'Creative Reel',
          price: '₹999',
          features: [
            'Smooth transitions & speed ramping',
            'Hook text animations added',
            'Burned subtitles/captions',
            'Sound effects & music balancing',
            'Basic color correction',
            'Thumbnail included',
            'Multiple aspect ratios',
            '2 revisions',
            'Delivered in 72 hours'
          ]
        },
        {
          title: 'Premium Reel',
          price: '₹1,499',
          features: [
            'Cinematic editing style',
            'Advanced subtitles & text animations',
            'Cinematic color grading',
            'Sound effects & transitions',
            'Hook-focused reel structure',
            'Stock footage/effects if required',
            '4K export supported',
            'Multiple aspect ratios',
            '3 revisions',
            'Delivered in 5 days'
          ]
        }
      ],
      comparison: [
        { feature: 'Editing Quality', macflix: 'Cinematic', market: 'Basic' },
        { feature: 'Color Grading', macflix: 'Professional', market: 'Standard' },
        { feature: 'Animations', macflix: 'Advanced', market: 'Minimal' },
        { feature: 'Price Match', macflix: 'Competitive', market: 'Variable' }
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube Video Editing',
      faIcon: 'fa-brands fa-youtube',
      categories: [
        {
          title: 'Standard YouTube Edit',
          price: '₹499',
          features: [
            'For videos up to 5 minutes',
            'Basic cuts & trimming',
            'Background music added',
            'Simple transitions',
            'Basic subtitles/captions',
            'Zoom-ins/zoom-outs',
            '1080p export',
            'Thumbnail included',
            '1 revision',
            'Delivered in 2 days'
          ]
        },
        {
          title: 'Creative YouTube Edit',
          price: '₹999',
          features: [
            'For videos up to 10 minutes',
            'Smooth transitions & pacing',
            'Burned subtitles/captions',
            'Sound effects & music balancing',
            'Color correction',
            'Intro/outro added',
            'Lower thirds/text animations',
            'Thumbnail included',
            'Shorts/reel cutdowns supported',
            '2 revisions',
            'Delivered in 4 days'
          ]
        },
        {
          title: 'Premium YouTube Edit',
          price: '₹1,499',
          features: [
            'For videos up to 20 minutes',
            'Cinematic editing style',
            'Advanced subtitles & text animations',
            'Motion graphics added',
            'Cinematic color grading',
            'Audio cleanup & balancing',
            'Stock footage integration',
            'Hook-focused storytelling',
            'Thumbnail included',
            'Shorts/reel cutdowns included',
            '4K export supported',
            '3 revisions',
            'Delivered in 5 days'
          ]
        }
      ],
      comparison: [
        { feature: 'Video Length', macflix: 'Up to 20 min', market: 'Up to 10 min' },
        { feature: 'Motion Graphics', macflix: 'Yes', market: 'Extra Cost' },
        { feature: 'Color Grading', macflix: 'Professional', market: 'Basic' },
        { feature: 'Support Quality', macflix: 'Priority', market: 'Standard' }
      ]
    },
    {
      id: 'brand',
      name: 'Brand Identity Kits',
      faIcon: 'fa-solid fa-briefcase',
      categories: [
        {
          title: 'Standard Brand Kit',
          price: '₹2,999',
          features: [
            '1 logo design concept',
            '2 logo variations',
            'Basic color palette',
            'Typography selection',
            'PNG/JPG delivery',
            'Transparent background files',
            'Social media profile logo setup',
            '1 revision',
            'Delivered in 3 days'
          ]
        },
        {
          title: 'Creative Brand Kit',
          price: '₹5,999',
          features: [
            '2 logo design concepts',
            'Multiple logo variations',
            'Brand color palette',
            'Typography system',
            'Business card design',
            'Instagram highlight covers',
            'Social media templates',
            'Brand mockups included',
            'PDF brand presentation',
            'Editable Canva link',
            '2 revisions',
            'Delivered in 5 days'
          ]
        },
        {
          title: 'Premium Brand Kit',
          price: '₹9,999',
          features: [
            'Full brand identity system',
            'Modern/luxury logo design',
            'AI-assisted brand concepts',
            'Complete typography & color system',
            'Brand guideline PDF',
            'Business card + letterhead + invoice',
            'Social media profile setup',
            'Social media templates',
            'Packaging concept designs',
            'Premium brand mockups',
            'Source files included',
            'Editable Canva link',
            '3 revisions',
            'Delivered in 7 days'
          ]
        }
      ],
      comparison: [
        { feature: 'Logo Concepts', macflix: '1–2', market: '1 only' },
        { feature: 'Deliverables', macflix: 'Complete Kit', market: 'Logo Only' },
        { feature: 'Brand Guidelines', macflix: 'Yes', market: 'Extra Cost' },
        { feature: 'Revisions', macflix: '2–3', market: '1' }
      ]
    },
    {
      id: 'web',
      name: 'Website Services',
      faIcon: 'fa-solid fa-globe',
      categories: [
        {
          title: 'Portfolio Website',
          price: '₹7,999',
          features: [
            'Responsive portfolio website',
            'Mobile optimized design',
            'About section',
            'Services section',
            'Portfolio/gallery section',
            'Contact form',
            'WhatsApp integration',
            'Social media integration',
            'Basic animations',
            'Domain connection support',
            '1 revision',
            'Delivered in 5–7 days'
          ]
        },
        {
          title: 'Business Website',
          price: '₹14,999',
          features: [
            'Modern custom-designed website',
            'Fully responsive & mobile optimized',
            'Project showcase section',
            'Testimonials section',
            'Advanced animations & transitions',
            'SEO basics setup',
            'Contact form integration',
            'WhatsApp & social integration',
            'Hosting setup support',
            'Analytics integration',
            'Multiple custom sections',
            '2 revisions',
            'Delivered in 10–14 days'
          ]
        },
        {
          title: 'Premium Full Stack Website',
          price: '₹24,999',
          features: [
            'Premium startup/agency website',
            'Fully custom UI/UX design',
            'Smooth premium animations',
            'CMS/Admin panel support',
            'Blog section included',
            'Advanced SEO setup',
            'Hosting + domain setup support',
            'Analytics integration',
            'Training/support video included',
            'Source code/files included',
            'Mobile optimization',
            'High-performance optimization',
            'Multiple advanced sections',
            '3 revisions',
            'Delivered in 15–20 days'
          ]
        }
      ],
      comparison: [
        { feature: 'Admin Panel', macflix: 'Premium Only', market: 'Extra Cost' },
        { feature: 'SEO Setup', macflix: 'Included', market: 'Extra' },
        { feature: 'Customization', macflix: 'Full', market: 'Templates' },
        { feature: 'Support Duration', macflix: 'Lifetime', market: '6 months' }
      ]
    },
    {
      id: 'ai',
      name: 'AI-Powered Services',
      faIcon: 'fa-solid fa-robot',
      categories: [
        {
          title: 'Standard AI Creative',
          price: '₹10,999',
          features: [
            'AI image generation',
            'AI social media creatives',
            'AI poster/banner concepts',
            'Basic AI product mockups',
            'AI background generation',
            'High-resolution PNG/JPG',
            'Social media-ready sizes',
            '1 revision round',
            'Delivered in 2–4 days'
          ]
        },
        {
          title: 'Creative AI Package',
          price: '₹19,999',
          features: [
            'Advanced AI image generation',
            'AI branding concepts',
            'AI advertisement concepts',
            'AI product scene creation',
            'Premium AI mockup presentations',
            'AI visual enhancement',
            'Multiple creative variations',
            'Editable Canva support',
            'Ad-ready creative formats',
            '2 revision rounds',
            'Delivered in 5–7 days'
          ]
        },
        {
          title: 'Premium AI Ecosystem',
          price: '₹39,999',
          features: [
            'Full AI-powered creative direction',
            'Premium AI branding concepts',
            'Advanced product mockups',
            'AI advertisement campaign creatives',
            'AI-enhanced visual systems',
            'Multiple AI-generated variations',
            'Social media + ad-ready delivery',
            'Editable Canva support',
            'High-resolution commercial delivery',
            'Prompt support/workflow guidance',
            'Priority support',
            '3 revision rounds',
            'Delivered in 7–12 days'
          ]
        }
      ],
      comparison: [
        { feature: 'AI Quality', macflix: 'State-of-the-Art', market: 'Basic' },
        { feature: 'Customization', macflix: 'Unlimited', market: 'Limited' },
        { feature: 'Commercial Use', macflix: 'Yes', market: 'Restrictions' },
        { feature: 'Support', macflix: '24/7', market: 'Limited' }
      ]
    },
    {
      id: 'seo',
      name: 'SEO & Optimization',
      faIcon: 'fa-solid fa-chart-line',
      categories: [
        {
          title: 'Standard SEO Package',
          price: '₹4,999',
          features: [
            'On-page SEO setup',
            'Meta tags optimization',
            'Image optimization',
            'Mobile optimization',
            'Google Search Console setup',
            'Google Analytics setup',
            'Basic keyword optimization',
            'Basic website speed optimization',
            'SEO audit report',
            '1 revision/support round',
            'Delivered in 3–5 days'
          ]
        },
        {
          title: 'Creative SEO Package',
          price: '₹9,999',
          features: [
            'Advanced on-page SEO',
            'Technical SEO improvements',
            'Website speed optimization',
            'Keyword research & optimization',
            'Blog SEO optimization',
            'Local SEO setup',
            'Google Business optimization',
            'Analytics & tracking setup',
            'Performance improvement support',
            'SEO insights/reporting',
            '2 revisions/support rounds',
            'Delivered in 7–10 days'
          ]
        },
        {
          title: 'Premium SEO System',
          price: '₹19,999',
          features: [
            'Full technical SEO optimization',
            'Advanced keyword strategy',
            'Performance optimization',
            'Website speed enhancement',
            'Advanced analytics setup',
            'Search Console optimization',
            'Blog/content SEO optimization',
            'Local SEO + Google Business',
            'SEO audit & reporting system',
            'Monthly performance insights',
            'Advanced optimization support',
            '3 revisions/support rounds',
            'Delivered in 10–18 days'
          ]
        }
      ],
      comparison: [
        { feature: 'Technical Depth', macflix: 'Complete', market: 'Surface Level' },
        { feature: 'Strategy', macflix: 'Custom', market: 'Template' },
        { feature: 'Reporting', macflix: 'Monthly', market: 'Quarterly' },
        { feature: 'ROI Focus', macflix: 'Yes', market: 'Generic' }
      ]
    },
    {
      id: 'maintenance',
      name: 'Hosting & Maintenance',
      faIcon: 'fa-solid fa-screwdriver-wrench',
      categories: [
        {
          title: 'Standard Plan',
          price: '₹2,999/month',
          features: [
            'Website maintenance support',
            'Basic bug fixing',
            'Content update support',
            'Monthly backup support',
            'Basic hosting support',
            'Domain connection support',
            'Basic uptime monitoring',
            'Technical support',
            '1 support/revision per month'
          ]
        },
        {
          title: 'Creative Plan',
          price: '₹5,999/month',
          features: [
            'Website & hosting support',
            'Performance optimization',
            'Security monitoring',
            'Plugin/system updates',
            'Monthly backup management',
            'SEO monitoring',
            'Analytics monitoring',
            'Bug fixing & technical support',
            'Optimization support',
            'Monthly maintenance reports',
            '2 support/revision rounds'
          ]
        },
        {
          title: 'Premium Plan',
          price: '₹9,999/month',
          features: [
            'Full website/application maintenance',
            'Hosting & deployment support',
            'Database backup management',
            'Advanced security monitoring',
            'Performance optimization',
            'SEO & analytics monitoring',
            'Technical troubleshooting',
            'Priority bug fixing',
            'Monthly optimization reports',
            'Advanced support system',
            '24/7 critical issue support',
            '3 support/revision rounds'
          ]
        }
      ],
      comparison: [
        { feature: 'Support Level', macflix: '24/7 Premium', market: 'Business Hours' },
        { feature: 'Security', macflix: 'Advanced', market: 'Basic' },
        { feature: 'Response Time', macflix: '1 hour', market: '24 hours' },
        { feature: 'Proactive Monitoring', macflix: 'Yes', market: 'No' }
      ]
    }
  ]

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              All{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services & Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent pricing, no hidden costs. See exactly what you get with each tier. We compare
              ourselves to the market so you know why Macflix is the best choice.
            </p>
          </motion.div>

          {/* Services Accordion */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Service Header */}
                <motion.button
                  onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                  className="w-full"
                >
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-left">
                        {/* Font Awesome icon in a styled circle */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600/40 to-pink-600/40 border border-purple-500/50 flex items-center justify-center flex-shrink-0">
                          <FAIcon
                            icon={service.faIcon}
                            className="text-purple-300 text-xl"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {service.categories.length} package tiers available
                          </p>
                        </div>
                      </div>
                      {/* FA chevron replacing Lucide ChevronDown */}
                      <motion.div
                        animate={{ rotate: expandedService === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FAIcon icon="fa-solid fa-chevron-down" className="text-purple-400 text-xl" />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-800/40 border border-gray-700 rounded-b-xl p-8 mt-2">
                        {/* Service Tiers */}
                        <div className="mb-12">
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            {/* FA star replacing Lucide Star */}
                            <FAIcon icon="fa-solid fa-star" className="text-yellow-400" />
                            Package Options
                          </h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            {service.categories.map((tier, tierIdx) => (
                              <motion.div
                                key={tierIdx}
                                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all"
                                whileHover={{ y: -5 }}
                              >
                                <h5 className="text-lg font-bold text-white mb-2">{tier.title}</h5>
                                <div className="text-3xl font-bold text-purple-400 mb-4">{tier.price}</div>
                                <ul className="space-y-2">
                                  {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex gap-2 text-sm text-gray-300">
                                      {/* FA circle-check replacing Check */}
                                      <FAIcon icon="fa-solid fa-circle-check" className="text-green-400 flex-shrink-0 mt-0.5" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <motion.button
                                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  Get This Package
                                </motion.button>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Market Comparison */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            {/* FA award/medal replacing Lucide Award */}
                            <FAIcon icon="fa-solid fa-award" className="text-yellow-400" />
                            Why Choose Macflix?
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-600">
                                  <th className="text-left py-4 px-4 text-gray-300 font-semibold">Feature</th>
                                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">
                                    <div className="flex items-center justify-center gap-2">
                                      {/* FA bolt replacing Lucide Zap */}
                                      <FAIcon icon="fa-solid fa-bolt" className="text-purple-400" />
                                      Macflix
                                    </div>
                                  </th>
                                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">
                                    Local Market
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {service.comparison.map((row, rowIdx) => (
                                  <tr
                                    key={rowIdx}
                                    className="border-b border-gray-700 hover:bg-gray-700/30 transition-all"
                                  >
                                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                                    <td className="py-4 px-4 text-center">
                                      <span className="text-purple-300 font-semibold">{row.macflix}</span>
                                    </td>
                                    <td className="py-4 px-4 text-center text-gray-400">{row.market}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Trust Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Macflix Wins</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-3">
                  <FAIcon icon="fa-solid fa-shield-halved" className="text-green-400 text-xl" />
                </div>
                <p className="text-gray-300">Transparent Pricing</p>
              </div>
              <div>
                <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto mb-3">
                  <FAIcon icon="fa-solid fa-bolt" className="text-purple-400 text-xl" />
                </div>
                <p className="text-gray-300">Fast Turnaround</p>
              </div>
              <div>
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center mx-auto mb-3">
                  <FAIcon icon="fa-solid fa-medal" className="text-yellow-400 text-xl" />
                </div>
                <p className="text-gray-300">Premium Quality</p>
              </div>
              <div>
                <div className="w-14 h-14 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center mx-auto mb-3">
                  <FAIcon icon="fa-solid fa-headset" className="text-pink-400 text-xl" />
                </div>
                <p className="text-gray-300">Best Support</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <motion.button 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              link="https://wa.me/919876543210?text=Hello%20Macflix%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
              linkTarget="_blank"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  )
}