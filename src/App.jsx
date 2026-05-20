import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from "./components/Testimonials";
import TestimonialPopup from './components/TestimonialPopup';
import WhyMacflix from './components/WhyMacflix';
import ResultsNotServices from './components/ResultsNotServices';
import ServiceExplorer from './components/ServiceExplorer';
import PackageMatcher from './components/PackageMatcher';
import LeadForm from './components/LeadForm';
import ConsultationBooking from './components/ConsultationBooking';
import { LeadProvider } from './context/LeadContext';
import ServicesInfo from './components/ServicesInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [showTestimonialPopup, setShowTestimonialPopup] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenTestimonialPopup')
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds delay for better UX
      const timer = setTimeout(() => {
        setShowTestimonialPopup(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosePopup = () => {
    setShowTestimonialPopup(false)
    // Mark that user has seen the popup
    localStorage.setItem('hasSeenTestimonialPopup', 'true')
  }

  const HomePage = () => (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      
      
      {/* NEW: Premium Lead Generation Funnel */}
      <WhyMacflix />
      <ResultsNotServices />
      <ServiceExplorer />
      <PackageMatcher />
      <LeadForm />
      <ConsultationBooking />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
      <TestimonialPopup 
        isVisible={showTestimonialPopup}
        onClose={handleClosePopup}
      />
    </div>
  );

  return (
    <LeadProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services-info" element={<ServicesInfo />} />
        </Routes>
      </Router>
    </LeadProvider>
  )
}