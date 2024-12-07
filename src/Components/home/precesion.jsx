import React from 'react';
import { motion } from 'framer-motion';
import Pana from "../../assets/home/precesion/pana.png";
import bold from "../../assets/home/precesion/bold.png";
import "../../styles/home/precesion.css";

function Precesion() {
  return (
    <div className='precesion_main_div'>
      {/* left side */}
      <motion.div 
        className='precesion_left_div'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Pana} alt="Pana" className='pana_image' />
      </motion.div>
      
      {/* right side */}
      <motion.div 
        className='precesion_right_div'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* top */}
        <motion.div 
          className='precesion_top_div_image'
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={bold} alt="Bold" className='bold_image' />
        </motion.div>
        
        {/* bottom */}
        <div className='precesion_bottom_botton'>
          <motion.div
            initial={{ opacity: 0, y: 20  }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            PRECISION
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            INNOVATION
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Precesion;
