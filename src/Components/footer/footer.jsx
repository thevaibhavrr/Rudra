import React from 'react'
import Footerbar from './footerbar'
import "../../styles/footer/footer.css"
import Logo from "../../assets/logo/RUDRA LOGO WHITE.png"

function Footer() {
    return (
        <>
            <div className='footer_main_div' >
                {/* top */}
                <div>
                    <Footerbar />
                </div>
                {/* bottom */}
                <div className='footer_bottom_div' >
                    {/* logo */}
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    {/* pages */}
                    <div className='footer_bottom_div_pages' >
                        <div>HOME</div>
                        <div>ABOUT US</div>
                        <div>INFRASTRUCTURE </div>
                        <div>BLOG</div>
                        <div>CONTACT US</div>
                    </div>
                    {/* SOCAIL MEDIA */}
                    <div className='footer_bottom_div_pages'>
                        <div>INSTAGRAM</div>
                        <div>FACEBOOK</div>
                        <div>YOUTUBE</div>
                        <div>X</div>
                        <div>LINKEDIN</div>
                    </div>
                    {/* contect */}
                    <div className='footer_bottom_div_pages'>
                        <div>PHONE NO</div>
                        <div>ADDRESS</div>
                        <div>EMAIL ADDRESS</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer