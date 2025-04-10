import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NumberIndicator from './NumberIndicator';
import Statistics from './Statistics';
import { cutOut, vitalityHaven } from '../constants/data';
import { BlogCard, GalleryCard, OurServicesCard, PriceCard, TestamonialCard } from './Card';
import GradientCircle from './GradientCircle';
import Dropdown from './Dropdown';


export const SectionComponent = ({ title, subTitle, subText, style }) => {
  return (
    <section className={`flex flex-col gap-6 justify-center ${style}`}>
      <h2 className="text-sm text-orange-500 z-10">{title}</h2>
      <h3 className='text-4xl uppercase font-bold text-white z-10'>{subTitle}</h3>
      <p className='text-md text-gray-300 w-3/4 z-10 flex items-center'>{subText}</p>
    </section>
  )
}

const HeroSection = ({ ourMedias, mainHeading, subHeadingText, backgroundImage, video, hasVideo = true, onHover = true }) => {
  return (
    <section aria-label='hero section' className="h-screen relative">
      <article className='container mx-auto h-full relative flex'>
        <aside aria-label="social media links" className="h-full hidden md:flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center gap-7 px-2 z-20">
            {
              ourMedias.map((item, index) => (
                <li 
                  key={index} 
                  className={`rounded-md p-1 flex items-center ${onHover ? 'transform transition-transform hover:scale-105' : ''}`}
                >
                  <a href={item.url} className="size-5 inline-block">
                    <img src={item.mediaIcon} alt={"Follow us on " + item.text} className="w-full h-full" />
                  </a>
                </li>
              ))
            }
          </ul>
        </aside>

        <section className="h-full flex flex-col items-center justify-center">
          <h1 className="z-20 px- text-6xl text-center text-white font-semibold uppercase leading-snug ">{ mainHeading }</h1>
        </section>

        <NumberIndicator indexNumber={"01"}/>
      </article>
      
      {/* Background media */}
      {hasVideo ? (
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className='absolute top-0 left-0 w-screen h-full '>
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  )
}

HeroSection.propTypes = {
  ourMedias: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      mediaIcon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  mainHeading: PropTypes.string,
  subHeadingText: PropTypes.string,
  backgroundImage: PropTypes.string,
  video: PropTypes.shape({
    webm: PropTypes.string,
    mp4: PropTypes.string.isRequired
  }),
  hasVideo: PropTypes.bool,
  onHover: PropTypes.bool
};

HeroSection.defaultProps = {
  ourMedias: [],
  hasVideo: true,
  onHover: true
};

const CompaniesSection = ({ trustedCompanies }) => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex">
        {/* First set for seamless looping */}
        <ul className="flex items-center justify-center min-w-full animate-scroll">
          {trustedCompanies.map((item) => (
            <li key={`trustedCompanies-${item.id.toString()}`} className="mx-8 shrink-0">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="size-28 object-contain filter grayscale-0  transition-all duration-300 hover:scale-110"
              />
            </li>
          ))}
        </ul>
        
        {/* Duplicate set for seamless looping */}
        <ul className="flex items-center justify-center min-w-full animate-scroll">
          {trustedCompanies.map((item) => (
            <li key={`trustedCompanies-duplicate-${item.id.toString()}`} className="mx-8 shrink-0">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const AboutSection = ({ title, subTitle, subText, statistics, videoSource }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleDoubleTap = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
      // Double tap detected
      if (e.clientX < window.innerWidth / 2) {
        // Left side - rewind 10 seconds
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
      } else {
        // Right side - forward 10 seconds
        videoRef.current.currentTime = Math.min(
          videoRef.current.duration,
          videoRef.current.currentTime + 10
        );
      }
    }
    setLastTap(currentTime);
  };

  const handleTimeUpdate = () => {
    // Hide controls after 3 seconds of inactivity
    if (showControls) {
      setTimeout(() => setShowControls(false), 3000);
    }
  };

  return (
    <section className="container mx-auto py-24 relative">
      <article className="flex flex-col gap-6 justify-center h-full">
        <SectionComponent
          title={title}
          subTitile={subTitle}
          subText={subText}
        />
        <Statistics stats={statistics} />
        
        <div 
          className="relative rounded-2xl overflow-hidden z-10 border-2 border-orange-600 mt-5"
          onTouchStart={handleDoubleTap}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            className="w-full z-10 "
            playsInline
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Controls */}
          {(showControls || !isPlaying) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={togglePlay}
                className="p-4 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              >
                {isPlaying ? (
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          )}

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700">
            <div 
              className="h-full bg-orange-500" 
              style={{ width: `${(videoRef.current?.currentTime / videoRef.current?.duration) * 100 || 0}%` }}
            ></div>
          </div>
        </div>
      </article>

      <GradientCircle size={"size-[90rem]"} position={"absolute top-0 left-5"}/>
    </section>
  );
};

const ServicesSection = ({ title, subTitle, subText, services }) => {
  return (
    <article className='container mx-auto flex flex-col items-center relative'>
      <SectionComponent 
        title={title}
        subTitle={subTitle}
        subText={subText}
      />
      <section className='mt-4 w-full'>
        <ul className='grid grid-cols-3 gap-2 overflow-hidden'>
          <OurServicesCard object={services} />
        </ul>
      </section>

   
    </article>
  )
}

const WhyUsSection = () => {
  return (
    <article className='container mx-auto py-24 relative '>
      <SectionComponent 
        title={"Preferences"} 
        subTitle={"Why Choose Us For Your Fitness Journey"} 
        subText={"takeing care af your fitness"}
      />
      <section className='grid grid-cols-2 gap-5 justify-items-center'>
        <GalleryCard 
          primaryImage={cutOut.gymCouple} 
          secondaryImage={cutOut.manPumpIron} 
          thirdImage={cutOut.womenBodyBuilder}
        />
        <ul className='flex flex-col gap-3 justify-center items-center'>
          <Dropdown 
            dropdownTitle={"Learn More"} 
            content={"fhiedhwihfehgwgfgvdvshgvchgdvsghvcdhgvscgvscvhsgvcsdjvcsdhcvdghvshcvdgvjh"}
          />
          <Dropdown 
            dropdownTitle={"Learn More"} 
            content={"fhiedhwihfehgwgfgvdvshgvchgdvsghvcdhgvscgvscvhsgvcsdjvcsdhcvdghvshcvdgvjhfgewgfgyewgfyuewgygwfgewgfywgfuygfgfyewgduygwuydguwgduegduygwydguyegugywudygewugydw"}
          />
        </ul>
      </section>

      <GradientCircle 
        size={"size-[50rem]"} 
        position={"absolute -top-10 left-0"}
      />
      <GradientCircle 
        size={"size-[15rem]"} 
        position={"absolute bottom-0 right-0"}
      />
    </article>
  );
}

const TestimonialsSection = ({ title, subTitle, subText, data }) => {
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
    <article className='relative container mx-auto py-28 '>
      <SectionComponent 
        title={title} 
        subTitle={subTitle}
        subText={subText}
      />
      
      <div 
        className="relative w-full z-20 mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel container */}
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={`testimonial-${index}`} className="w-full flex-shrink-0 px-4">
              <TestamonialCard 
                testamonialDataImage={item.testamonialDataImage} 
                testamonialDataName={item.testamonialDataName}
                testamonial={item.testamonial}
                socialMedia={item.socialMedia} 
                ratings={item.ratings}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2 z-10">
        {data.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <GradientCircle 
        size={"size-[50rem]"} 
        position={"absolute bottom-0 -left-[5rem] z-[1rem]"}
      />
    </article>
  );
};

const OurPlans = ({ title, subTitle, subText, priceData }) => {
  return (
    <article className='container mx-auto py-28 relative'>
      <SectionComponent 
        title={ title } 
        subTitle={ subTitle } 
        subText={ subText }
      />
      <ul className='w-full gap-3 mt-10 grid grid-cols-1 md:grid-cols-3'>
        {
          priceData.map((item, index) => {
            return (
              <PriceCard 
                key={`price-card-${index}`}
                pricePlan={item.id}
                price={`R${item.price}`} 
                month={item.period} 
                subText={item.name}
                list={item.features}
              />
            )
          })
        }
      </ul>
      <GradientCircle 
        size={"size-[50rem]"}
        position={"absolute top-0 right-0"} 
      />
      <GradientCircle 
        size={"size-[25rem]"}
        position={"absolute bottom-0 left-0"} 
      />
    </article>
  )
};


const LocationSection = ( {title, subTitle, subText, numberOfLocations} ) =>{
  return (
    <article className='container mx-auto py-28'>
        <SectionComponent 
          title={title} 
          subTitle={subTitle} 
          subText={
            <>
              <span className='flex flex-col gap-2'>
                <span className='text-3xl text-center text-white font-semibold flex gap-2 items-center justify-center'>{numberOfLocations} <span className='text-orange-600'>+</span></span>
                <span className='text-gray-400 text-sm'>Countries</span>
              </span>
              <span className='mx-8 border border-gray-500 h-[4rem]'></span>
              <span className='text-gray-400 text-md'>{subText}</span>
            </>
          }
        />

        <section className='border h-screen mt-10 flex items-center justify-center'>
          <h1 className='text-white text-4xl text-center'>
            Map that displays our locations dynamically <br/>goes here
          </h1>
        </section>
    </article>
    
  
  );
}

const MobileAppSection = ({ title, subTitle, subText }) => {
  return (
    <article className='relative z-20 price-card border-2 border-orange-600 container mx-auto rounded-xl p-6 md:p-10 my-28'>
      <SectionComponent 
        title={title} 
        subTitle={subTitle} 
        subText={subText}
      />

      <section className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* App Features */}
        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <div className='bg-orange-600 p-2 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white'>Personalized Workouts</h3>
              <p className='text-gray-300'>AI-powered training plans tailored to your goals and progress</p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='bg-orange-600 p-2 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white'>Class Booking</h3>
              <p className='text-gray-300'>Reserve spots in popular classes with real-time availability</p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='bg-orange-600 p-2 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-white'>Progress Tracking</h3>
              <p className='text-gray-300'>Visualize your fitness journey with detailed analytics</p>
            </div>
          </div>

          {/* App Store Badges */}
          <div className='flex flex-wrap gap-4 pt-4'>
            <a href="#" className='inline-block'>
              <img src="/app-store-badge.svg" alt="Download on the App Store" className='h-12' />
            </a>
            <a href="#" className='inline-block'>
              <img src="/google-play-badge.svg" alt="Get it on Google Play" className='h-12' />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className='relative flex justify-center'>
          <div className='relative w-64 h-auto'>
            {/* Phone frame */}
            <div className='relative z-10 border-8 border-gray-800 rounded-[2.5rem] h-[500px] w-[250px] mx-auto shadow-xl'>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-2xl'></div>
              {/* Screen content */}
              <div className='h-full w-full bg-gray-900 rounded-2xl overflow-hidden'>
                <img 
                  src="/app-screenshot.jpg" 
                  alt="Vitality Haven mobile app" 
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            {/* Glow effect */}
            <div className='absolute -inset-4 bg-orange-600 rounded-3xl blur-2xl opacity-20'></div>
          </div>
        </div>
      </section>

      <GradientCircle 
        position={"absolute bottom-0 -left-[10rem]"}
        size={"size-[25rem] -z-10"}
      />
      <GradientCircle 
        position={"absolute -top-[-5rem] -right-[10rem]"}
        size={"size-[35rem] -z-10"}
      />
    </article>
  );
};

const BlogSection = ({ title, subTitle, subText, link, blogPosts }) => {
  // Filter blogs with more than 6000 views
  const popularBlogs = blogPosts.filter(post => post.views > 6000);
  
  // Get 3 random blogs from the popular ones
  const randomBlogs = [];

  while (randomBlogs.length < 3 && popularBlogs.length > 0) {
    const randomIndex = Math.floor(Math.random() * popularBlogs.length);
    randomBlogs.push(popularBlogs[randomIndex]);
    popularBlogs.splice(randomIndex, 1); // Avoid duplicates
  }

  return (
    <article className='py-28 container mx-auto relative'>
      <SectionComponent 
        title={title} 
        subTitle={subTitle} 
        subText={
          <span className='flex w-full justify-between items-center'>
            <span>{subText}</span>
            <a href={link || "#"} className='absolute right-0 text-center text-orange-500 font-semibold hover:text-orange-600 transition-colors'>
              See All →
            </a>
          </span>
        }
      />

      <section className='mt-10'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            randomBlogs.map((post, index) => (
              <li key={`blog-${index}`} className='price-card rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow shadow-white/10'>
                <article className='h-full flex flex-col'>
                  <div className='h-48 overflow-hidden'>
                    <img 
                      src={post.featuredImage} 
                      alt={post.title} 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='p-6 flex-grow flex flex-col'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm font-medium text-orange-500'>{post.category}</span>
                      <span className='text-sm text-gray-200'>{post.readTime}</span>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-3'>{post.title}</h3>
                    <p className='text-gray-200 mb-4 flex-grow'>{post.excerpt}</p>
                    <div className='flex justify-between items-center text-sm text-gray-300 border-t border-white/10 pt-3'>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <div className='flex items-center space-x-3'>
                        <span className='flex items-center'>
                          <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            <path strokeLinecap='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                          </svg>
                          {post.views.toLocaleString()}
                        </span>
                        <span className='flex items-center'>
                          <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeWidth='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                          </svg>
                          {post.likes.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))
          }
        </ul>

      </section>
    </article>
  );
}

const FooterSection = ({ quickLinks, contactInfo, careers, legal, newsletter, mobileApp }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Quick Links */}
        <section className="lg:col-span-1">
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((item, index) => (
              <li key={`quick-links-${index}`}>
                <a 
                  href={item.url || "#"} 
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Careers */}
        <section className="lg:col-span-1">
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Careers</h2>
          <ul className="space-y-2">
            {careers.map((item, index) => (
              <li key={`career-links-${index}`}>
                <a 
                  href={item.applyLink || "#"} 
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.position}
                </a>
                <span className="block text-xs text-gray-500">{item.location}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal */}
        <section className="lg:col-span-1">
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Legal</h2>
          <ul className="space-y-2">
            {legal.links.map((item, index) => (
              <li key={`legal-links-${index}`}>
                <a 
                  href={item.url || "#"} 
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Mobile App */}
        <section className="lg:col-span-1">
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-700 pb-2">{mobileApp.title}</h2>
          <p className="mb-4">{mobileApp.description}</p>
          <div className="flex space-x-4">
            <a href={mobileApp.appStore} className="block w-32">
              <img 
                src="/images/app-store-badge.svg" 
                alt="Download on the App Store" 
                className="w-full h-auto"
              />
            </a>
            <a href={mobileApp.playStore} className="block w-32">
              <img 
                src="/images/play-store-badge.svg" 
                alt="Get it on Google Play" 
                className="w-full h-auto"
              />
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="lg:col-span-1">
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-700 pb-2">{newsletter.title}</h2>
          <p className="mb-4">{newsletter.description}</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder={newsletter.placeholder} 
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              {newsletter.cta}
            </button>
          </form>
          <ul className="mt-4 text-sm space-y-1">
            {newsletter.benefits.map((benefit, index) => (
              <li key={`benefit-${index}`} className="flex items-start">
                <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Information - Full width */}
        <section className="col-span-full mt-8 pt-8 border-t border-gray-800">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">General Inquiries</h3>
              <a href={`mailto:${contactInfo.generalEmail}`} className="hover:text-white transition-colors duration-200">
                {contactInfo.generalEmail}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Support</h3>
              <a href={`mailto:${contactInfo.supportEmail}`} className="hover:text-white transition-colors duration-200">
                {contactInfo.supportEmail}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Phone</h3>
              <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors duration-200">
                {contactInfo.phone}
              </a>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-gray-400 mb-1">Corporate Address</h3>
              <address className="not-italic">
                {contactInfo.corporateAddress}
                <br />
                <span className="text-sm text-gray-400">{contactInfo.hours}</span>
              </address>
            </div>
          </div>
        </section>

        {/* Copyright - Full width */}
        <section className="col-span-full mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">{legal.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {Object.entries(contactInfo.socialMedia || {}).map(([platform, { url, handle }]) => (
                <a 
                  key={platform} 
                  href={url} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  {/* Example using simple text - replace with actual icons */}
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};


export { 
  HeroSection, 
  CompaniesSection, 
  AboutSection, 
  ServicesSection, 
  WhyUsSection, 
  TestimonialsSection,
  OurPlans,
  LocationSection,
  MobileAppSection,
  BlogSection,
  FooterSection 
};