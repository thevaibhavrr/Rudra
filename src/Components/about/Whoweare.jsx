import React from 'react'
import "../../styles/about/whoweare.css"
// c:\Users\sumit\Downloads\rudra_owner.png
import RudraOwner from "../../assets/About/rudra_owner.png"
function Whoweare() {
  return (
    <>
      <div className='whoweare_main_div' >
        <div className='who_we_are_text' >WHO WE ARE</div>
        {/* bottom */}
        <div className='whoweare_bottom_div' >
          <div>
            Founded in 2008, Rudra Castings began with a small but dedicated team. From the outset, we had a clear vision-to deliver high- quality, precision-engineered investment castings to our clients.
          </div>
          <div>
            <img src={RudraOwner} alt="rudra_owner" className='whoweare_image_owner' />

          </div>
          <div>
            Over the years, our steady growth has transformed us into a key par of the $15 million Rudra Group Despite this expansion, our core mission remains unchanged: tc provide reliable, innovative solutions to clients worldwide.
          </div>

        </div>
      </div>
    </>
  )
}

export default Whoweare