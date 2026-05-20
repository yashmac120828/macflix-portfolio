import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAIcon = ({ icon, className = '' }) => {
  return <i className={`fas ${icon} ${className}`}></i>;
};

const ServicesInfo = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('management');

  const services = [
    // ==================== WEBSITE SERVICES ====================
    {
      id: 1,
      name: 'Portfolio Websites',
      category: 'website',
      faIcon: 'fa-briefcase',
      categories: [
        {
          title: 'Standard',
          price: '₹7,999',
          period: '/project',
          bestFor: 'Students, freelancers, creators',
          features: [
            'Responsive portfolio website',
            'Mobile optimized design',
            'About & Services section',
            'Portfolio/gallery section',
            'Contact form',
            'WhatsApp integration',
            'Social media integration',
            'Basic animations',
            'Domain connection support',
            '1 revision',
          ],
          technicalStructure: {
            architecture: 'Static frontend website',
            backend: 'None',
            database: 'None',
          },
        },
        {
          title: 'Creative',
          price: '₹14,999',
          period: '/project',
          bestFor: 'Agencies, startups, professionals',
          features: [
            'Modern custom-designed portfolio',
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
          ],
          technicalStructure: {
            architecture: 'Frontend + basic backend',
            backend: 'Basic integration',
            database: 'Basic integration included',
          },
        },
        {
          title: 'Premium',
          price: '₹24,999',
          period: '/project',
          bestFor: 'Startups, agencies, scalable brands',
          features: [
            'Premium startup/agency-style website',
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
          ],
          technicalStructure: {
            architecture: 'Full stack scalable',
            backend: 'Full backend included',
            database: 'Full database integration',
          },
        },
      ],
      addOns: [
        { title: 'Extra Custom Section', price: '₹999/section' },
        { title: 'Blog Setup', price: '₹1,499' },
        { title: 'Additional Animation Effects', price: '₹1,999' },
        { title: 'Monthly Maintenance', price: '₹2,999/month' },
        { title: 'Fast Delivery', price: '₹3,999' },
      ],
      importantNotes: [
        'Domain & hosting charges not included (Macflix can assist with setup)',
        'Extra revisions may include additional charges depending on scope',
        'Delivery timelines may vary based on complexity and client response',
      ],
    },
    {
      id: 2,
      name: 'Business Websites',
      category: 'website',
      faIcon: 'fa-store',
      categories: [
        {
          title: 'Standard',
          price: '₹14,999',
          period: '/project',
          bestFor: 'Small local businesses, cafes, salons',
          features: [
            'Responsive business website',
            'Mobile optimized design',
            'Homepage with hero section',
            'About Us section',
            'Services section',
            'Gallery section',
            'Contact form',
            'WhatsApp integration',
            'Google Maps integration',
            'Basic SEO setup',
            'Basic animations',
            'Domain connection support',
            '1 revision',
          ],
          technicalStructure: {
            architecture: 'Static frontend website',
            backend: 'None',
            database: 'None',
          },
        },
        {
          title: 'Creative',
          price: '₹29,999',
          period: '/project',
          bestFor: 'Educational institutes, clinics, real estate',
          features: [
            'Modern custom-designed website',
            'Fully responsive & mobile optimized',
            'Services & pricing sections',
            'Testimonials section',
            'FAQ section',
            'Booking/enquiry forms',
            'Lead capture forms',
            'Blog/news section',
            'Analytics integration',
            'SEO setup',
            'WhatsApp & Google Maps integration',
            'Hosting setup support',
            'Advanced animations & transitions',
            '2 revisions',
          ],
          technicalStructure: {
            architecture: 'Frontend + basic backend',
            backend: 'Basic integration',
            database: 'Basic database included',
          },
        },
        {
          title: 'Premium',
          price: '₹49,999',
          period: '/project',
          bestFor: 'Corporate businesses, large clinics, real estate',
          features: [
            'Premium business website with custom UI/UX',
            'Fully responsive & high-performance design',
            'Admin panel/dashboard',
            'Customer database integration',
            'Appointment booking system',
            'Payment integration',
            'Blog/news management system',
            'Advanced SEO optimization',
            'Analytics & lead tracking',
            'Hosting + domain setup support',
            'Training/support video included',
            'Source code/files included',
            'Premium animations & transitions',
            'Multiple advanced sections',
            '3 revisions',
          ],
          technicalStructure: {
            architecture: 'Full stack scalable',
            backend: 'Full backend included',
            database: 'Full database integration',
          },
        },
      ],
      addOns: [
        { title: 'Extra Custom Section', price: '₹1,499/section' },
        { title: 'Blog Setup', price: '₹2,499' },
        { title: 'Additional Animation Effects', price: '₹2,999' },
        { title: 'Monthly Maintenance', price: '₹3,999/month' },
        { title: 'Fast Delivery', price: '₹5,999' },
        { title: 'Extra Booking System', price: '₹2,999' },
        { title: 'Additional Payment Gateway', price: '₹1,999' },
      ],
      importantNotes: [
        'Domain & hosting charges not included',
        'Extra revisions may include additional charges',
        'Delivery timelines: 7-10 days (Standard), 14-18 days (Creative), 20-30 days (Premium)',
      ],
    },
    {
      id: 3,
      name: 'Startup Websites',
      category: 'website',
      faIcon: 'fa-rocket',
      categories: [
        {
          title: 'Standard',
          price: '₹24,999',
          period: '/project',
          bestFor: 'Startup founders, product launches',
          features: [
            'Modern startup landing page',
            'Mobile responsive design',
            'Hero landing section',
            'Product/service showcase',
            'Pricing section',
            'Testimonials section',
            'FAQ section',
            'Contact & lead capture forms',
            'Basic animations & transitions',
            'SEO basics setup',
            'Analytics integration',
            'Domain connection support',
            '1 revision',
          ],
          technicalStructure: {
            architecture: 'Frontend website only',
            backend: 'None',
            database: 'None',
          },
        },
        {
          title: 'Creative',
          price: '₹49,999',
          period: '/project',
          bestFor: 'SaaS startups, AI startups, tech startups',
          features: [
            'Premium startup-style UI/UX',
            'Fully responsive modern design',
            'Advanced animations & transitions',
            'Product showcase system',
            'Blog/news section',
            'Waitlist/signup system',
            'Dashboard preview sections',
            'API integration support',
            'Analytics & SEO setup',
            'Hosting setup support',
            'Multiple custom sections',
            'Basic CMS/admin features',
            '2 revisions',
          ],
          technicalStructure: {
            architecture: 'Frontend + basic backend',
            backend: 'Basic backend included',
            database: 'Basic database integration',
          },
        },
        {
          title: 'Premium',
          price: '₹89,999',
          period: '/project',
          bestFor: 'SaaS platforms, AI tools, investor-ready brands',
          features: [
            'Fully custom startup platform',
            'Premium UI/UX with advanced animations',
            'Frontend + backend + database integration',
            'Admin panel/dashboard',
            'Authentication/login system',
            'API integrations',
            'Payment integration',
            'CMS/content management system',
            'Chatbot integration',
            'AI integration support',
            'Advanced SEO optimization',
            'Analytics & lead tracking',
            'Hosting + domain setup support',
            'Source code/files included',
            'Training/support included',
            'High-performance optimization',
            '3 revisions',
          ],
          technicalStructure: {
            architecture: 'Full stack scalable',
            backend: 'Full backend included',
            database: 'Full database integration',
          },
        },
      ],
      addOns: [
        { title: 'Extra Custom Section', price: '₹1,999/section' },
        { title: 'Advanced API Integration', price: '₹4,999' },
        { title: 'Additional Animation Effects', price: '₹3,999' },
        { title: 'AI Chatbot Integration', price: '₹5,999' },
        { title: 'Blog Setup', price: '₹2,999' },
        { title: 'Monthly Maintenance', price: '₹4,999/month' },
        { title: 'Fast Delivery', price: '₹9,999' },
      ],
      importantNotes: [
        'Domain & hosting charges not included',
        'Extra revisions may include additional charges',
        'Delivery timelines: 10-14 days (Standard), 18-25 days (Creative), 30-45 days (Premium)',
      ],
    },
    {
      id: 4,
      name: 'E-Commerce Websites',
      category: 'website',
      faIcon: 'fa-shopping-cart',
      categories: [
        {
          title: 'Creative',
          price: '₹49,999',
          period: '/project',
          bestFor: 'Fashion brands, cosmetics, electronics stores',
          features: [
            'Modern custom-designed online store',
            'Fully responsive premium UI',
            'Product search & filters',
            'Customer login/accounts',
            'Wishlist system',
            'Coupon/discount system',
            'Inventory management',
            'Order management system',
            'Product reviews support',
            'Shipping integration support',
            'Advanced SEO setup',
            'Analytics dashboard',
            'Multiple payment integrations',
            'Hosting setup support',
            '2 revisions',
          ],
          technicalStructure: {
            architecture: 'Frontend + backend',
            backend: 'Full backend included',
            database: 'Dynamic product database',
          },
        },
        {
          title: 'Premium',
          price: '₹89,999',
          period: '/project',
          bestFor: 'Scalable product businesses, large online stores',
          features: [
            'Fully custom e-commerce platform',
            'Premium UI/UX with advanced animations',
            'Frontend + backend + database integration',
            'Advanced admin dashboard',
            'Customer authentication/login system',
            'Advanced inventory management',
            'Invoice generation system',
            'Multiple payment gateways',
            'Shipping & delivery integration',
            'Abandoned cart support',
            'Analytics & sales tracking',
            'Advanced SEO optimization',
            'High-performance optimization',
            'Hosting + domain setup support',
            'Source code/files included',
            'Training/support included',
            '3 revisions',
          ],
          technicalStructure: {
            architecture: 'Full stack scalable',
            backend: 'Full backend included',
            database: 'Advanced scalable database',
          },
        },
      ],
      addOns: [
        { title: 'Extra Product Upload Support', price: '₹1,999' },
        { title: 'Additional Payment Gateway', price: '₹2,999' },
        { title: 'Advanced Animation Effects', price: '₹3,999' },
        { title: 'AI Chatbot Integration', price: '₹5,999' },
        { title: 'Marketing Automation Setup', price: '₹7,999' },
        { title: 'Monthly Maintenance', price: '₹4,999/month' },
        { title: 'Fast Delivery', price: '₹9,999' },
      ],
      importantNotes: [
        'Domain & hosting charges not included',
        'Extra revisions may include additional charges',
        'Delivery timelines: 20-30 days (Creative), 30-45 days (Premium)',
      ],
    },
    {
      id: 5,
      name: 'Web Applications',
      category: 'website',
      faIcon: 'fa-code',
      categories: [
        {
          title: 'Standard',
          price: '₹39,999',
          period: '/project',
          bestFor: 'Small business systems, booking systems, portals',
          features: [
            'Responsive web application',
            'Authentication/login system',
            'Admin dashboard',
            'Basic database integration',
            'Customer/data management',
            'Basic analytics dashboard',
            'File upload support',
            'API integration support',
            'Hosting setup support',
            '1 revision',
          ],
          technicalStructure: {
            architecture: 'Frontend + Backend',
            backend: 'Basic backend included',
            database: 'Basic database architecture',
          },
        },
        {
          title: 'Creative',
          price: '₹79,999',
          period: '/project',
          bestFor: 'CRM systems, SaaS MVPs, analytics dashboards',
          features: [
            'Premium UI/UX design',
            'Responsive scalable application',
            'Role-based access system',
            'Advanced admin dashboard',
            'Analytics & reporting system',
            'Payment integration',
            'Notifications system',
            'Customer management',
            'API integrations',
            'Automation workflows',
            'Database setup included',
            'Hosting setup support',
            'Documentation included',
            '2 revisions',
          ],
          technicalStructure: {
            architecture: 'Frontend + Backend + Database',
            backend: 'Advanced backend included',
            database: 'Advanced database included',
          },
        },
        {
          title: 'Premium',
          price: '₹1,49,999',
          period: '/project',
          bestFor: 'SaaS platforms, AI platforms, enterprise systems',
          features: [
            'Fully custom scalable web application',
            'Premium UI/UX with advanced workflows',
            'Frontend + backend + database architecture',
            'Advanced authentication system',
            'AI integration support',
            'Chatbot integration',
            'Automation systems',
            'Payment & subscription systems',
            'Advanced analytics dashboards',
            'Customer/client management system',
            'Reports/export systems',
            'API integrations',
            'High-performance optimization',
            'Source code/files included',
            'Documentation included',
            'Training/support included',
            '3 revisions',
          ],
          technicalStructure: {
            architecture: 'Full stack scalable',
            backend: 'Enterprise-style backend',
            database: 'Advanced database integration',
          },
        },
      ],
      addOns: [
        { title: 'Extra Dashboard Module', price: '₹4,999/module' },
        { title: 'Additional API Integration', price: '₹5,999' },
        { title: 'AI Chatbot Integration', price: '₹7,999' },
        { title: 'Advanced Automation Workflow', price: '₹9,999' },
        { title: 'Monthly Maintenance', price: '₹7,999/month' },
        { title: 'Fast Delivery', price: '₹14,999' },
      ],
      importantNotes: [
        'Domain & hosting charges not included',
        'Extra revisions may include additional charges',
        'Delivery timelines: 20-30 days (Standard), 30-45 days (Creative), 45-75 days (Premium)',
      ],
    },
    {
      id: 6,
      name: 'API Integration',
      category: 'website',
      faIcon: 'fa-plug',
      categories: [
        {
          title: 'Standard',
          price: '₹4,999',
          period: '/integration',
          bestFor: 'Payment gateway setup, social media APIs',
          features: [
            'Basic API integration',
            'Frontend OR backend integration',
            'Authentication setup support',
            'Basic testing/debugging',
            'Deployment support',
            'Working integration delivery',
            '1 revision',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹9,999',
          period: '/integration',
          bestFor: 'CRM integrations, WhatsApp APIs, email automation',
          features: [
            'Frontend + backend API integration',
            'Webhook integration support',
            'Authentication & token handling',
            'API testing/debugging',
            'Automation workflow support',
            'Documentation support',
            'Deployment support',
            'Source code/files included',
            '2 revisions',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹19,999',
          period: '/integration',
          bestFor: 'AI integrations, SaaS systems, enterprise workflows',
          features: [
            'Advanced API architecture',
            'AI API integrations',
            'Automation workflows',
            'Webhook systems',
            'Advanced authentication systems',
            'Frontend + backend integration',
            'Documentation included',
            'Deployment support',
            'Source code/files included',
            'Maintenance guidance',
            '3 revisions',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional API Integration', price: '₹2,999/API' },
        { title: 'Webhook Setup', price: '₹1,999' },
        { title: 'Advanced Automation Workflow', price: '₹4,999' },
        { title: 'AI API Integration', price: '₹5,999' },
        { title: 'Maintenance Support', price: '₹2,999/month' },
        { title: 'Fast Delivery', price: '₹4,999' },
      ],
      importantNotes: [
        'Third-party API subscription charges not included',
        'Client must provide API access/credentials if required',
        'Extra revisions may include additional charges',
        'Delivery timelines: 3-5 days (Standard), 7-10 days (Creative), 10-18 days (Premium)',
      ],
    },
    {
      id: 7,
      name: 'SEO & Optimization',
      category: 'website',
      faIcon: 'fa-search',
      categories: [
        {
          title: 'Standard',
          price: '₹4,999',
          period: '/project',
          bestFor: 'Portfolio websites, small business websites',
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
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹9,999',
          period: '/project',
          bestFor: 'Business websites, startup websites, e-commerce',
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
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹19,999',
          period: '/project',
          bestFor: 'Startup platforms, e-commerce brands, competitive industries',
          features: [
            'Full technical SEO optimization',
            'Advanced keyword strategy',
            'Performance optimization',
            'Website speed enhancement',
            'Advanced analytics setup',
            'Search Console optimization',
            'Blog/content SEO optimization',
            'Local SEO + Google Business optimization',
            'SEO audit & reporting system',
            'Monthly performance insights',
            'Advanced optimization support',
            '3 revisions/support rounds',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Monthly SEO Maintenance', price: '₹4,999/month' },
        { title: 'Additional Keyword Research', price: '₹1,999' },
        { title: 'Advanced Speed Optimization', price: '₹2,999' },
        { title: 'Blog SEO Setup', price: '₹2,499' },
        { title: 'Google Business Optimization', price: '₹2,999' },
        { title: 'Fast Delivery', price: '₹3,999' },
      ],
      importantNotes: [
        'SEO results depend on competition, content quality, and market conditions',
        'Macflix does not guarantee instant ranking results',
        'Premium SEO tool subscriptions not included',
        'SEO improvements may take time (3-6 months for significant results)',
      ],
    },
    {
      id: 8,
      name: 'Hosting & Maintenance',
      category: 'website',
      faIcon: 'fa-server',
      categories: [
        {
          title: 'Standard',
          price: '₹2,999',
          period: '/month',
          bestFor: 'Portfolio websites, small business websites',
          features: [
            'Website maintenance support',
            'Basic bug fixing',
            'Content update support',
            'Monthly backup support',
            'Basic hosting support',
            'Domain connection support',
            'Basic uptime monitoring',
            'Technical support',
            '1 support/revision round per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹5,999',
          period: '/month',
          bestFor: 'Business websites, startup websites, e-commerce',
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
            '2 support/revision rounds per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹9,999',
          period: '/month',
          bestFor: 'Startup platforms, e-commerce systems, web applications',
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
            '3 support/revision rounds per month',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional Monthly Support Round', price: '₹999' },
        { title: 'Emergency Bug Fix', price: '₹1,499' },
        { title: 'Additional Backup System', price: '₹999' },
        { title: 'Advanced Security Monitoring', price: '₹2,499' },
        { title: 'Performance Optimization', price: '₹2,999' },
        { title: 'Priority Support', price: '₹3,999/month' },
      ],
      importantNotes: [
        'Hosting/server charges not included unless mentioned',
        'Major redesigns or new features not included in maintenance',
        'Support response times vary by issue complexity',
      ],
    },
    // ==================== DESIGN SERVICES ====================
    {
      id: 9,
      name: 'Social Media Post Design',
      category: 'posts',
      faIcon: 'fa-image',
      categories: [
        {
          title: 'Standard Post',
          price: '₹299',
          period: '/post',
          bestFor: 'Basic social posts',
          features: [
            'Clean, ready-to-post design using Canva Pro',
            'Canva stock image included',
            'Text placed in neat, professional layout',
            'Background removal if needed',
            '1 size delivered (1:1 or 9:16)',
            '1 revision',
            'Delivered in 24 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Post',
          price: '₹499',
          period: '/post',
          bestFor: 'Brand-focused posts',
          features: [
            'Design built with brand colors & 2–3 font combinations',
            'Shapes, icons & borders added to make it pop',
            'Canva stock image included',
            'Basic photo correction (brightness, contrast)',
            '2 sizes delivered (1:1 + 9:16)',
            '2 revisions',
            'Delivered in 48 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Post',
          price: '₹749',
          period: '/post',
          bestFor: 'High-impact marketing posts',
          features: [
            'Every element placed with purpose',
            'Advanced photo editing & retouching',
            'Canva stock or client photo handled',
            '3 sizes delivered (1:1, 9:16, 4:5)',
            '3 revisions',
            'Delivered in 48–72 hours',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Revision', price: '₹99' },
        { title: 'Same Day Delivery', price: '₹199' },
        { title: 'Multiple Sizes (5)', price: '₹399' },
      ],
      importantNotes: [
        'All designs are original (no stock images without client request)',
        'Revision time: 24 hours',
        'Extra revisions on Standard/Creative: ₹99 per revision',
      ],
    },
    {
      id: 10,
      name: 'Carousel Design',
      category: 'other',
      faIcon: 'fa-images',
      categories: [
        {
          title: 'Standard Carousel',
          price: '₹699',
          period: '/carousel',
          bestFor: 'Tutorial-style carousels',
          features: [
            'Up to 3 slides',
            'Client provides content/text',
            'Clean professional layout',
            'Canva Pro stock elements included',
            'Basic icons/shapes added',
            '1 size delivered (1:1 or 4:5)',
            '1 revision',
            'JPG/PNG delivery only',
            'Delivered in 24 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Carousel',
          price: '₹1,299',
          period: '/carousel',
          bestFor: 'Engaging brand stories',
          features: [
            'Up to 5 slides',
            'Content flow organized properly',
            'Custom layouts for each slide',
            'Brand colors & matching fonts used',
            'Shapes, icons & layered elements added',
            'Multiple sizes delivered',
            '2 revisions',
            'JPG/PNG delivery only',
            'Delivered in 48 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Carousel',
          price: '₹2,499',
          period: '/carousel',
          bestFor: 'High-impact marketing carousels',
          features: [
            'Up to 7 slides',
            'Full carousel structure planned',
            'Slide sequence designed for engagement',
            'Premium layouts with balanced spacing',
            'Advanced image editing/retouching',
            'Infographic or storytelling style',
            'Multiple sizes delivered',
            '3 revisions',
            'JPG/PNG delivery only',
            'Delivered in 72 hours',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Slides', price: '₹200/slide' },
        { title: 'Animated Carousel', price: '₹999' },
        { title: 'Fast Delivery (Same Day)', price: '₹499' },
      ],
      importantNotes: [
        'Pricing is per carousel (all slides included)',
        'All slides delivered as high-res PNGs & Editable PSDs',
        'Revision policy: ₹200 per revision after included count',
      ],
    },
    {
      id: 11,
      name: 'Story Design',
      category: 'stories',
      faIcon: 'fa-rectangle-landscape',
      categories: [
        {
          title: 'Standard Story',
          price: '₹199',
          period: '/story',
          bestFor: 'Daily story posting',
          features: [
            'Simple clean story layout',
            'Client provides text/content',
            'Canva Pro stock elements included',
            'Basic text + image placement',
            '1 size delivered (9:16)',
            'JPG or PNG delivery',
            '1 revision',
            'Delivered in 24 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Story',
          price: '₹399',
          period: '/story',
          bestFor: 'Regular storytellers & brands',
          features: [
            'Design built with custom layout & brand colors',
            'Shapes, icons & layered elements added',
            'Basic motion/animation effects if needed',
            'Basic photo editing/correction',
            'Multiple story variations supported',
            'JPG/PNG or MP4 delivery',
            '2 revisions',
            'Delivered in 48 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Story',
          price: '₹799',
          period: '/story',
          bestFor: 'Content creators & agencies',
          features: [
            'Full branded story experience',
            'Advanced animations & motion effects',
            'Cinematic story styling supported',
            'Professional photo editing/retouching',
            'Product showcase or storytelling style',
            'Premium typography & visual balance',
            'Multiple sizes delivered if required',
            'JPG/PNG + MP4 delivery',
            '3 revisions',
            'Delivered in 72 hours',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Story Variation', price: '₹99/story' },
        { title: 'Same Day Delivery', price: '₹299' },
        { title: 'Advanced Motion Animation', price: '₹399' },
      ],
      importantNotes: [
        'Stories delivered as PSD & PNG files',
        'All stories optimized for Instagram Stories (1080 x 1920px)',
        'Revisions: 24-hour turnaround',
      ],
    },
    {
      id: 12,
      name: 'Reel Editing',
      category: 'reels',
      faIcon: 'fa-film',
      categories: [
        {
          title: 'Standard Reel',
          price: '₹499',
          period: '/reel',
          bestFor: 'Casual content creators',
          features: [
            'Basic cuts & trimming',
            'Music sync',
            'Simple transitions',
            'Basic text/captions added',
            '1080p export',
            '1 aspect ratio delivered',
            'Thumbnail included',
            '1 revision',
            'Delivered in 24 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Reel',
          price: '₹999',
          period: '/reel',
          bestFor: 'Engaging branded content',
          features: [
            'Smooth transitions & speed ramping',
            'Hook text animations added',
            'Burned subtitles/captions',
            'Sound effects & music balancing',
            'Basic color correction',
            'Thumbnail included',
            'Multiple aspect ratios delivered',
            '2 revisions',
            'Delivered in 72 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Reel',
          price: '₹1,499',
          period: '/reel',
          bestFor: 'Professional production quality',
          features: [
            'Cinematic editing style',
            'Advanced subtitles & text animations',
            'Cinematic color grading',
            'Sound effects & transitions',
            'Hook-focused reel structure',
            'Stock footage/effects if required',
            '4K export supported',
            'Thumbnail included',
            'Multiple aspect ratios delivered',
            '3 revisions',
            'Delivered in 5 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Same Day Delivery', price: '₹499' },
        { title: 'Extra Revision', price: '₹149/revision' },
        { title: 'Thumbnail Only', price: '₹99' },
        { title: '4K Export', price: '₹199' },
        { title: 'AI Voiceover Integration', price: '₹399' },
      ],
      importantNotes: [
        'Client provides raw footage or brief',
        'Revisions: 24-48 hour turnaround',
        'All music & sound effects royalty-free & commercially licensed',
      ],
    },
    {
      id: 13,
      name: 'YouTube Video Editing',
      category: 'youtube',
      faIcon: 'fa-youtube',
      categories: [
        {
          title: 'Standard',
          price: '₹499',
          period: '/video (up to 5 min)',
          bestFor: 'Regular YouTube content',
          features: [
            'Basic cuts & trimming',
            'Background music added',
            'Simple transitions',
            'Basic subtitles/captions',
            'Zoom-ins/zoom-outs',
            '1080p export',
            'Thumbnail included',
            '1 revision',
            'Delivered in 2 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹999',
          period: '/video (up to 10 min)',
          bestFor: 'Engaging video content',
          features: [
            'Smooth transitions & pacing',
            'Burned subtitles/captions',
            'Sound effects & music balancing',
            'Color correction',
            'Intro/outro added',
            'Lower thirds/text animations',
            'Thumbnail included',
            'Shorts/reel cutdowns supported',
            '1080p export',
            '2 revisions',
            'Delivered in 4 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹1,499',
          period: '/video (up to 20 min)',
          bestFor: 'Professional production quality',
          features: [
            'Cinematic editing style',
            'Advanced subtitles & text animations',
            'Motion graphics added',
            'Cinematic color grading',
            'Audio cleanup & balancing',
            'Stock footage integration if needed',
            'Hook-focused pacing & storytelling',
            'Thumbnail included',
            'Shorts/reel cutdowns included',
            '4K export supported',
            'Multiple file delivery',
            '3 revisions',
            'Delivered in 5 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Long Form',
          price: '₹1,999+',
          period: '/video (above 20 min)',
          bestFor: 'Documentary & long-form content',
          features: [
            'Pricing depends on: total duration, complexity, motion graphics, subtitles, effects required',
            'Chapter markers & timestamps',
            'Professional narration support',
            'Multi-scene organization',
            'Advanced color grading',
            'Full sound design',
            'Custom animations per request',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Same Day Delivery', price: '₹699' },
        { title: 'Extra Revision', price: '₹199/revision' },
        { title: 'Thumbnail Only', price: '₹149' },
        { title: 'Extra Shorts/Reel Cutdown', price: '₹199/video' },
        { title: 'Advanced Motion Graphics', price: '₹499' },
        { title: 'AI Voiceover Integration', price: '₹399' },
      ],
      importantNotes: [
        'Client provides raw footage',
        'Extra revisions cover major changes; ₹500 per revision after',
        'All music & SFX royalty-free & commercially licensed',
        'Timelines: 5-7 working days for Standard/Creative',
      ],
    },
    {
      id: 14,
      name: 'Product Promo Videos',
      category: 'other',
      faIcon: 'fa-video',
      categories: [
        {
          title: 'Standard',
          price: '₹999',
          period: '/video',
          bestFor: 'Product announcements',
          features: [
            'Clean product-focused editing',
            'Basic cuts & transitions',
            'Music sync',
            'Product text/highlights added',
            'Basic color correction',
            '1080p export',
            '1 aspect ratio delivered',
            'Reel OR story version',
            'Thumbnail/poster included',
            'No revisions',
            'Delivered in 3 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹1,999',
          period: '/video',
          bestFor: 'Conversion-focused promos',
          features: [
            'Cinematic transitions & speed ramping',
            'Product highlight animations',
            'Sound effects & music balancing',
            'Brand colors & logo integration',
            'Basic motion graphics',
            'Text animations added',
            'Multiple aspect ratios delivered',
            'Reel + story versions included',
            'Thumbnail/poster included',
            '2 revisions',
            'Delivered in 5 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹3,999',
          period: '/video',
          bestFor: 'Professional brand videos',
          features: [
            'Full cinematic product presentation',
            'Advanced motion graphics',
            'Cinematic color grading',
            'Hook-focused ad-style editing',
            'AI enhancement if required',
            'Logo animation included',
            'Product storytelling structure',
            'Sound design & premium transitions',
            '4K export supported',
            'Multiple aspect ratios delivered',
            'Reel + story + ad versions included',
            'Thumbnail/poster included',
            'Subtitles/captions supported',
            '3 revisions',
            'Delivered in 7 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Same Day Delivery', price: '₹699' },
        { title: 'Extra Revision', price: '₹199/revision' },
        { title: 'Advanced Logo Animation', price: '₹399' },
        { title: 'AI Voiceover Integration', price: '₹399' },
        { title: 'Extra Ad Version', price: '₹299/version' },
      ],
      importantNotes: [
        'Requires product description & images/footage',
        'Revisions: 24-48 hour turnaround',
        'Final deliverables: MP4 (1080p & 4K), social media cuts',
      ],
    },
    {
      id: 15,
      name: 'Corporate Video Editing',
      category: 'Design Services',
      faIcon: 'fa-building',
      categories: [
        {
          title: 'Standard',
          price: '₹1,499',
          period: '/video',
          bestFor: 'Internal communications',
          features: [
            'Clean cuts & transitions',
            'Background music added',
            'Basic subtitles/text',
            'Company logo placement',
            'Basic audio cleanup',
            '1080p export',
            '1 aspect ratio delivered',
            'Thumbnail/poster included',
            'No revisions',
            'Delivered in 4 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹2,999',
          period: '/video',
          bestFor: 'Employee trainings & testimonials',
          features: [
            'Smooth transitions & pacing',
            'Brand color integration',
            'Lower thirds & text animations',
            'Background music + sound balancing',
            'Interview/audio cleanup',
            'Motion graphics added',
            'Subtitle version included',
            'Social media cutdowns supported',
            'Multiple aspect ratios delivered',
            '2 revisions',
            'Delivered in 6 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹5,999',
          period: '/video',
          bestFor: 'High-end corporate productions',
          features: [
            'Cinematic corporate presentation',
            'Advanced motion graphics',
            'Logo animation included',
            'Presentation-style editing',
            'Cinematic color grading',
            'Stock footage integration if required',
            'Interview cleanup & professional sound',
            'Hook-focused business storytelling',
            '4K export supported',
            'Social media cutdowns included',
            'Presentation-ready delivery',
            'Multiple aspect ratios delivered',
            '3 revisions',
            'Delivered in 8 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Same Day Delivery', price: '₹999' },
        { title: 'Extra Revision', price: '₹299/revision' },
        { title: 'Additional Social Media Cutdown', price: '₹399/video' },
        { title: 'AI Voiceover Integration', price: '₹499' },
        { title: 'Advanced Logo Animation', price: '₹499' },
      ],
      importantNotes: [
        'Confidentiality agreement for corporate content',
        'Revision policy: Unlimited for Premium tier',
        'Deliverables: MP4, ProRes, project files',
      ],
    },
    {
      id: 16,
      name: 'Brand Identity Kits',
      category: 'other',
      faIcon: 'fa-palette',
      categories: [
        {
          title: 'Standard',
          price: '₹2,999',
          period: '/project',
          bestFor: 'New startups & small businesses',
          features: [
            '1 logo design concept',
            '2 logo variations',
            'Basic color palette',
            'Typography selection',
            'PNG/JPG delivery',
            'Transparent background files',
            'Social media profile logo setup',
            '1 revision',
            'Delivered in 3 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹5,999',
          period: '/project',
          bestFor: 'Established brands needing refresh',
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
            'Delivered in 5 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹9,999',
          period: '/project',
          bestFor: 'Complete brand ecosystem',
          features: [
            'Full brand identity system',
            'Modern startup/luxury logo design',
            'AI-assisted brand concepts',
            'Complete typography & color system',
            'Brand guideline PDF',
            'Business card + letterhead + invoice template',
            'Social media profile setup',
            'Social media templates',
            'Packaging concept designs',
            'Premium brand mockups',
            'Source files included',
            'Editable Canva link',
            '3 revisions',
            'Delivered in 7 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Logo Concept', price: '₹999/concept' },
        { title: 'Packaging Design', price: '₹1,499' },
        { title: 'Additional Social Media Templates', price: '₹499/set' },
        { title: 'Fast Delivery', price: '₹999' },
        { title: 'Advanced Brand Guideline PDF', price: '₹1,499' },
      ],
      importantNotes: [
        'All files delivered as: AI, PDF, PNG, SVG formats',
        'Brand guidelines provided as editable PDF',
        'Full copyright transferred to client',
        'Revision policy: ₹1,000 per revision after included rounds',
      ],
    },
    // ==================== SOCIAL MEDIA MANAGEMENT ====================
    {
      id: 17,
      name: 'Instagram Management',
      category: 'management',
      faIcon: 'fa-instagram',
      categories: [
        {
          title: 'Standard',
          price: '₹5,999',
          period: '/month',
          bestFor: 'Local businesses, small brands',
          features: [
            '8 Feed Designs/month (static + carousel)',
            '4 Reels/month',
            '8 Story Designs/month',
            'Caption writing',
            'Hashtag research',
            'Profile optimization',
            'Content planning',
            'Monthly content calendar',
            '1 revision round/content',
            'Monthly analytics report',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹11,999',
          period: '/month',
          bestFor: 'Growing businesses, startups, creators',
          features: [
            '15 Feed Designs/month',
            '8 Reels/month',
            '20 Story Designs/month',
            'Advanced content planning',
            'Caption writing',
            'Hashtag strategy',
            'Engagement support',
            'Profile optimization',
            'Highlight setup',
            'Monthly strategy consultation',
            '2 revision rounds/content',
            'Detailed analytics reporting',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹21,999',
          period: '/month',
          bestFor: 'Scalable brands, agencies, influencers',
          features: [
            '25 Feed Designs/month',
            '15 Reels/month',
            'Daily story support',
            'Full Instagram management',
            'Advanced strategy planning',
            'Engagement management',
            'Competitor analysis',
            'Premium profile optimization',
            'Campaign planning',
            'Monthly strategy meetings',
            'Priority support',
            '3 revision rounds/content',
            'Advanced analytics & growth reporting',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Sponsored Post Creation', price: '₹1,999' },
        { title: 'Influencer Campaign Setup', price: '₹4,999' },
        { title: 'Brand Audit Report', price: '₹2,999' },
        { title: 'Monthly Strategy Call', price: '₹1,499' },
      ],
      importantNotes: [
        'Response time: 24-48 hours for comments/DMs during business hours',
        'Posting schedule customizable based on brand needs',
        'Extra revisions: ₹99 per revision after included count',
      ],
    },
    {
      id: 18,
      name: 'X/Twitter Management',
      category: 'management',
      faIcon: 'fa-x-twitter',
      categories: [
        {
          title: 'Standard',
          price: '₹5,999',
          period: '/month',
          bestFor: 'Startup founders, personal brands',
          features: [
            '20 Tweets/month',
            'Basic thread content support',
            'Visual tweet creatives if required',
            'Caption/copywriting support',
            'Content planning',
            'Hashtag & keyword support',
            'Profile optimization',
            'Monthly content calendar',
            '1 revision round/content',
            'Monthly analytics report',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹10,999',
          period: '/month',
          bestFor: 'Founders, startups, agencies',
          features: [
            '40 Tweets/month',
            'Thread creation support',
            'Thought-leadership content',
            'Startup/tech content strategy',
            'Visual content support',
            'Advanced copywriting',
            'Engagement support',
            'Trend/topic research',
            'Profile optimization',
            'Strategy consultation',
            '2 revision rounds/content',
            'Detailed analytics reporting',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹19,999',
          period: '/month',
          bestFor: 'Startup founders, SaaS, AI brands',
          features: [
            'Full monthly content management',
            'Advanced thread strategy',
            'Founder positioning content',
            'Authority-building content system',
            'Full X/Twitter management',
            'Engagement & community support',
            'Trend monitoring',
            'Competitor analysis',
            'Personal brand positioning',
            'Campaign planning',
            'Monthly analytics & strategy insights',
            'Authority growth consultation',
            'Priority support',
            '3 revision rounds/content',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Tweet', price: '₹299' },
        { title: 'Premium Thread Creation', price: '₹999' },
        { title: 'Trend Analysis Report', price: '₹1,999' },
        { title: 'Influencer Outreach', price: '₹2,999' },
      ],
      importantNotes: [
        'Response time: 4-6 hours for mentions/DMs',
        'Posting time optimized based on audience analytics',
        'Threads: 5-15 tweets per thread',
        'Extra engagement beyond scope: ₹99 per 30 min engagement session',
      ],
    },
    {
      id: 19,
      name: 'YouTube Management',
      category: 'management',
      faIcon: 'fa-youtube',
      categories: [
        {
          title: 'Standard',
          price: '₹9,999',
          period: '/month',
          bestFor: 'New YouTube creators, educational channels',
          features: [
            '2-4 video edits/month (up to 10 min each)',
            'Video SEO optimization',
            'Thumbnail design (unique per video)',
            'Video descriptions & tags optimization',
            'YouTube shorts creation (2/month)',
            'Community tab management',
            'Basic analytics reports',
            'Channel growth strategy',
            '1 revision round per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹19,999',
          period: '/month',
          bestFor: 'Growing YouTube channels, entertainment creators',
          features: [
            '4-6 video edits/month (up to 20 min each)',
            'Advanced video SEO optimization',
            'Professional thumbnail design',
            'YouTube shorts (4-6/month)',
            'Video description copywriting',
            'Playlist organization & optimization',
            'Community engagement management',
            'Subscriber growth strategy',
            'Monthly performance analytics',
            'Collaboration outreach support',
            '2 revision rounds per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹34,999',
          period: '/month',
          bestFor: 'Established channels, monetized creators, brands',
          features: [
            '6-8 video edits/month (unlimited duration)',
            'Advanced video production support',
            'Professional thumbnail design & A/B testing',
            'YouTube shorts production (8-10/month)',
            'Video SEO strategy & optimization',
            'Advanced community management',
            'Subscriber growth & retention strategy',
            'Monetization optimization support',
            'Analytics deep-dive reports',
            'Collaboration & partnership outreach',
            'Channel branding & consistency',
            'Weekly performance tracking',
            '3 revision rounds per month',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Video Edit', price: '₹3,999/video' },
        { title: 'Shorts Production Package', price: '₹2,999/5 shorts' },
        { title: 'YouTube SEO Audit', price: '₹4,999' },
        { title: 'Collaboration Outreach', price: '₹3,999' },
        { title: 'Monetization Strategy', price: '₹7,999' },
        { title: 'Advanced Analytics Report', price: '₹2,999' },
      ],
      importantNotes: [
        'Channel owner must have 1,000+ subscribers for monetization support',
        'Video editing includes: cuts, transitions, music, subtitles',
        'Client provides raw footage or brief for shorts',
        'Delivery timelines: 3-5 days per video',
      ],
    },
    {
      id: 20,
      name: 'Facebook Management',
      category: 'management',
      faIcon: 'fa-facebook',
      categories: [
        {
          title: 'Standard',
          price: '₹5,999',
          period: '/month',
          bestFor: 'Local businesses, communities, events',
          features: [
            '4 Facebook posts/week',
            'Content calendar planning',
            'Community management & comments',
            'Basic engagement tracking',
            'Audience insights reports',
            'Event promotion support',
            'Group management if required',
            '1 revision round per month',
            'Delivered within 24 hours',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹11,999',
          period: '/month',
          bestFor: 'Growing businesses, restaurants, retail',
          features: [
            '8 Facebook posts/week',
            'Custom graphics & visuals per post',
            'Video content support (1-2 per week)',
            'Community management & comments',
            'Engagement strategy planning',
            'Lead generation support',
            'Monthly performance reports',
            'Event & promotional campaigns',
            '2 revision rounds per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹21,999',
          period: '/month',
          bestFor: 'Established businesses, e-commerce, brands',
          features: [
            '15 Facebook posts/week',
            'High-quality custom graphics & videos',
            'Advanced community management',
            'Lead generation & conversion focus',
            'Weekly engagement tracking',
            'Paid ad strategy & recommendations',
            'Facebook Live sessions (1-2 per month)',
            'Carousel & story ads optimization',
            'Monthly strategy & growth reports',
            '3 revision rounds per month',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Extra Post', price: '₹499/post' },
        { title: 'Paid Ad Management', price: '₹5,999/month' },
        { title: 'Video Creation', price: '₹1,999/video' },
        { title: 'Extra Engagement Support', price: '₹999/session' },
      ],
      importantNotes: [
        'Pricing is for organic content management only',
        'Paid ad budget not included (can assist with strategy)',
        'Facebook Page admin access required',
      ],
    },
    {
      id: 21,
      name: 'LinkedIn Management',
      category: 'management',
      faIcon: 'fa-linkedin',
      categories: [
        {
          title: 'Standard',
          price: '₹7,999',
          period: '/month',
          bestFor: 'Professionals, consultants, B2B startups',
          features: [
            '8 LinkedIn posts/month',
            'Professional content strategy',
            'Industry insights sharing',
            'Network engagement support',
            'Profile optimization',
            'Comment & message management',
            'Basic analytics reports',
            '1 revision round per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹14,999',
          period: '/month',
          bestFor: 'B2B companies, thought leaders, agencies',
          features: [
            '16 LinkedIn posts/month',
            'Long-form articles (2/month)',
            'Professional graphics & infographics',
            'Thought leadership content',
            'Industry connections & outreach',
            'Lead generation support',
            'LinkedIn engagement strategy',
            'Weekly performance tracking',
            'Monthly insights reports',
            '2 revision rounds per month',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹24,999',
          period: '/month',
          bestFor: 'Enterprise, consulting firms, industry leaders',
          features: [
            '30 LinkedIn posts/month',
            'Long-form articles (4/month)',
            'Advanced graphics & video content',
            'Thought leadership positioning',
            'LinkedIn Live events (1-2 per month)',
            'Lead generation & conversion focus',
            'Network expansion strategy',
            'Advanced analytics & insights',
            'Paid LinkedIn ad strategy',
            'Monthly strategy & growth reports',
            '3 revision rounds per month',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'LinkedIn Article', price: '₹2,499/article' },
        { title: 'LinkedIn Live Event', price: '₹4,999/event' },
        { title: 'Professional Graphics', price: '₹999/graphic' },
        { title: 'Lead Generation Campaign', price: '₹7,999' },
        { title: 'Paid LinkedIn Ads', price: '₹9,999/month' },
      ],
      importantNotes: [
        'LinkedIn Page admin access required',
        'Content focused on professional & B2B topics',
        'Results depend on network size and industry',
        'Paid ad budget not included',
      ],
    },
    {
      id: 22,
      name: 'Instagram + Facebook Combo',
      category: 'management',
      faIcon: 'fa-link',
      categories: [
        {
          title: 'Standard Combo',
          price: '₹9,999',
          period: '/month',
          bestFor: 'Local businesses, cafes, salons',
          features: [
            'Instagram: 8 Feed/month + 4 Reels + 8 Stories',
            'Facebook: 3 posts/week',
            'Cross-platform content strategy',
            'Community management on both',
            'Basic engagement tracking',
            'Monthly reports for both platforms',
            '1 revision round/content',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Combo',
          price: '₹18,999',
          period: '/month',
          bestFor: 'Growing brands, startups, real estate',
          features: [
            'Instagram: 15 Feed/month + 8 Reels + 20 Stories',
            'Facebook: 5 posts/week',
            'Cross-platform campaign strategy',
            'Dedicated community management',
            'Influencer collaboration outreach',
            'Bi-weekly performance reports',
            'Ad strategy consultation',
            '2 revision rounds/content',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Combo',
          price: '₹34,999',
          period: '/month',
          bestFor: 'Premium businesses, multi-location brands',
          features: [
            'Instagram: 25 Feed/month + 15 Reels + Daily Stories',
            'Facebook: 7 posts/week',
            'YouTube content repurposing (video strategy)',
            'Advanced cross-platform campaign strategy',
            '24/7 community management',
            'Crisis management support',
            'Weekly strategy calls',
            'Unlimited revisions',
            '3 revision rounds/content',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional Platform Add-on', price: '₹4,999' },
        { title: 'Paid Ad Management', price: '₹5,999' },
        { title: 'Content Calendar Planning', price: '₹1,999' },
      ],
      importantNotes: [
        'Combo package includes coordinated content strategy',
        'All add-ons from individual services apply',
        'Performance reports cover both platforms',
      ],
    },
    {
      id: 23,
      name: 'Instagram + Facebook + YouTube',
      category: 'management',
      faIcon: 'fa-cube',
      categories: [
        {
          title: 'Standard Growth Plan',
          price: '₹14,999',
          period: '/month',
          bestFor: 'Creators, educational brands, restaurants',
          features: [
            'Instagram: 20 Feed/month',
            '8 Reels + 4 YouTube Videos/month',
            '20 Story Designs/month',
            'Caption writing',
            'SEO basics for YouTube',
            'Hashtag strategy',
            'Content planning',
            'Monthly content calendar',
            '1 revision round/content',
            'Monthly analytics report',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative Growth Plan',
          price: '₹27,999',
          period: '/month',
          bestFor: 'Podcasts, startups, creators, agencies',
          features: [
            'Instagram: 35 Feed/month',
            '15 Reels + 8 YouTube Videos/month',
            'Daily story support',
            'Advanced content strategy',
            'Thumbnail management',
            'SEO optimization',
            'Engagement support',
            'Profile/channel optimization',
            '2 revision rounds/content',
            'Detailed analytics reporting',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium Ecosystem Plan',
          price: '₹49,999',
          period: '/month',
          bestFor: 'Premium creators, growing brands, startups',
          features: [
            'Full monthly content ecosystem management',
            'Consistent reel & YouTube management',
            'Daily story support & engagement',
            'Full account/channel handling',
            'SEO & strategy support',
            'Campaign planning',
            'Competitor analysis',
            'Brand consistency management',
            'Monthly strategy meetings',
            'Advanced growth reporting',
            'Audience growth insights',
            'Priority support',
            '3 revision rounds/content',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional Platform (TikTok/LinkedIn)', price: '₹6,999' },
        { title: 'Paid Ad Management (all platforms)', price: '₹7,999' },
        { title: 'Video Production (per video)', price: '₹2,999' },
      ],
      importantNotes: [
        'Unified content strategy across all three major platforms',
        'Content optimized for each platform with brand consistency',
        'Performance metrics tracked separately for each platform',
      ],
    },
    {
      id: 24,
      name: 'Master Brand Ecosystem Plan',
      category: 'management',
      faIcon: 'fa-crown',
      categories: [
        {
          title: 'Ultimate',
          price: '₹89,999',
          period: '/month',
          bestFor: 'Complete brand presence across all channels',
          features: [
            'Instagram: Unlimited posts + 4 Reels/month',
            'Facebook: Unlimited posts + videos',
            'YouTube: 2-4 videos/month with full editing',
            'TikTok: 3-5 videos/week',
            'LinkedIn: Professional content (5 posts/week)',
            'Website blog: 4 articles/month (SEO optimized)',
            'Email newsletters: 2/month',
            'Brand consistency audit quarterly',
            'Paid ad management (all platforms)',
            'Community management 24/7',
            'Monthly brand strategy calls',
            'Crisis management & support',
            'Performance analytics & reporting (weekly)',
            'Influencer & partnership coordination',
            'Content calendar management',
            'Unlimited revisions',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Video Production (per video)', price: '₹4,999' },
        { title: 'Photography Shoot', price: '₹9,999' },
        { title: 'Website Redesign', price: '₹29,999' },
        { title: 'Brand Consultation Session', price: '₹2,999' },
      ],
      importantNotes: [
        'Most comprehensive package covering entire digital presence',
        'All content creation, management, and strategy included',
        'Perfect for growing businesses wanting unified brand presence',
        'Custom adjustments available based on business goals',
      ],
    },
    // ==================== AI SERVICES ====================
    {
      id: 25,
      name: 'AI Creative Services',
      category: 'other',
      faIcon: 'fa-wand-magic-sparkles',
      categories: [
        {
          title: 'Standard',
          price: '₹10,999',
          period: '/project',
          bestFor: 'Local brands, creators, cafes',
          features: [
            'AI image generation',
            'AI social media creatives',
            'AI poster/banner concepts',
            'Basic AI product mockups',
            'AI background generation',
            'High-resolution PNG/JPG delivery',
            'Social media-ready sizes',
            '1 revision round',
            'Delivered in 2–4 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹19,999',
          period: '/project',
          bestFor: 'Product brands, clothing, startups, e-commerce',
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
            'Delivered in 5–7 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹39,999',
          period: '/project',
          bestFor: 'Premium brands, high-growth startups, agencies',
          features: [
            'Full AI-powered creative direction',
            'Premium AI branding concepts',
            'Advanced product mockups',
            'AI advertisement campaign creatives',
            'AI-enhanced visual systems',
            'Multiple AI-generated campaign variations',
            'Social media + ad-ready delivery',
            'Editable Canva support',
            'High-resolution commercial delivery',
            'Prompt support/workflow guidance',
            'Priority support',
            '3 revision rounds',
            'Delivered in 7–12 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional AI Creative Variation', price: '₹999/design' },
        { title: 'Advanced AI Product Mockup', price: '₹2,499' },
        { title: 'Editable Canva Package', price: '₹2,999' },
        { title: 'Fast Delivery', price: '₹4,999' },
        { title: 'AI Campaign Creative Set', price: '₹7,999' },
      ],
      importantNotes: [
        'Commercial rights: All AI-generated content is commercially licensable',
        'Revisions: AI content can be regenerated unlimited times',
        'Quality control: All content reviewed before delivery',
      ],
    },
    {
      id: 26,
      name: 'AI Video & Audio Services',
      category: 'other',
      faIcon: 'fa-microphone',
      categories: [
        {
          title: 'Standard',
          price: '₹9,999',
          period: '/project',
          bestFor: 'Creators needing voiceovers, podcasts',
          features: [
            'AI voiceover generation (5 videos/month)',
            'Multiple voice options',
            'Background music selection',
            'Auto-subtitle generation',
            'Noise reduction',
            '1080p export',
            'Social media-ready formats',
            '1 revision round',
            'Delivered in 2–5 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹19,999',
          period: '/project',
          bestFor: 'YouTubers, startups, agencies, educators',
          features: [
            'AI voiceover (15 videos/month)',
            'Professional voice actors (AI)',
            'Sound design automation',
            'Music generation (royalty-free)',
            'Podcast editing automation',
            'Transcription service',
            'Dubbing support',
            '4K export support',
            'Multiple social media versions',
            'Audio-enhanced exports',
            '2 revision rounds',
            'Delivered in 5–8 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹39,999',
          period: '/project',
          bestFor: 'Agencies, premium creators, studios, podcasts',
          features: [
            'Premium AI cinematic enhancement',
            'AI upscaling & restoration',
            'AI dubbing support',
            'AI voiceover system',
            'AI subtitle generation system',
            'Advanced AI audio enhancement',
            'Multi-platform export delivery',
            '1080p + 4K exports',
            'Social media-ready versions',
            'AI-enhanced commercial delivery',
            'Workflow/prompt guidance',
            'Priority support',
            '3 revision rounds',
            'Delivered in 7–12 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional AI Voiceover', price: '₹1,999' },
        { title: 'AI Dubbing Support', price: '₹3,999' },
        { title: 'Advanced AI Upscaling', price: '₹4,999' },
        { title: 'Fast Delivery', price: '₹5,999' },
        { title: 'Multi-Language Subtitle Pack', price: '₹2,999' },
      ],
      importantNotes: [
        'AI Enhancement Note: Final quality may vary based on source footage',
        'Commercial usage rights apply after final payment',
        'Major style changes after approval may incur additional charges',
      ],
    },
    {
      id: 27,
      name: 'AI Business Solutions',
      category: 'other',
      faIcon: 'fa-robot',
      categories: [
        {
          title: 'Standard',
          price: '₹24,999',
          period: '/project',
          bestFor: 'Local businesses, startups, creators',
          features: [
            'AI chatbot integration',
            'Basic AI workflow automation',
            'AI customer support setup',
            'AI content automation support',
            'Basic CRM/API integration',
            'Admin access setup',
            'Training/support guidance',
            'Basic documentation',
            '1 revision/support round',
            'Delivered in 7–12 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Creative',
          price: '₹49,999',
          period: '/project',
          bestFor: 'Startups, agencies, e-commerce, consultants',
          features: [
            'Advanced AI chatbot setup',
            'AI lead generation workflows',
            'AI WhatsApp automation',
            'AI scheduling systems',
            'CRM integrations',
            'Automation workflow systems',
            'AI business assistant setup',
            'Analytics/reporting support',
            'Admin access & workflow setup',
            'Documentation included',
            'Training/support included',
            '2 revision/support rounds',
            'Delivered in 15–25 days',
          ],
          technicalStructure: null,
        },
        {
          title: 'Premium',
          price: '₹99,999',
          period: '/project',
          bestFor: 'SaaS, agencies, scalable startups, high-growth businesses',
          features: [
            'Custom AI business systems',
            'Advanced chatbot ecosystem',
            'AI workflow automation systems',
            'AI-powered dashboards',
            'Multi-platform AI integrations',
            'AI CRM & automation ecosystem',
            'Advanced API/webhook integrations',
            'AI business assistant system',
            'Scalable automation infrastructure',
            'Admin/dashboard access',
            'Full documentation included',
            'Training/support included',
            'Priority support',
            '3 revision/support rounds',
            'Delivered in 30–45 days',
          ],
          technicalStructure: null,
        },
      ],
      addOns: [
        { title: 'Additional AI Workflow', price: '₹7,999' },
        { title: 'Advanced WhatsApp Automation', price: '₹9,999' },
        { title: 'Additional API Integration', price: '₹5,999' },
        { title: 'AI Dashboard Module', price: '₹12,999' },
        { title: 'Monthly AI Maintenance', price: '₹9,999/month' },
        { title: 'Fast Delivery', price: '₹14,999' },
      ],
      importantNotes: [
        'API subscriptions, OpenAI usage, hosting charges not included',
        'Final automation capabilities may vary by platform/API limitations',
        'Major workflow changes after approval may include additional charges',
      ],
    },
  ];

  const toggleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="services-info py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services & Pricing</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete digital solutions with transparent pricing. Explore our services and find the perfect fit for your needs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { id: 'management', label: 'Management', icon: 'fa-chart-line' },
              { id: 'posts', label: 'Posts', icon: 'fa-image' },
              { id: 'reels', label: 'Reels', icon: 'fa-film' },
              { id: 'stories', label: 'Stories', icon: 'fa-rectangle-landscape' },
              { id: 'youtube', label: 'YouTube', icon: 'fa-youtube' },
              { id: 'website', label: 'Website', icon: 'fa-globe' },
              { id: 'other', label: 'Other', icon: 'fa-ellipsis' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedService(null);
                }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-400/50 hover:bg-gray-700/50'
                }`}
              >
                <i className={`fas ${tab.icon}`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services
            .filter((service) => service.category === activeTab)
            .map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300"
            >
              {/* Service Header (Click to expand) */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-gray-700/30 transition-colors text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-blue-400 text-2xl mt-1">
                    <FAIcon icon={service.faIcon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-sm text-blue-300">{service.category}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-xl"
                >
                  <i className="fas fa-chevron-down"></i>
                </motion.div>
              </button>

              {/* Service Details (Expandable) */}
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700 overflow-hidden"
                  >
                    <div className="p-6 space-y-6">
                      {/* Pricing Tiers */}
                      <div className="space-y-4">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider">Pricing & Features</h4>
                        {service.categories.map((tier, idx) => (
                          <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                              <h5 className="text-blue-300 font-semibold">{tier.title}</h5>
                              <div className="text-right">
                                <div className="text-white font-bold text-lg">{tier.price}</div>
                                {tier.period && <div className="text-xs text-gray-400">{tier.period}</div>}
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">{tier.bestFor}</p>
                            <ul className="space-y-2">
                              {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                  <i className="fas fa-check text-blue-400 mt-1 flex-shrink-0"></i>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Add-ons */}
                      {service.addOns && service.addOns.length > 0 && (
                        <div className="pt-4 border-t border-gray-700">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Add-ons</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {service.addOns.map((addon, idx) => (
                              <div key={idx} className="bg-gray-900/50 p-3 rounded border border-gray-700">
                                <p className="text-sm text-gray-300">{addon.title}</p>
                                <p className="text-blue-300 font-semibold text-sm">{addon.price}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Important Notes */}
                      {service.importantNotes && service.importantNotes.length > 0 && (
                        <div className="pt-4 border-t border-gray-700">
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Important Notes</h4>
                          <ul className="space-y-2">
                            {service.importantNotes.map((note, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <i className="fas fa-info-circle text-yellow-400 mt-0.5 flex-shrink-0"></i>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your brand?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get in touch today for a free consultation and discover how we can help your business grow.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FAIcon icon="fa-whatsapp" /> WhatsApp Us
            </a>
            <a
              href="mailto:contact@macflix.com"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FAIcon icon="fa-envelope" /> Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesInfo;
