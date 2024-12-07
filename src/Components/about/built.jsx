import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../styles/about/built.css";

function Built() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const hoverText = [
    "Crafted with care and precision, our casting solutions are designed to meet the unique needs of industries like automotive, aerospace, and many others.",
    "Our ISO-certified facilities, covering over 75,000 sq. ft., operate around the clock to ensure your projects are completed with the utmost precision.",
    "Innovators and craftsmen at heart, our team consists of skilled experts dedicated to exploring new possibilities and pushing the boundaries of excellence."
  ];

  const defaultText = ['PRECISION CASTING', 'STATE-OF-THE-ART FACILITIES', 'EXPERT TEAM'];

  return (
    <div className='built_main_div'>
      <div className='built_div_heading'>
        BUILT TO INSPIRE
      </div>
      <div className='built_div_box_main_div'>
        {hoverText.map((text, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className='built_div_box'
          >
            <AnimatePresence mode="wait">
              {index === hoveredIndex ? (
                <motion.span
                  key="hoverText"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: '20px' }}
                >
                  {text}
                </motion.span>
              ) : (
                <motion.span
                  key="defaultText"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {defaultText[index]}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Built;
