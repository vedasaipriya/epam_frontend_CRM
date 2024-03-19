import React, { useState, useEffect } from 'react';
import './MovingScroll.css';

const MovingScroll = ({ updates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [updates]);

  return (
    <div className="moving-banner">
      {updates.map((update, index) => (
        <div
          key={index}
          className={`banner-item ${index === currentIndex ? 'active' : ''}`}
        >
          {update}
        </div>
      ))}
    </div>
  );
};

export default MovingScroll;
