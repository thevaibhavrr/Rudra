import React from 'react';
import "../../styles/home/welcome.css";
import CircelGif from "../../assets/utils/lava ring.gif";

function Welcome() {
  return (
    <>
      <div className='welcome_section_main_div'>
        {/* top */}
        <div className='welcome_top_divs'>
          <div className='welcome_text'>
            Welcome to 
          </div>
          <div className='rudra_text'>
            RUDRA CASTINGS
          </div>
        </div>
        {/* center */}
        <div className='welcome_center_div'>
          <img src={CircelGif} alt="logo" />
        </div>
        {/* bottom */}
        <div className='welcome_top_divs'>
          <div className='welcome_text'>
            EMPOWERING PRECISION
          </div>
          <div className='discover_button_div'>
            <button className='discover_button'>
              <span>DISCOVER</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
