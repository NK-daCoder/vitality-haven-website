import React from 'react'
import { HeroSections } from '../Components/Blog/Sections'
import { vitalityHaven } from '../constants/data'
import { FooterSection } from '../Components/Sections'

const Blog = () => {
  return (
    <article className='bg-zinc-950 h-screen'>
      <HeroSections 
        data={ vitalityHaven.blogPosts }
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

export default Blog