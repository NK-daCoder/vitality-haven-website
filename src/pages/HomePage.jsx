import React from 'react'
import { AboutSection, BlogSection, ContactUsSection, FooterSection, HeroSection, LocationSection, MobileAppSection, OurPlans, ServicesSection, TestimonialsSection, WhyUsSection } from '../Components/Sections'
import { cutOut, socialMediaIcons, vitalityHaven } from '../constants/data'

const HomePage = () => {
  return (
    <article>
        <HeroSection 
            ourMedias={ socialMediaIcons } 
            video={{
            webm: '/path/to/video.webm',
            mp4: './src/assets/video/promotional-video.mp4'
            }}
            subHeadingText={ vitalityHaven.gymInfo.description }
            backgroundImage="https://img.freepik.com/premium-photo/man-s-woman-s-fitness_257123-14155.jpg?w=996"
            hasVideo={false}
            onHover={true}

            mainHeading={ vitalityHaven.gymInfo.slogan }

            renderCompanies={
            <ul className='flex justify-between w-full z-20 absolute bottom-0 items-center'>
                {
                vitalityHaven.trustedCompanies.map((item, index) => {
                    return (
                    <li key={index}>
                        <img src={item.logo} alt={item.name} className='w-[5.5rem] image-filter-white'/>
                    </li>
                    )
                })
                }
            </ul>
            }
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

      <WhyUsSection 
        title={"Why Choose Us"} 
        subTitle={"We don’t just offer a place to train — we offer a better way to live."} 
        subText={"Let’s get real about why Vitality Haven Health Club isn’t just another gym, but a solution to everything that’s broken in the modern fitness industry. This isn’t about flashy equipment or cookie-cutter classes—this is about solving actual problems people face daily when they try to take control of their health."}

        primaryImage={cutOut.womenBodyBuilder}

        listOne={ vitalityHaven.gymInfo.sellingPoints.problemsWithGymHeatlthClubs }
        listTwo={ vitalityHaven.gymInfo.sellingPoints.vitalityHavenSolution }


      />

      <TestimonialsSection 
        title={"Real Transformations, Real Stories"} 
        subTitle={
          "Join Thousands Who Found Their Strength at Vitality Haven"
        }
        subText={
          `From executives rebuilding their health after decades at a desk to new moms regaining 
          their strength, from cancer survivors reclaiming mobility to athletes breaking through 
          plateaus our members’ journeys inspire us every day. With 24/7 access for night shift 
          workers, medical-grade rehab programs, and specialized training for every life stage, we 
          don’t just change bodies we change lives. See how our award-winning trainers, science-backed
           programs, and supportive community help people surpass their limits. Whether you’re 
           recovering from injury, preparing for a marathon, or taking your first fitness steps, 
           your transformation starts here.`
        }
        data={ vitalityHaven.testimonials }
      />

      <OurPlans 
        title={"Membership Options"} 
        subTitle={"Elevate Your Fitness Journey"} 
        subText={
          "Choose the perfect plan to match your goals and lifestyle. " +
          "All memberships include access to our world-class facilities, " +
          "expert trainers, and a supportive community to keep you motivated."
        } 
        priceData={vitalityHaven.membershipPlans}
      />

      <LocationSection 
        title={"Our Location"} 
        subTitle={"Our Global Presence: Fitness Centers Around The World"} 
        subText={"No matter where you are our gyms are here to help you reach your fitness goals. With location across the globe. findig a gym near you is easy. Explore our map and join our wold wide community Today."} 
        numberOfLocations={ vitalityHaven.gymInfo.gymStats.locations.length }
      />

      <ContactUsSection 
        title={"contact us"} 
        subTitle={"Dont be shy. Come Say hello to Us"} 
        subText={""}
        data={ vitalityHaven.contact }
      />

      <BlogSection 
        title={"Latest Blogs"} 
        subTitle={"We’re not just about fitness — we’re about connection, knowledge, and growth"} 
        subText={
          "Science meets sweat. Explore practical health tips, mental hacks, and the truth behind the trends—straight from our community and experts."
        }
        blogPosts={ vitalityHaven.blogPosts }        
      />


      <MobileAppSection 
        title="MOBILE APP" 
        subTitle="Your Fitness Journey In Your Pocket" 
        subText="Access all Vitality Haven features anytime, anywhere with our powerful mobile application."
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

export default HomePage