import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowTrendUp, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/effect.css"


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
      <article className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
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

        <section className='flex flex-col justify-center h-full'>
          <h1 className="text-2xl font-semibold text-white">{testamonialDataName}</h1>
          <p className="text-orange-100 mt-2 text-sm">{testamonial}</p>

          <section className='flex justify-between items-center mt-5'>
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

const PriceCard = ({ pricePlan, price, month, subText, list }) => {
  return (
    <li className="w-full max-w-sm mx-auto z-20">
      <article className='price-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100'>
        {/* Header Section */}
        <section className='px-6 py-4 bg-gradient-to-tr from-orange-400 to-orange-500 shadow-lg'>
          <h1 className=' text-white font-bold text-xl tracking-wide text-center'>{pricePlan}</h1>
        </section>
        
        {/* Pricing Section */}
        <section className='p-6 flex-grow'>
          <div className='flex items-center mb-6'>
            <h2 className='text-4xl font-extrabold text-white'>{price}</h2>
            <p className='text-lg text-white ml-1 mb-1'>/{month}</p>
          </div>
          
          <div>
            <h3 className=' text-gray-200 mb-6'>{subText}</h3>
            
            <ul className='space-y-3 mb-8'>
              {list.map((element, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-orange-500 mt-1 mr-2'>
                    <FontAwesomeIcon icon={faArrowRight} size="xs" />
                  </span>
                  <p className='text-gray-400'>{element}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* CTA Section */}
        <div className='px-6 pb-6'>
          <button className='w-full py-3 px-4 bg-gradient-to-br from-orange-400 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center 
                            shadow-lg hover:shadow-xl
                            border border-orange-300 border-opacity-50
                            hover:from-orange-500 hover:to-orange-700
                            active:scale-95
                            backdrop-blur-sm
                            hover:backdrop-blur'>
            Get Started
            <span className='ml-2'>
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </span>
          </button>
        </div>
      </article>
    </li>
  )
}

const FoundersCard = ({ profile, name, socials, occupation, qualifications }) => {
  return (
    <article className='card p-6 rounded-3xl shadow-xl flex flex-col h-full justify-center items-center gap-6 text-white w-full  bg-gray-800'>
      {/* Profile Image & Name */}
      <section className='flex flex-col items-center gap-3'>
        <img src={profile} alt={name} className='size-40 rounded-full object-cover border-4 border-orange-500' />
        <div className='text-center'>
          <h3 className='md:text-4xl text-2xl font-bold'>{name}</h3>
          <h4 className='text-sm text-gray-400 mt-1'>{occupation}</h4>
        </div>
      </section>

      {/* Qualifications */}
      <section className='w-full flex flex-col items-center'>
        <h5 className='text-sm font-semibold text-orange-400 mb-2'>Qualifications</h5>
        <ul className='flex flex-col gap-1 text-gray-300 text-sm list-disc list-inside'>
          {qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Socials */}
      <section className='flex gap-4 justify-center mt-4'>
        {socials.map((item, index) => (
          <li key={index} className='list-none text-white text-xl hover:text-orange-400 transition-colors duration-300'>
            {GetIconComponent(item)}
          </li>
        ))}
      </section>
    </article>
  )
}





export { OurServicesCard, GalleryCard, TestamonialCard, PriceCard, FoundersCard  };