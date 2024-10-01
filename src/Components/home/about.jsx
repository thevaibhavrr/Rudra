
// import React, { useEffect } from 'react';
// import "../../styles/home/about.css";

// function About() {
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             const windowHeight = window.innerHeight;
        
//             // Calculate the start and end scroll thresholds
//             const startScroll = windowHeight * 0.5; // 10% of screen height
//             const endScroll = windowHeight * 1; // 70% of screen height
        
//             if (scrollTop >= startScroll && scrollTop <= endScroll) {
//                 // Map the scroll range to the background size increase
//                 const progress = (scrollTop - startScroll) / (endScroll - startScroll); // Normalize between 0 and 1
//                 let newSize = 20 + progress * (55 - 20); // Increase from 35% to 50%
        
//                 const aboutSection = document.querySelector('.home_about_div_second');
//                 if (aboutSection) {
//                     aboutSection.style.setProperty('--background-size', `${newSize}%`);
//                 }
//             } else if (scrollTop < startScroll) {
//                 // Before reaching the 10%, set the background size to the initial value
//                 const aboutSection = document.querySelector('.home_about_div_second');
//                 if (aboutSection) {
//                     aboutSection.style.setProperty('--background-size', `20%`);
//                 }
//             }
//         };
        
        

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div>
//             <div className='home_about_main_div'>
//                 <div className='home_about_div_second'>
//                     <div className='home_about_div_text_div'>
//                         <div className='home_about_div_title'>ABOUT US</div>
//                         <div className='home_about_div_paregraph'>
//                             At Rudra Castings, we transform vision into reality with superior investment castings.
//                             Since 2008, our commitment to quality and innovation has positioned us as a leader 
//                             in the global steel castings market. Part of the $15 million Rudra Group, we have grown 
//                             from humble beginnings into a trusted name synonymous with precision, reliability, and excellence.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import "../../styles/home/about.css";

function About() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate the start and end scroll thresholds
            const startScroll = windowHeight * 0.5; // 50% of screen height
            const endScroll = windowHeight * 1; // 100% of screen height

            const aboutSection = document.querySelector('.home_about_div_second');
            if (aboutSection) {
                if (scrollTop >= startScroll && scrollTop <= endScroll) {
                    // Map the scroll range to the background size increase
                    const progress = (scrollTop - startScroll) / (endScroll - startScroll); // Normalize between 0 and 1
                    let newSize = 20 + progress * (55 - 20); // Increase from 20% to 55%
                    aboutSection.style.setProperty('--background-size', `${newSize}%`);
                } else if (scrollTop < startScroll) {
                    // Before reaching the start threshold, set to initial value
                    aboutSection.style.setProperty('--background-size', `20%`);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className='home_about_main_div'>
                <motion.div 
                    className='home_about_div_second'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='home_about_div_text_div'>
                        <motion.div 
                            className='home_about_div_title'
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            ABOUT US
                        </motion.div>
                        <motion.div 
                            className='home_about_div_paragraph'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            At Rudra Castings, we transform vision into reality with superior investment castings.
                            Since 2008, our commitment to quality and innovation has positioned us as a leader 
                            in the global steel castings market. Part of the $15 million Rudra Group, we have grown 
                            from humble beginnings into a trusted name synonymous with precision, reliability, and excellence.
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
