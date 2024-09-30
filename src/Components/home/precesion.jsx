import React from 'react'
import Pana from "../../assets/home/precesion/pana.png"
import bold from "../../assets/home/precesion/bold.png"
import "../../styles/home/precesion.css"
function Precesion() {
  return (
    <>
    <div className='precesion_main_div' >
        {/* left side */}
        <div className='precesion_left_div' >
            <img src={Pana} alt="logo" className='pana_image' />
        </div>
        {/* left side  */}
        <div className='precesion_right_div' >
            {/* top */}
            <div className='precesion_top_div_image' >
                <img src={bold} alt="logo" className='bold_image' />
            </div>
            {/* bottom */}
            <div className='precesion_bottom_botton' >
                <div>PRECESION</div>
                <div>INNOVATION</div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Precesion