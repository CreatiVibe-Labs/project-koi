'use client';

import React, { useEffect, useState } from "react";



export default function ReviewSlider({ reviews, color, size }) {
  const [current, setCurrent] = useState(0);

  console.log(reviews.length)

  let finalReviews = reviews;
  if (reviews.length === 1) {
    // clone karke array double kar diya
    finalReviews = [...reviews, ...reviews];
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        finalReviews.length > 1 ? (prev + 1) % finalReviews.length : prev // agar ek hi ho to same hi return kare
      );
    }, 10000); // Match animation duration
    return () => clearInterval(interval);
  }, [finalReviews.length]);

  return (
    <div className="review-container">
      <div key={current} className="review">
        <p className={`${size ? size : 'md:text-4xl'}  text-left mb-2`}>
          <span className={`italic digital7 ${color}`}>{finalReviews[current].review}</span>
        </p>
        <p className={`text-sm md:text-lg mt-2 digital7 text-right italic mr-2 ${color}`}>{finalReviews[current].name}</p>
        <p className={`text-sm md:text-lg digital7 text-right italic mr-2 ${color}`}>{finalReviews[current].designation}</p>
      </div>
    </div>
  );
}
