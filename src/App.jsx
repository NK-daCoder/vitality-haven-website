import React from 'react'
import { socialMediaIcons, vitalityHaven, vitalityHavenLogo } from './constants/data';
import { DesktopNavigation } from './Components/Navigation';
import { AboutSection, CompaniesSection, HeroSection } from './Components/Sections';

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
        backgroundImage="https://img.freepik.com/premium-photo/man-s-woman-s-fitness_257123-14155.jpg?w=996"
        hasVideo={false}
        onHover={true}

        mainHeading={ vitalityHaven.gymInfo.slogan }
      />

      <CompaniesSection 
        trustedCompanies={vitalityHaven.trustedCompanies}
      />

      <AboutSection 
        title={"About Us"} 
        subTitle={"Your Fitness Journey Starts Here"}
        subText={vitalityHaven.gymInfo.description}
        statistics={{
          yearsInBusiness: vitalityHaven.gymInfo.gymStats.yearsInBusiness,
          totalMembers: vitalityHaven.gymInfo.gymStats.members,
          expertTrainers: vitalityHaven.gymInfo.gymStats.expertTrainers,
          weeklyClasses: vitalityHaven.gymInfo.gymStats.weeklyClasses,
          founded: vitalityHaven.gymInfo.gymStats.founded
        }}
        videoSource={"./src/assets/video/promotional-video.mp4"}
      />


    </>
  )
}

export default App
