import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './test.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  useEffect(() => {
    const container = document.querySelector('.imageContainer');
    const containerWidth = container.scrollWidth; // Total width of the image container
    const windowWidth = window.innerWidth; // Width of the window
    const scrollDistance = containerWidth - windowWidth; // Amount to scroll horizontally

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
  }, []);

  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <div className="imageContainer">
          {images.map((image, index) => (
            <div className="image" key={index}>
              <img src={image.src} alt={`Image ${index + 1}`} />
              <h3>{image.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dummy data for images and captions
const images = [
  { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 1' },
  { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 2' },
  { src: 'https://imagejournal.org/wp-content/uploads/2024/06/Art-Images_Page_040_Image_0001-scaled.jpg', caption: 'Image 3' },
];

export default HorizontalScroll;
