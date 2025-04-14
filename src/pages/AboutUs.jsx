import React from 'react'
import { HeroSection, OurFoundersSection, OurJourneyToHolisticWellbeingSection, OurMissionSection, OurSystemSection, OurVisionSection } from '../Components/About/Sections'
import { cutOut, vitalityHaven } from '../constants/data.js'
import { FooterSection } from '../Components/Sections'

const AboutUs = () => {
  return (
    <article className=''>
        <HeroSection
          title={ vitalityHaven.gymInfo.sellingPoints.ourStory.title } 
          subtext={ vitalityHaven.gymInfo.sellingPoints.ourStory.content } 
          statistics={ vitalityHaven.gymInfo.gymStats } 
          decorationImage={ cutOut.gymCouple }
          partners={ vitalityHaven.trustedCompanies }
        />

        <OurFoundersSection 
          title={ "Our Team" } 
          subtext={ "Meet our esteemed founders" } 
          data={ vitalityHaven.gymInfo.sellingPoints.ourFounders }
        />

        <OurMissionSection 
          title={ vitalityHaven.gymInfo.sellingPoints.mission.title } 
          secondaryTitle={vitalityHaven.gymInfo.sellingPoints.mission.whatGymsFocusOn.title}
          subtext={ vitalityHaven.gymInfo.sellingPoints.mission.quote } 
          secondarySubText={ vitalityHaven.gymInfo.sellingPoints.mission.whatGymsFocusOn.subText }
          dataList={ vitalityHaven.gymInfo.sellingPoints.mission.whatGymsFocusOn.list } 
        />

        <OurVisionSection
          data={vitalityHaven.gymInfo.sellingPoints.ourVision} 
        />

        <OurJourneyToHolisticWellbeingSection 
          data={ vitalityHaven.gymInfo.sellingPoints.whatLeadToTheirApproach }
        />

        <OurSystemSection 
          data={ vitalityHaven.gymInfo.sellingPoints.neuroscienceResearch }
        />

        <FooterSection 
          quickLinks={vitalityHaven.footerContent.quickLinks}
          contactInfo={vitalityHaven.footerContent.contactInfo}
          careers={vitalityHaven.footerContent.careers.currentOpenings}
          legal={vitalityHaven.footerContent.legal}
          newsletter={vitalityHaven.footerContent.newsletter}
          mobileApp={vitalityHaven.footerContent.appDownload}
        />
    </article>
  )
}

export default AboutUs