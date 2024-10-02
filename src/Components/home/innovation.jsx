import React from 'react';
import "../../styles/home/innovation.css";

function Innovation() {
    return ( 
        <>
            <div className='innovation_main_div'>
                <div className='innovation_div'>
                    <div className='innovation_text_section'>
                        {/* heading */}
                        <div className='innovation_heading'>INNOVATION AND PRECISION</div>
                        {/* message */}
                        <div className='innovation_paragraph'>At Rudra Castings, we are proud to deliver products that reflect the values of precision, quality, and innovation. Our commitment to these principles has earned us the trust of clients across industries, from automotive to defence, and we continue to set new standards with each project we undertake.</div>
                    </div>
                    {/* images */}
                    <div className='innovation_images_parent_div'>
                        <div className='innovation_image_div'>
                            <img src='https://pixlr.com/images/generator/how-to-generate.webp' className='innovation_image' />
                        </div>
                        <div className='innovation_image_div'>
                            <img src='https://pixlr.com/images/generator/how-to-generate.webp' className='innovation_image' />
                        </div>
                        <div className='innovation_image_div'>
                            <img src='https://pixlr.com/images/generator/how-to-generate.webp' className='innovation_image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Innovation;
