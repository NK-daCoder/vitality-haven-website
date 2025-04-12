import React from 'react'
import { cutOut, socialMediaIcons, vitalityHaven, vitalityHavenLogo } from './constants/data';
import { DesktopNavigation } from './Components/Navigation';
import "./assets/styles/effect.css"
import { AboutSection, BlogSection, FooterSection, HeroSection, LocationSection, MobileAppSection, OurPlans, ServicesSection, TestimonialsSection, WhyUsSection } from './Components/Sections';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <DesktopNavigation
          logo={[
            {
              logo: vitalityHavenLogo.mainLogoWhite,
              text: "Vitality Haven"
            }
          ]}
          primaryLinks={[
            { text: 'Home', url: '/' },
            { text: 'About Us', url: '/pages/about-us' },
            { text: 'Services', url: '/services' },
            { text: 'Blog', url: '/blog' },
            { text: "Courses", url: "/courses" },
            { text: "Shop", url: "/shop" },
          ]}
          secondaryLinks={[
            { text: "Contact", url: "/contact", styles: "text-sm" },
            { text: "Join Us", url: "/join", styles: "px-4 py-3 rounded-[20px] font-semibold text-white bg-gradient-to-br from-orange-400 via-orange-300 to-orange-400 shadow-[0_8px_0px_-3px_rgba(0,0,0,0.1),inset_0_-5px_0px_-3px_rgba(0,0,0,0.1),inset_0_5px_0px_-3px_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-[0_4px_0px_-3px_rgba(0,0,0,0.1)] active:translate-y-2 active:shadow-[0_2px_0px_-3px_rgba(0,0,0,0.1)] transition-all duration-100"}
          ]}
          elementOnHover={true}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          <Route path="/services" element={<AboutUs />} />
          <Route path="/courses" element={<AboutUs />} />
          <Route path="/shop" element={<AboutUs />} />
          <Route path="/contact" element={<AboutUs />} />
          <Route path="/join" element={<AboutUs />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
