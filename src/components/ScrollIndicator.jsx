import React, { useState, useEffect } from 'react';
import { HiChevronDoubleDown } from "react-icons/hi";
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <div className="scroll-indicator">
      <HiChevronDoubleDown className="scroll-arrow" size={32} />
    </div>
  ) : null;
};

export default ScrollIndicator;