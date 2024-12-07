import React from 'react'
import "../../styles/footer/footerbar.css"
import Marquee from 'react-fast-marquee';

function Footerbar() {
    return (
        <Marquee speed={70} gradient={false} className='footerbar_marquee' >
            <div className='footerbar_marquee_indiv' >
                {["QUALITY", "INNOVATION", "PRECISION", "QUALITY", "INNOVATION","QUALITY", "INNOVATION", "PRECISION", "QUALITY", "INNOVATION"].map((text, index) => (
                    <span key={index} className='footerbar_marquee_span_div'  >
                        {text} <span className='footerbar_marquee_span' >🔴</span>
                    </span>
                ))}
            </div>
        </Marquee>
    );
}

export default Footerbar 