'use client';

import React, { useEffect, useState } from "react";



export default function ReviewSlider({ reviews, color, size }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 10000); // Match animation duration
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="review-container">
      <div key={current} className="review">
        <p className={`${size ? size : 'md:text-4xl'} text-lg text-left mb-2`}>
          <span className={`italic digital7 ${color}`}>{reviews[current].review}</span>
        </p>
        <p className={`text-sm md:text-lg mt-2 digital7 text-right italic mr-2 ${color}`}>{reviews[current].name}</p>
        <p className={`text-sm md:text-lg digital7 text-right italic mr-2 ${color}`}>{reviews[current].designation}</p>
      </div>
    </div>
  );
}
