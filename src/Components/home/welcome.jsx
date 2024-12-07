
import React from 'react';
import { motion } from 'framer-motion';
import "../../styles/home/welcome.css";
import CircelGif from "../../assets/utils/lava ring.gif";

function Welcome() {
  return (
    <>
      <div className='welcome_section_main_div'>
        {/* top */}
        <div className='welcome_top_divs'>
          <motion.div
            className='welcome_text'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to 
          </motion.div>
          <motion.div
            className='rudra_text'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            RUDRA CASTINGS
          </motion.div>
        </div>
        {/* center */}
        <motion.div 
          className='welcome_center_div_home'
          // initial={{ scale: 0.1 }}
          // animate={{ scale: 1 }}
          // transition={{ duration: 0.8 , stiffness: 100  }}
        >
          {/* <motion.img src={CircelGif} alt="logo"
            // whileHover={{ scale: 1.2  }}
            // transition={{ duration: 1 , stiffness: 500  }}
          /> */}
        </motion.div>
        {/* bottom */}
        <div className='welcome_top_divs'>
          <motion.div
            className='welcome_text'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            EMPOWERING PRECISION
          </motion.div>
          <motion.div className='discover_button_div'>
            <motion.button
              className='discover_button'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>DISCOVER</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
