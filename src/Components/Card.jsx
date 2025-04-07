import React from 'react';

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
                  <a 
                    href={`#${category}`} 
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
                  </a>
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
    <div className="relative flex items-center mt-10">
      <div className='p-2 card size-28 z-20 absolute -left-12 -bottom-5 '>
        <img src={ secondaryImage } alt="" className='w-full h-full'/>
      </div>
      <div className='p-2 card w-[25rem] z-10'>
        <img src={ primaryImage } alt="" className='w-full h-full'/>
      </div>
      <div className='p-2 card size-44 z-10 absolute right-0 top-10'>
        <img src={ thirdImage } alt="" className='w-full h-full'/>
      </div>
    </div>
  )
}

export { OurServicesCard, GalleryCard };