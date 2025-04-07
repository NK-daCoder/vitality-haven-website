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
      <section className="button-gradient relative z-40 w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        <button 
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center p-4 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-expanded={isOpen}
          aria-controls="dropdown-content"
        >
          <h2 className="text-lg font-semibold text-left truncate max-w-[80%]">{dropdownTitle}</h2>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 border border-gray-300 p-0.5 rounded-full bg-white/10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        
        <article 
          ref={contentRef}
          id="dropdown-content"
          className={`border-t border-white/10 bg-white/5 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            height: isOpen ? `${contentHeight}px` : '0px',
            transitionProperty: 'height, opacity'
          }}
        >
          <div className="p-4 text-gray-100 break-words whitespace-normal">
            {content}
          </div>
        </article>
      </section>
    </li>
  );
};

export default Dropdown;