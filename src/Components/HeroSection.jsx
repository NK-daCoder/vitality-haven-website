import React from 'react'
import PropTypes from 'prop-types';

const HeroSection = ({ ourMedias, mainHeading, subHeadingText, backgroundImage, video, hasVideo = true, onHover = true }) => {
  return (
    <section aria-label='hero section' className="h-screen relative">
      <article className='container mx-auto h-full relative flex'>
        <aside aria-label="social media links" className="h-full hidden md:flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center gap-7 px-2">
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
          <h1 className="px- text-6xl text-center text-white font-semibold uppercase">{ mainHeading }</h1>
        </section>

        <aside aria-label="social media links" className="h-full hidden md:flex flex-col gap-2 items-center justify-center">
          <div className='border-2 h-32'></div>
          <p className='text-4xl text-white'>01</p>
          <div className='border-2 h-32'></div>
        </aside>
      </article>
      
      {/* Background media */}
      {hasVideo ? (
        <div className='absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden'>
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
        <div className='absolute top-0 left-0 w-screen h-full z-[-1]'>
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

export default HeroSection