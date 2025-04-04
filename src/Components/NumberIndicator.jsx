import React from 'react'

const NumberIndicator = ({ indexNumber }) => {
  return (
    <aside aria-label="social media links" className="z-20 h-full hidden md:flex flex-col gap-4 items-center justify-center">
          <div className='border-2 h-80'></div>
          <p className='text-6xl text-white font-semibold'>{indexNumber}</p>
          <div className='border-2 h-20'></div>
    </aside>
  )
}

export default NumberIndicator