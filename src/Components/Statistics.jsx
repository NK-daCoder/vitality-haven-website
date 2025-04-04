import React from 'react';

const Statistics = ({ stats }) => {
  const arrayOfKeyAndValues = Object.entries(stats);
  
  // Optional: Format the keys for display (e.g., "yearsInBusiness" -> "Years In Business")
  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
  };

  return (
    <section>
        <ul className="flex gap-8">
          {
            arrayOfKeyAndValues.map(([key, value]) => (
              <li key={key} className="flex flex-col gap-1">
                <p className="order-1 text-4xl font-bold text-white flex gap-1">{value}<span className='text-orange-600'>+</span></p>
                <h3 className="order-2 text-sm font-medium text-white">
                  {formatKey(key)}
                </h3>
              </li>
            ))
          }
        </ul>
    </section>
  );
}

export default Statistics;