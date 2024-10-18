import React from 'react'
import Aboutwelcome from '../Components/about/aboutwelcome'
import Brand from '../Components/home/Brand'
import Whoweare from '../Components/about/Whoweare'
import Mainaboutdetails from '../Components/about/aboutscroll/mainaboutdetails'
import { motion } from 'framer-motion';


function About() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -500 }}
                transition={{ duration: 0.2, type: 'tween' }}
            >
                <Aboutwelcome />
            </motion.div>
            <Whoweare />
            <Mainaboutdetails />

            <Brand />

        </div>
    )
}

export default About