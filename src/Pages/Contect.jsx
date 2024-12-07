
import React, { useRef } from 'react';
import Reach from '../Components/home/Reach';
import Contactheading from '../Components/contact/contactheading';
import Sendmsg from '../Components/contact/sendmsg';
import Brand from '../Components/home/Brand';
import { motion } from 'framer-motion';

function Contect() {
  const reachRef = useRef(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -500 }}
        transition={{ duration: 0.2, type: 'tween' }}
      >
        <Contactheading />
      </motion.div>
      <Sendmsg ref={reachRef} />
      <div ref={reachRef}>
        <Reach />
      </div>
      <Brand />
    </>
  );
}

export default Contect;
