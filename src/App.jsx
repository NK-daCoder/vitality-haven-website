import React from 'react';
import {
  cutOut,
  socialMediaIcons,
  vitalityHaven,
  vitalityHavenLogo,
  websiteLinks,
} from './constants/data';
import './assets/styles/effect.css';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import { DesktopNavigation } from './Components/Navigation';

const Layout = () => {

  return (
    <>
      <DesktopNavigation
        logo={[
          {
            logo: vitalityHavenLogo.mainLogoWhite,
            text: 'Vitality Haven',
          },
        ]}
        primaryLinks={ websiteLinks.primaryLinks }
        secondaryLinks={ websiteLinks.seconaryLinks }
        elementOnHover={true}
      />
      

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
