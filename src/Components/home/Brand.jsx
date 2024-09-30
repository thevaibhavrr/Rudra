import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../styles/home/Brand.css";

function Brand() {
  const words = 'RUDRA CASTINGS';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='brand_main_div'>
      {words.split('').map((char, index) => {
        const isHovered = hoveredIndex !== null && (index >= hoveredIndex - 1 && index <= hoveredIndex + 1);
        return (
          <motion.span
            key={index}
            className={`hoverable ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animate={{
              color: isHovered ? '#FF5700' : '#000000',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </div>
  );
}

export default Brand;
