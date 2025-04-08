import React from 'react'
import { socialMediaIcons, vitalityHaven, vitalityHavenLogo } from './constants/data';
import { DesktopNavigation } from './Components/Navigation';
import { AboutSection, CompaniesSection, HeroSection, ServicesSection, TestimonialsSection, WhyUsSection } from './Components/Sections';


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
          { text: "Join Us", url: "", styles: "px-4 py-3 rounded-[20px] font-semibold text-white bg-gradient-to-br from-orange-400 via-orange-300 to-orange-400 shadow-[0_8px_0px_-3px_rgba(0,0,0,0.1),inset_0_-5px_0px_-3px_rgba(0,0,0,0.1),inset_0_5px_0px_-3px_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-[0_4px_0px_-3px_rgba(0,0,0,0.1)] active:translate-y-2 active:shadow-[0_2px_0px_-3px_rgba(0,0,0,0.1)] transition-all duration-100"}
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
        style={"z-10"}
      />

      <ServicesSection 
        title={"Our Services"} 
        subTitle={"unleash your potential: premium fitness services tailored for you"} 
        subText={"At Vitality Haven. we offer personalized fitness services to help you reach your goals"} 
        services={ vitalityHaven.services }
      />

      <WhyUsSection />

      <TestimonialsSection 
        title={"Testamonials"} 
        subTitle={"Don't take our world for it: believe the people"}
        subText={"Our people are our proud treasure"}
        data={ vitalityHaven.testimonials }
      />
      
    </>
  )
}

export default App
