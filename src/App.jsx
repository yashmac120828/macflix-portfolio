import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from "./components/Testimonials"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}