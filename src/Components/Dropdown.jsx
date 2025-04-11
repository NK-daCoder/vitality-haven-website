import React, { useState, useRef, useEffect } from 'react';
import "../assets/styles/effect.css";

const Dropdown = ({ dropdownTitle, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="w-full">
      <section className="button-gradient relative z-40 w-full rounded-lg overflow-hidden">
        <button 
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center p-4 md:p-5 text-white transition-all duration-200 focus:outline-none"
          aria-expanded={isOpen}
        >
          <h2 className="text-base md:text-lg font-semibold text-left pr-2">{dropdownTitle}</h2>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 md:h-7 md:w-7 rounded-full p-1 claymorphism" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="#ea580c"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={4} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>

          </span>
        </button>
        
        <article 
          ref={contentRef}
          className={`border-t border-white/10 bg-white/5 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            height: isOpen ? `${contentHeight}px` : '0px',
            transitionProperty: 'height, opacity'
          }}
        >
          <div className="p-4 md:p-5">
            {content}
          </div>
        </article>
      </section>
    </li>
  );
};

export default Dropdown;