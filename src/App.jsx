import React from 'react'
import { socialMediaIcons, vitalityHaven, vitalityHavenLogo } from './constants/data';
import { DesktopNavigation } from './Components/Navigation';
import HeroSection from './Components/HeroSection';

const App = () => {
  return (
    <>

      <DesktopNavigation
        logo={[
          {
            logo: vitalityHavenLogo.mainLogoWhite,
            text: "Vitality Haven"
          }
        ]}

        primaryLinks={[
          { text: 'Home', url: '/' },
          { text: 'About Us', url: '' },
          { text: 'Services', url: '' },
          { text: 'Blog', url: '' },
          { text: "Courses", url: "" },
          { text: "Shop", url: "" },
        ]}

        secondaryLinks={[
          { text: "Contact", url: "", styles: "text-sm"},
          { text: "Join Us", url: "", styles: "px-4 py-3 rounded-2xl font-semibold text-white bg-gradient-to-bl from-orange-500 to-orange-200 shadow-md"}
        ]}

        elementOnHover={true}
      />

      <HeroSection 
        ourMedias={ socialMediaIcons } 
        video={{
          webm: '/path/to/video.webm',
          mp4: './src/assets/video/promotional-video.mp4'
        }}
        backgroundImage="https://t3.ftcdn.net/jpg/03/14/89/52/360_F_314895284_4Fc8f6bMMtls1iG5vCClOQhYyEzM4xky.jpg"
        hasVideo={false}
        onHover={true}

        mainHeading={ vitalityHaven.gymInfo.slogan }
      />




    </>
  )
}

export default App
