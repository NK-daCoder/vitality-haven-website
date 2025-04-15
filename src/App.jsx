import React from 'react';
import {
  cutOut,
  socialMediaIcons,
  vitalityHaven,
  vitalityHavenLogo,
} from './constants/data';
import './assets/styles/effect.css';
import {
  AboutSection,
  BlogSection,
  FooterSection,
  HeroSection,
  LocationSection,
  MobileAppSection,
  OurPlans,
  ServicesSection,
  TestimonialsSection,
  WhyUsSection,
} from './Components/Sections';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import { DesktopNavigation } from './Components/Navigation';

const Layout = () => {
  {/* rendering nav components where necessary */}
  const location = useLocation();
  {/* allows the nav not to apear in certain locations in the array */}
  const hideNavRoutes = ['/pages/blog'];

  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNav && (
        <DesktopNavigation
          logo={[
            {
              logo: vitalityHavenLogo.mainLogoWhite,
              text: 'Vitality Haven',
            },
          ]}
          primaryLinks={[
            { text: 'Home', url: '/' },
            { text: 'About Us', url: '/pages/about-us' },
            { text: 'Blog', url: '/pages/blog' },
            { text: 'Courses', url: '/courses' },
            { text: 'Shop', url: '/shop' },
          ]}
          secondaryLinks={[
            {
              text: 'Contact',
              url: '/contact',
              styles: 'text-sm',
            },
            {
              text: 'Join Us',
              url: '/join',
              styles:
                'px-4 py-3 rounded-[20px] font-semibold text-white bg-gradient-to-br from-orange-400 via-orange-300 to-orange-400 shadow-[0_8px_0px_-3px_rgba(0,0,0,0.1),inset_0_-5px_0px_-3px_rgba(0,0,0,0.1),inset_0_5px_0px_-3px_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-[0_4px_0px_-3px_rgba(0,0,0,0.1)] active:translate-y-2 active:shadow-[0_2px_0px_-3px_rgba(0,0,0,0.1)] transition-all duration-100',
            },
          ]}
          elementOnHover={true}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about-us" element={<AboutUs />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/courses" element={<AboutUs />} />
        <Route path="/shop" element={<AboutUs />} />
        <Route path="/contact" element={<AboutUs />} />
        <Route path="/join" element={<AboutUs />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
