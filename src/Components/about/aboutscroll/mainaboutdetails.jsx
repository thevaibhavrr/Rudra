import React from 'react';
import "../../../styles/about/aboutscroll/mainaboutdetails.css";
import Builifing from './builifing';
import Detailscards from './detailscards';
import Built from '../built';

function Mainaboutdetails() {
    return (
        <>
            <div className='main_aboutdetails'> 

                {/* 1 */}
            <Built/>
             <Builifing/>
             <Detailscards/>

            </div>
        </>
    );
}

export default Mainaboutdetails;
