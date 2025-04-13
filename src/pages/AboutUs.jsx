import React from 'react'
import { HeroSection, OurFoundersSection } from '../Components/About/Sections'
import { cutOut, vitalityHaven } from '../constants/data.js'

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
    </article>
  )
}

export default AboutUs