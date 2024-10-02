// import React from 'react'
// import "../../styles/home/detailsslider.css"
// // firstdetails
// import First from "../../assets/home/detailsslider/firstdetails.png"
// import Second from "../../assets/home/detailsslider/seconddetails.png"

// function Detailsslider() {
    
//     return (
//         <>
//             <div className='detailsslider_main_div' >
//                 <DetailsCard image={First} number="1" heading="70% AUTOMOTIVE INDUSTRY" paregraph="Specializing in components such as exhaust systems and oil feed parts, we supply high-quality castings to leading automotive manufacturers." />
//                 <DetailsCard image={Second} number="2" heading="10% ENGINEERING COMPONENTS" paregraph="We manufacture precision parts for power tools and other engineering applications, ensuring durability and reliability.." />
//             </div>


//         </>
//     )
// }

// export default Detailsslider


// function DetailsCard({ image, number, heading, paregraph }) {
//     return (
//         <>
//             <div className='detailsslider_card_main_div' >
//                 {/* top */}
//                 <div className='detailsslider_top_div' >
//                     {/* left */}
//                     <div className='detailsslider_top_div_left' >
//                         <img src={image} alt="logo" className='detailsslider_top_div_left_image' />
//                     </div>
//                     {/* right */}
//                     <div className='detailsslider_top_div_right' >
//                         #{number}
//                     </div>
//                 </div>
//                 {/* bottom */}
//                 <div className='detailsslider_bottom_div' >
//                     {/* heading  */}
//                     <div className='detailsslider_bottom_div_heading' >
//                         {heading}
//                     </div>
//                     {/* details */}
//                     <div className='detailsslider_bottom_div_paregraph' >
//                         {paregraph}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import {motion} from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../styles/home/detailsslider.css";
import First from "../../assets/home/detailsslider/firstdetails.png";
import Second from "../../assets/home/detailsslider/seconddetails.png";
import Third from "../../assets/home/detailsslider/gun.png"
import Forth from "../../assets/home/detailsslider/farm.png"
import fift from "../../assets/home/detailsslider/medicin.png"

gsap.registerPlugin(ScrollTrigger);

function Detailsslider() {
  useLayoutEffect(() => {
    const container = document.querySelector('.detailsslider_main_div');
    const updateScrollAnimation = () => {
      const containerWidth = container.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollDistance = containerWidth - windowWidth;

      // Clear previous animations
      ScrollTrigger.clearMatchMedia();

      // Set up GSAP animation
      gsap.to(container, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: '.detailsslider_wrapper',
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    };

    updateScrollAnimation();

    window.addEventListener('resize', updateScrollAnimation);

    return () => {
      window.removeEventListener('resize', updateScrollAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='detailsslider_wrapper'>
      <div className='detailsslider_main_div'>
        <DetailsCard image={First} number="1" heading="70% AUTOMOTIVE INDUSTRY" paregraph="Specializing in components such as exhaust systems and oil feed parts, we supply high-quality castings to leading automotive manufacturers." />
        <DetailsCard image={Second} number="2" heading="10% ENGINEERING COMPONENTS" paregraph="We manufacture precision parts for power tools and other engineering applications, ensuring durability and reliability." />
            <DetailsCard image={Third} number="3" heading="10% DEFENCE COMPONENTS" paregraph="From WELLs parts to bomb shells, our castings meet the stringent standards required for defence applications." />
            <DetailsCard image={Forth} number="4" heading="5% OTHER INDUSTRIES" paregraph="Including agriculture components, we deliver reliable castings that cater to diverse needs." />
            <DetailsCard image={fift} number="5" heading="5% MEDICAL IMPLANTS AND SURGICAL INSTRUMENTS" paregraph="We provide high-precision medical implants and surgical tools that contribute to life-saving procedures." />
      </div>
    </div>
  );
}

export default Detailsslider;

function DetailsCard({ image, number, heading, paregraph }) {
  return (
    <>
      <div className='detailsslider_card_main_div'>
        {/* top */}
        <div className='detailsslider_top_div'>
          {/* left */}
          <motion.div initial={{ opacity: 0, scale: 0.8 , x:100 }} whileInView={{ opacity: 1, scale: 1 , x:0 }} transition={{ duration: 0.8,  delay: 0.2 , stiffness: 100  }} className='detailsslider_top_div_left'>
            <img src={image} alt="logo" className='detailsslider_top_div_left_image' />
          </motion.div>
          {/* right */}
          <motion.div className='detailsslider_top_div_right' initial={{ opacity: 0, scale: 0.8 , x:100 }} whileInView={{ opacity: 1, scale: 1 , x:0 }} transition={{ duration: 0.8,  delay: 0.2 , stiffness: 100  }}>
            #{number}
          </motion.div>
        </div>
        {/* bottom */}
        <div className='detailsslider_bottom_div'>
          {/* heading  */}
          <motion.div initial={{ opacity: 0, scale: 0.8 , x:100 }} whileInView={{ opacity: 1, scale: 1 , x:0 }} transition={{ duration: 0.8,  delay: 0.2 , stiffness: 100  }}  className='detailsslider_bottom_div_heading'>
            {heading}
          </motion.div>
          {/* details */}
          <motion.div initial={{ opacity: 0, scale: 0.8 , x:100 }} whileInView={{ opacity: 1, scale: 1 , x:0 }} transition={{ duration: 0.8 , delay: 0.2 , stiffness: 100 }} 
            
          className='detailsslider_bottom_div_paregraph'>
            {paregraph}
          </motion.div>
        </div>
      </div>
    </>
  );
}
