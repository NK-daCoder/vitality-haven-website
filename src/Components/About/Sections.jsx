import React, { useEffect, useRef, useState } from 'react'
import GradientCircle from '../GradientCircle'
import "../../assets/styles/effect.css"
import { FoundersCard } from '../Card'

const HeroSection = ({ title, subtext, statistics, decorationImage, partners }) => {
  return (
    <article 
      className='relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 md:px-16 overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white'
      aria-label='hero section'
    >

      {/* Left Content */}
      <section className='flex flex-col gap-6 max-w-xl z-20'>
        <h1 className='text-4xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-100'>
          {title}
        </h1>
        <p className='text-sm text-gray-300 leading-relaxed w-[30rem]'>
          {subtext}
        </p>

        {/* Stats */}
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6'>
          <li className='backdrop-blur-lg bg-white/5 p-4 rounded-2xl border border-white/10'>
            <h2 className='text-4xl font-bold text-orange-400'>
              {statistics.yearsInBusiness}+
            </h2>
            <p className='text-sm text-gray-400 mt-2'>Years Experience</p>
          </li>
          <li className='backdrop-blur-lg bg-white/5 p-4 rounded-2xl border border-white/10'>
            <h2 className='text-4xl font-bold text-orange-400'>
              {statistics.expertTrainers}+
            </h2>
            <p className='text-sm text-gray-400 mt-2'>Expert Trainers</p>
          </li>
          <li className='backdrop-blur-lg bg-white/5 p-4 rounded-2xl border border-white/10'>
            <h2 className='text-4xl font-bold text-orange-400'>
              {statistics.weeklyClasses}+
            </h2>
            <p className='text-sm text-gray-400 mt-2'>Weekly Classes</p>
          </li>
        </ul>
      </section>

      {/* Right Visual */}
      <section className='relative w-full h-[30rem] max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl card  z-10'>
        <img 
          src={decorationImage} 
          alt={title} 
          className='object-cover w-full h-full rounded-[2rem] scale-105 transition-transform duration-500 hover:scale-110'
        />
      </section>

      {/* Partners */}
      <section className='md:absolute w-full bottom-6 left-1/2 transform container mx-auto image-filter-white -translate-x-1/2  z-30'>
        <ul className='flex flex-wrap justify-between items-center gap-6 w-full'>
          {partners.map((item, index) => (
            <li key={index} className='grayscale hover:grayscale-0 transition-all duration-300'>
              <img src={item.logo} alt={item.name} className='w-20 h-auto' />
            </li>
          ))}
        </ul>
      </section>

      

      <GradientCircle 
        position={"absolute top-0 right-0"}
        size={"size-[25rem]"}
      />

    </article>
  )
}

const OurFoundersSection = ({ title, subtext, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % data.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(intervalRef.current);
  }, [data.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + data.length) % data.length);
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % data.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length);
    }, 5000);
  };

  return (
    <section className='py-20 flex flex-col gap-3 bg-cover bg-no-repeat our-founders--bg-image'>
      <h2 className='text-center text-orange-500 text-4xl md:text-2xl font-semibold'>{title}</h2>
      <p className="text-sm text-gray-300 text-center ">{subtext}</p>
      <article className='relative container mx-auto py-10 h-screen'>
        <section 
          className="relative w-full z-20 mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <ul
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((item, index) => (
              <li key={index} className="w-full flex-shrink-0 px-4">
                <FoundersCard 
                  profile={item.profileImages} 
                  name={item.name} 
                  socials={item.socialMedia} 
                  occupation={item.occupation} 
                  qualifications={item.qualifications}
                />
              </li>
            ))}
          </ul>

          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            aria-label="Previous founder"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            aria-label="Next founder"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </section>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2 z-10">
          {data.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
              aria-label={`Go to founder ${index + 1}`}
            />
          ))}
        </div>
      </article>
    </section>
  )
}



export { HeroSection, OurFoundersSection }