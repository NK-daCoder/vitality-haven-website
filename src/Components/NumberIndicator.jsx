import React from 'react'

const NumberIndicator = ({ indexNumber }) => {
  return (
    <aside aria-label="social media links" className="z-20 h-full hidden md:flex flex-col gap-4 items-center justify-end py-2">
          
          <p className='text-6xl text-white font-semibold'>{indexNumber}</p>
          
    </aside>
  )
}

export default NumberIndicator