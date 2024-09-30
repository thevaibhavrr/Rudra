import React from 'react'
import "../../styles/home/Reach.css"
import Circe from "../../assets/utils/lava ring.gif"
function Reach() {
    return (
        <>
            <div className='reach_main_div' >
                {/* heading */}
                <div className='reach_heading' >REACH TO US</div>
                {/* bottom section */}
                <div className='reach_bottom_section' >
                    {/* form */}
                    <div className='reach_form_main_div' >
                        {/* name */}
                        <div>
                            <input type="text" placeholder='Name' />
                        </div>
                        {/* phone NO */}
                        <div>
                            <input type="text" placeholder='Phone No' />
                        </div>
                        {/* email */}
                        <div>
                            <input type="text" placeholder='Email Address' />
                        </div>
                        {/* Message */}
                        <div>
                            <textarea type="text" placeholder='Message' rows="4" />
                        </div>
                        {/* send */}
                        <div className='reach_send_button' >Send</div>
                    </div>
                    {/* image */}
                    <div className='reach_right_gif_div' >
                        {/* gif */}
                        <div>
                            <img src={Circe} alt="logo" className='reach_right_gif' />
                        </div>
                        {/* button */}
                        <div className='discover_button_div'>
                            <button className='discover_button' style={{ width: "100%" }} >
                                <span>GET IN TOUCH</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reach