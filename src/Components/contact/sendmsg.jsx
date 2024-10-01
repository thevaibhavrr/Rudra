import React from 'react'
import "../../styles/contact/sendmsg.css"
import Arrow from "../../assets/contact/arrow.png"
function Sendmsg() {
    return (
        <>
            <div className='sendmsg_main_div' >
                <div className='sendmsg_div' >
                    {/* 1 */}
                    <div className=' sendmsg_div_info ' >
                        <div className='send_info_data' >
                            <div>PHONE NUMBER </div>
                            <div className='send_info_data_value' >+91 9876512345</div>
                        </div>
                        <div className='send_info_data' >
                            <div>ADDRESS</div>
                            <div className='send_info_data_value'> 91, STAREET 2, INDIA </div>
                        </div>
                        <div className='send_info_data' >
                            <div>EMAIL </div>
                            <div className='send_info_data_value'>vaibhavrathorema@gmail.com</div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='sendmsg_div_button' >
                        <div className=''>
                            <button className='send_messsage_button' style={{ width: "100%" }} >
                                <span>SEND MESSAGE?</span>
                            </button>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='sendmsg_div_button' >
                        <div className='sendmsg_div_arrow' >
                            <img src={Arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Sendmsg