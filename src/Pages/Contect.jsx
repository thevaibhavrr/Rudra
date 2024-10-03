// import React from 'react'
// import Reach from '../Components/home/Reach'
// import Contactheading from '../Components/contact/contactheading'
// import Sendmsg from '../Components/contact/sendmsg'

// function Contect() {
//   return (
//     <div>
//         <Contactheading/>
//         <Sendmsg/>
//         <Reach/>
//     </div>
//   )
// }

// export default Contect


import React from 'react';
import Reach from '../Components/home/Reach';
import Contactheading from '../Components/contact/contactheading';
import Sendmsg from '../Components/contact/sendmsg';
import Brand from '../Components/home/Brand';

import { motion } from 'framer-motion';

function Contect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      transition={{ duration: 0.2, type: 'tween' }}
    >
      <Contactheading />
      <Sendmsg />
      <Reach />
      <Brand />

    </motion.div>
  );
}

export default Contect;
