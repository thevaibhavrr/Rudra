import React from 'react'
import Aboutwelcome from '../Components/about/aboutwelcome'
import Brand from '../Components/home/Brand'
import Whoweare from '../Components/about/Whoweare'
import Mainaboutdetails from '../Components/about/aboutscroll/mainaboutdetails'
import Built from '../Components/about/built'

function About() {
    return (
        <div>
            <Aboutwelcome />
            <Whoweare/>
            <Built/>
            <Mainaboutdetails/>

            <Brand />

        </div>
    )
}

export default About