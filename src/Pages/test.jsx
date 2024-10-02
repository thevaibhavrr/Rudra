// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './test.css';

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScroll = () => {
//   useEffect(() => {
//     const container = document.querySelector('.imageContainer');
//     const containerWidth = container.scrollWidth; // Total width of the image container
//     const windowWidth = window.innerWidth; // Width of the window
//     const scrollDistance = containerWidth - windowWidth; // Amount to scroll horizontally

//     // GSAP animation to move the container horizontally
//     gsap.to(container, {
//       x: -scrollDistance, // Scroll to the left by the width of all images
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.imageWrapper',
//         start: 'top top', // Start animation when the top of the wrapper reaches the top of the screen
//         end: () => `+=${scrollDistance}`, // End animation after scrolling the total width of the container
//         pin: true, // Pin the image wrapper during the scroll
//         scrub: true, // Synchronize the animation with the scroll
//         anticipatePin: 1, // Make the pinning more responsive
//         invalidateOnRefresh: true, // Recalculate scroll on window resize or refresh
//       },
//     });
//   }, []);

//   return (
//     <div className="wrapper">
//       <div className="imageWrapper">
//         <div className="imageContainer">
//           {images.map((image, index) => (
//             <div className="image" key={index}>
//               <h3>{image.caption}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Dummy data for images and captions
// const images = [
//   { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 1' },
//   { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 2' },
//   { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 3' },
// ];

// export default HorizontalScroll;

import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import First from "../assets/home/detailsslider/firstdetails.png"

import './test.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  useLayoutEffect(() => {
    const container = document.querySelector('.imageContainer');
    const updateScrollAnimation = () => {
      const containerWidth = container.scrollWidth; // Total width of the image container
      const windowWidth = window.innerWidth; // Width of the window
      const scrollDistance = containerWidth - windowWidth; // Amount to scroll horizontally

      // Clear any previous animations before setting a new one
      ScrollTrigger.clearMatchMedia();

      // GSAP animation to move the container horizontally
      gsap.to(container, {
        x: -scrollDistance, // Scroll to the left by the width of all images
        ease: 'none',
        scrollTrigger: {
          trigger: '.imageWrapper',
          start: 'top top', // Start animation when the top of the wrapper reaches the top of the screen
          end: () => `+=${scrollDistance}`, // End animation after scrolling the total width of the container
          pin: true, // Pin the image wrapper during the scroll
          scrub: true, // Synchronize the animation with the scroll
          anticipatePin: 1, // Make the pinning more responsive
          invalidateOnRefresh: true, // Recalculate scroll on window resize or refresh
        },
      });

      // Refresh ScrollTrigger to update calculations when DOM is ready
      ScrollTrigger.refresh();
    };

    updateScrollAnimation();

    // Update scroll animation on window resize
    window.addEventListener('resize', updateScrollAnimation);

    return () => {
      window.removeEventListener('resize', updateScrollAnimation);
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <div className="imageContainer">
          {images.map((image, index) => (
            <div className="image" key={index}>
              <h3>{image.caption}</h3>
              <DetailsCard image={image.src} number="1" heading="70% AUTOMOTIVE INDUSTRY" paregraph="Specializing in components such as exhaust systems and oil feed parts, we supply high-quality castings to leading automotive manufacturers." />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const images = [
  { src: First, caption: 'Image 1' },
  { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 2' },
  { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 3' },
];
export default HorizontalScroll;
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
