import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DesktopNavigation = ({ primaryLinks, logo, secondaryLinks, elementOnHover = true }) => {
  return (
    <header className="fixed top-0 w-full left-0 z-50">
      <nav className='flex justify-between items-center container mx-auto py-4'>
        {
          logo.map((item, index) => (
            <Link to="/" key={index} className="flex gap-2 items-center">
              <img src={item.logo} alt={item.text + " logo"} className="size-10" />
              <span className={"text-md font-sans font-semibold text-pretty text-white"}>{item.text}</span>
            </Link>
          ))
        }
        
        <ul className='flex gap-4'>
          {
            primaryLinks.map((links, index) => (
              <li key={index}>
                <Link 
                  to={links.url || "#"} 
                  className={`text-white ${elementOnHover ? "text-sm pb-0 transition-all hover:pb-2 hover:border-b-2 hover:border-orange-500" : "text-sm pb-0"}`}
                >
                  {links.text}
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className='flex gap-3'>
          {
            secondaryLinks.map((links, index) => (
              <li key={index}>
                <Link 
                  to={links.url || "#"} 
                  className={`text-white ${links.styles || ""}`}
                >
                  {links.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
};

DesktopNavigation.propTypes = {
  primaryLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired,

  logo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      logo: PropTypes.string
    })
  ).isRequired,

  secondaryLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
      styles: PropTypes.string
    })
  ).isRequired,

  elementOnHover: PropTypes.bool
};

DesktopNavigation.defaultProps = {
  primaryLinks: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' }
  ],
  logo: [],
  secondaryLinks: [],
  elementOnHover: true
};

export { DesktopNavigation };