import React from 'react'
import "../../styles/home/detailsslider.css"
// firstdetails
import First from "../../assets/home/detailsslider/firstdetails.png"
import Second from "../../assets/home/detailsslider/seconddetails.png"
function Detailsslider() {
    return (
        <>
            <div className='detailsslider_main_div' >
                <DetailsCard image={First} number="1" heading="70% AUTOMOTIVE INDUSTRY" paregraph="Specializing in components such as exhaust systems and oil feed parts, we supply high-quality castings to leading automotive manufacturers." />
                {/* <DetailsCard image={Second} number="2" heading="10% ENGINEERING COMPONENTS" paregraph="We manufacture precision parts for power tools and other engineering applications, ensuring durability and reliability.." /> */}
            </div>


        </>
    )
}

export default Detailsslider


function DetailsCard({ image, number, heading, paregraph }) {
    return (
        <>
            <div className='detailsslider_card_main_div' >
                {/* top */}
                <div className='detailsslider_top_div' >
                    {/* left */}
                    <div className='detailsslider_top_div_left' >
                        <img src={image} alt="logo" className='detailsslider_top_div_left_image' />
                    </div>
                    {/* right */}
                    <div className='detailsslider_top_div_right' >
                        #{number}
                    </div>
                </div>
                {/* bottom */}
                <div className='detailsslider_bottom_div' >
                    {/* heading  */}
                    <div className='detailsslider_bottom_div_heading' >
                        {heading}
                    </div>
                    {/* details */}
                    <div className='detailsslider_bottom_div_paregraph' >
                        {paregraph}
                    </div>
                </div>
            </div>
        </>
    )
}

// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import "../../styles/home/detailsslider.css";

// // firstdetails
// import First from "../../assets/home/detailsslider/firstdetails.png";
// import Second from "../../assets/home/detailsslider/seconddetails.png";

// function Detailsslider() {
//   const [inViewRef, inView] = useInView({
//     threshold: 0.5, // 50% of the card should be visible
//     triggerOnce: false, // Trigger multiple times
//   });

//   return (
//     <>
//       <div className="detailsslider_main_div">
//         {/* Show the first card by default and then switch to the second one when the second card is in view */}
//         <div className={`detailsslider_card_wrapper ${inView ? 'hidden' : 'show'}`}>
//           <DetailsCard
//             image={First}
//             number="1"
//             heading="70% AUTOMOTIVE INDUSTRY"
//             paregraph="Specializing in components such as exhaust systems and oil feed parts, we supply high-quality castings to leading automotive manufacturers."
//           />
//         </div>

//         <div ref={inViewRef} className={`detailsslider_card_wrapper ${inView ? 'show' : 'hidden'}`}>
//           <DetailsCard
//             image={Second}
//             number="2"
//             heading="10% ENGINEERING COMPONENTS"
//             paregraph="We manufacture precision parts for power tools and other engineering applications, ensuring durability and reliability."
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Detailsslider;

// function DetailsCard({ image, number, heading, paregraph }) {
//   return (
//     <>
//       <div className="detailsslider_card_main_div">
//         {/* top */}
//         <div className="detailsslider_top_div">
//           {/* left */}
//           <div className="detailsslider_top_div_left">
//             <img src={image} alt="logo" className="detailsslider_top_div_left_image" />
//           </div>
//           {/* right */}
//           <div className="detailsslider_top_div_right">#{number}</div>
//         </div>
//         {/* bottom */}
//         <div className="detailsslider_bottom_div">
//           {/* heading */}
//           <div className="detailsslider_bottom_div_heading">{heading}</div>
//           {/* details */}
//           <div className="detailsslider_bottom_div_paregraph">{paregraph}</div>
//         </div>
//       </div>
//     </>
//   );
// }
