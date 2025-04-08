import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const OurServicesCard = ({ object }) => {
  const serviceCategories = Object.keys(object);
  
  return (
    <>
      {serviceCategories.map((category) => {
        const service = object[category];

        return (
          <li key={category} className='flex-0 group'>
            <a href="#">
              <article className="transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <section className='h-80 relative overflow-hidden rounded-2xl shadow-lg'>
                  {/* Background image with hover effect */}
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdAOY_-vITFVI-ej84s2U_ErxhOly-z3y_Q&s" 
                    alt={service.title} 
                    className='h-full w-full object-cover absolute top-0 left-0 
                      transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
                  />
                  
                  {/* Gradient overlay with hover enhancement */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    transition-all duration-300 group-hover:from-black/80 group-hover:via-black/50"></div>
                  
                  {/* Service title with hover animation */}
                  <h3 className='z-20 absolute bottom-6 left-6 text-white font-bold text-xl
                    transition-all duration-300 group-hover:bottom-8'>
                    {service.title}
                  </h3>
                  
                  {/* Description that appears on hover */}
                  <p className='z-20 absolute bottom-28 left-6 text-white/80 text-sm max-w-[80%]
                    opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-20'>
                    {service.description || 'Explore our professional services'}
                  </p>
                  
                  {/* Navigation arrow with enhanced hover */}
                  <div 
                    href={`${category}`} 
                    className='z-20 rounded-full bg-orange-500 p-3 inline-block absolute bottom-6 right-6 
                      opacity-0 transition-all duration-300 group-hover:opacity-100 
                      hover:bg-orange-600 hover:scale-110 transform'
                    aria-label={`Explore ${service.title}`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-white" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </section>
              </article>
            </a>
          </li>
        );
      })}
    </>
  );
};

const GalleryCard = ( { primaryImage, secondaryImage, thirdImage } ) => {
  return (
    <div className="relative flex items-center mt-10 ">
      <div className='p-2 card size-28 z-20 absolute -left-12 -bottom-8 '>
        <img src={ secondaryImage } alt="" className='w-full h-full'/>
      </div>
      <div className='p-2 card w-[35rem] z-10'>
        <img src={ primaryImage } alt="" className='w-full h-full'/>
      </div>
      <div className='p-2 card size-44 z-10 absolute -right-20 -top-10'>
        <img src={ thirdImage } alt="" className='w-full h-full'/>
      </div>
    </div>
  )
}

const GetIconComponent = (iconName) => {
  switch(iconName) {
    case 'twitter': return <FontAwesomeIcon icon={faTwitter} />;
    case 'facebook': return <FontAwesomeIcon icon={faFacebook} />;
    case 'instagram': return <FontAwesomeIcon icon={faInstagram} />;
    case 'youtube': return <FontAwesomeIcon icon={faYoutube} />;
    case 'linkedin': return <FontAwesomeIcon icon={faLinkedin} />;
    case 'tiktok': return <FontAwesomeIcon icon={faTiktok} />;
    default: return null;
  }
};

const TestamonialCard = ({ 
  testamonialDataImage, 
  testamonialDataName, 
  testamonial, 
  socialMedia, 
  ratings 
}) => {
  // Function to render star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={`full-${i}`} 
          icon={faStar} 
          className="text-yellow-400" 
        />
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon 
          key="half" 
          icon={faStarHalfAlt} 
          className="text-yellow-400" 
        />
      );
    }
    
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={`empty-${i}`} 
          icon={faStarRegular} 
          className="text-yellow-400" 
        />
      );
    }
    
    return stars;
  };

  return (
    <li className="button-gradient p-6 !rounded-3xl">
      <article className="grid grid-cols-2 gap-4">
        <div className="relative">
          <img 
            src={testamonialDataImage} 
            alt={testamonialDataName} 
            className="w-full h-full rounded-2xl"
          />
          <span className="material-symbols-rounded absolute top-[10rem] left-[10rem] text-white !text-9xl inline-block rounded-full backdrop-blur-sm">
            play_circle
          </span>
        </div>

        <section>
          <h1 className="text-lg font-semibold text-white">{testamonialDataName}</h1>
          <p className="text-orange-100 mt-2">{testamonial}</p>

          <section className='flex justify-between items-center'>
            <div className="flex gap-1">
              {typeof ratings === 'number' && renderStars()}
            </div>
            <ul className="flex gap-2">
              {
                socialMedia.map((item, index) => {
                  return (
                    <li key={`socials-${index}`}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:text-white transition-colors">
                        {
                          GetIconComponent(item.icon)
                        }
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </section>
        
      </article>
    </li>
  );
};


export { OurServicesCard, GalleryCard, TestamonialCard };