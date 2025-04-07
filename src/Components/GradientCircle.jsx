import React from 'react';
import "../assets/styles/effect.css";

const GradientCircle = ( { size, position } ) => {
  return (
    <div className={`circular-gradient ${size} ${position} rounded-full `}></div>
  )
}

export default GradientCircle