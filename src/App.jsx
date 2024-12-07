// import React, { useEffect } from 'react';
// import Navbar from './Utils/Navbar';
// import Home from './Pages/Home';
// import Footer from './Components/footer/footer';
// import { Route, Routes, useLocation } from "react-router-dom";
// import Contect from './Pages/Contect';
// import { AnimatePresence } from 'framer-motion';
// import Lenis from "@studio-freight/lenis/types"

// function App() {
//   const location = useLocation();

//   useEffect(() => {
// 		const lenis = new Lenis()

// 		function raf(time) {
// 			lenis.raf(time)
// 			requestAnimationFrame(raf)
// 		}

// 		requestAnimationFrame(raf)
// 	}, [])

//   // useEffect(() => {
//   //   const lenis = new Lenis({
//   //     duration: 1.2, // Adjust the duration for the scroll
//   //     easing: (t) => t, 
//   //     smooth: true,
//   //     scroll: true,
//   //   });

//   //   const raf = (time) => {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   };

//   //   requestAnimationFrame(raf);

//   //   // Cleanup function to destroy Lenis instance on unmount
//   //   return () => {
//   //     lenis.destroy();
//   //   };
//   // }, []);

//   return (
//     <div>
//       <Navbar />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contect />} />
//         </Routes>
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import Navbar from './Utils/Navbar';
import Home from './Pages/Home';
import Footer from './Components/footer/footer';
import { Route, Routes, useLocation } from "react-router-dom";
import Contect from './Pages/Contect';
import { AnimatePresence } from 'framer-motion';
// import Lenis from '@studio-freight/lenis';
import Lenis from "@studio-freight/lenis/types"
import About from './Pages/About';


function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 30, // Adjust the duration for the scroll
      easing: (t) => t, // You can use a different easing function if you like
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup function (no destroy method)
    return () => {
      // If there's any cleanup needed, do it here
    };
  }, []);

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
