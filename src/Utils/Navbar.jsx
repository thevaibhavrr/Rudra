import React from 'react'
import sideBarIcon from "../assets/navbar/sidebarIcon.svg"
import Logo from "../assets/logo/RUDRA LOGO WHITE.png"
import "../styles/navbar/navbar.css"
function Navbar() {
    return (
        <>
        
        {/* main div */}
            <div className='navbar_main_div' >
            {/* left side */}
            <div className='left_side_div_nav' >
                <img src={sideBarIcon} alt="logo" />
            </div>
            {/* right side */}
            <div className='right_side_div_nav' >
                <img src={Logo} alt="logo" />
            </div>
            </div>

        </>
    )
}

export default Navbar


// import "../styles/navbar/navbar.css"

// import { useState, useEffect } from "react";
// import { useAnimate, stagger, motion } from "framer-motion";

// export default function App() {
//   const [open, setOpen] = useState(false);
//   const [scope, animate] = useAnimate();
//   const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

//   // the stagger effect
//   const staggerList = stagger(0.1, { startDelay: 0.25 });

//   // create the animations that will be applied
//   // whenever the open state is toggled

//   useEffect(() => {
//     animate(
//       "ul",
//       {
//         width: open ? 150 : 0,
//         height: open ? 200 : 0,
//         opacity: open ? 1 : 0
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.4
//       }
//     );
//     animate(
//       "li",
//       open
//         ? { opacity: 1, scale: 1, x: 0 }
//         : { opacity: 0, scale: 0.3, x: -50 },
//       {
//         duration: 0.2,
//         delay: open ? staggerList : 0
//       }
//     );
//   }, [open]);

//   return (
//     <div className="App" ref={scope}>

//       <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
//         {/* Click Me! */}
//                 <img src={sideBarIcon} alt="logo" />
//       </motion.button>
   
//       <ul>
//         {items.map((item, index) => (
//           <motion.li key={index}>{item}</motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// }
