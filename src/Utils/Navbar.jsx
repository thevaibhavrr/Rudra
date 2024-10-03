import React, { useState, useEffect } from 'react'; 
import { useAnimate, stagger, motion } from 'framer-motion';
import sideBarIcon from "../assets/navbar/sidebarIcon.svg";
import Logo from "../assets/logo/RUDRA LOGO WHITE.png";
import "../styles/navbar/navbar.css";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const items = ["Home", "Contact Us"];
    const routes = ["/", "/contact"]; 
    const location = useLocation();

    // the stagger effect
    const staggerList = stagger(0.1, { startDelay: 0.12 });

    useEffect(() => {
        animate(
            "ul",
            {
                width: open ? 150 : 0,
                height: open ? 'auto' : 0,
                opacity: open ? 1 : 0
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.2
            }
        );
        animate(
            "li",
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, x: -100 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);

    // Close the navbar when the location changes
    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <>
            {/* main div */}
            <div className='navbar_main_div'>
                {/* left side */}
                <div className='left_side_div_nav'>
                    <motion.button style={{backgroundColor: "black", border: "none"}} onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
                        <img src={sideBarIcon} alt="Sidebar Icon" className='sidebar_icon_navbar' />
                    </motion.button>
                </div>
                {/* right side */}
                <div className='right_side_div_nav'>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            {/* Sidebar menu */}
            <div className={`sidebar ${open ? 'open' : 'closed'}`} ref={scope}>
                <motion.ul>
                    {items.map((item, index) => (
                        <motion.li key={index}
                            initial={{ borderBottom: "none", backgroundColor: "black", width: "100%", borderRadius: "10px" }}
                            whileHover={{ width: "100%", backgroundColor: "red"}}
                            transition={{ duration: 0.1 }}
                        >
                            <Link to={routes[index]} style={{ color: 'white', textDecoration: 'none' }}>
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </>
    );
}

export default Navbar;


// import React, { useState, useEffect } from 'react'; 
// import { useAnimate, stagger, motion } from 'framer-motion';
// import sideBarIcon from "../assets/navbar/sidebarIcon.svg";
// import Logo from "../assets/logo/RUDRA LOGO WHITE.png";
// import "../styles/navbar/navbar.css";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [scope, animate] = useAnimate();
//     const items = ["Home", "Contact Us"];
//     const routes = ["/", "/contact"]; 

//     // the stagger effect
//     const staggerList = stagger(0.1, { startDelay: 0.25 });

//     useEffect(() => {
//         animate(
//             "ul",
//             {
//                 width: open ? 150 : 0,
//                 height: open ? 'auto' : 0,
//                 opacity: open ? 1 : 0
//             },
//             {
//                 type: "spring",
//                 bounce: 0,
//                 duration: 0.4
//             }
//         );
//         animate(
//             "li",
//             open
//                 ? { opacity: 1, scale: 1, x: 0 }
//                 : { opacity: 0, x: -100 },
//             {
//                 duration: 0.4,
//                 delay: open ? staggerList : 0
//             }
//         );
//     }, [open]);

//     return (
//         <>
//             {/* main div */}
//             <div className='navbar_main_div'>
//                 {/* left side */}
//                 <div className='left_side_div_nav'>
//                     <motion.button style={{backgroundColor: "black", border: "none"}} onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
//                         <img src={sideBarIcon} alt="Sidebar Icon" className='sidebar_icon_navbar' />
//                     </motion.button>
//                 </div>
//                 {/* right side */}
//                 <div className='right_side_div_nav'>
//                     <img src={Logo} alt="Logo" />
//                 </div>
//             </div>
//             {/* Sidebar menu */}
//             <div className={`sidebar ${open ? 'open' : ''}`} ref={scope}>
//                 <motion.ul>
//                     {items.map((item, index) => (
//                         <motion.li key={index}
//                             initial={{ borderBottom: "none", width: "80%" }}
//                             whileHover={{ width: "100%" }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <Link to={routes[index]} style={{ color: 'white', textDecoration: 'none' }}>
//                                 {item}
//                             </Link>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//             </div>
//         </>
//     );
// }

// export default Navbar;



// import React, { useState, useEffect } from 'react'; 
// import { useAnimate, stagger, motion } from 'framer-motion';
// import sideBarIcon from "../assets/navbar/sidebarIcon.svg";
// import Logo from "../assets/logo/RUDRA LOGO WHITE.png";
// import "../styles/navbar/navbar.css";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [scope, animate] = useAnimate();
//     const items = ["Home", "Contact Us"];
//     const routes = ["/", "/contact"]; 

//     // the stagger effect
//     const staggerList = stagger(0.1, { startDelay: 0.25 });

//     useEffect(() => {
//         animate(
//             "ul",
//             {
//                 width: open ? 150 : 0,
//                 height: open ? 'auto' : 0,
//                 opacity: open ? 1 : 0
//             },
//             {
//                 type: "spring",
//                 bounce: 0,
//                 duration: 0.4
//             }
//         );
//         animate(
//             "li",
//             open
//                 ? { opacity: 1, scale: 1, x: 0 }
//                 : { opacity: 0, x: -100 },
//             {
//                 duration: 0.4,
//                 delay: open ? staggerList : 0
//             }
//         );
//     }, [open]);

//     return (
//         <>
//             {/* main div */}
//             <div className='navbar_main_div'>
//                 {/* left side */}
//                 <div className='left_side_div_nav'>
//                     <motion.button style={{backgroundColor: "black", border: "none"}} onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
//                         <img src={sideBarIcon} alt="Sidebar Icon" className='sidebar_icon_navbar' />
//                     </motion.button>
//                 </div>
//                 {/* right side */}
//                 <div className='right_side_div_nav'>
//                     <img src={Logo} alt="Logo" />
//                 </div>
//             </div>
//             {/* Sidebar menu */}
//             <div className="sidebar" ref={scope}>
//                 <motion.ul>
//                     {items.map((item, index) => (
//                         <motion.li key={index}
//                             initial={{ borderBottom: "none", backgroundColor: "black", width: "80%" }}
//                             whileHover={{ backgroundColor: "red", width: "100%" }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <Link to={routes[index]} style={{ color: 'white', textDecoration: 'none' }}>
//                                 {item}
//                             </Link>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//             </div>
//         </>
//     );
// }

// export default Navbar;
