import React from 'react'
import Welcome from '../Components/home/welcome'
import About from '../Components/home/about'
import Precesion from '../Components/home/precesion'
import Whychoose from '../Components/home/whychoose'
import Detailsslider from '../Components/home/detailsslider'
import Innovation from '../Components/home/innovation'
import Reach from '../Components/home/Reach'
import Brand from '../Components/home/Brand'

function Home() {
  return (
    <div>
        <Welcome/>
        <About/>
        <Precesion/>
        <Whychoose/>
        <Detailsslider/>
        <Innovation/>
        <Reach/>
        <Brand/>
    </div>
  )
}

export default Home