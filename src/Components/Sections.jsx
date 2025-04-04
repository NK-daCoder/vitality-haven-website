import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types';
import NumberIndicator from './NumberIndicator';
import Statistics from './Statistics';
import { vitalityHaven } from '../constants/data';

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
                  className={`border-2 rounded-md p-1 flex items-center ${onHover ? 'transform transition-transform hover:scale-105' : ''}`}
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
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
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
    <section className="container mx-auto py-24">
      <article className="flex flex-col gap-6 justify-center h-full">
        <h2 className="text-base text-orange-500">{title}</h2>
        <h3 className='text-4xl uppercase font-bold text-white'>{subTitle}</h3>
        <p className='text-xl text-white w-3/4'>{subText}</p>
        <Statistics stats={statistics} />
        
        <div 
          className="relative rounded-2xl overflow-hidden"
          onTouchStart={handleDoubleTap}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            className="w-full"
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
    </section>
  );
};

export { HeroSection, CompaniesSection, AboutSection };