import React from 'react'
import "../../styles/home/whychoose.css"
import Matchin from "../../assets/home/whychoose/matchin.png"
function Whychoose() {
    return (
        <>
            <div className='main_div_whychoose' >
                <div className='div_whychoose_for_gif' >
                    <div className='div_whychoose_for_text' >
                        <div className='whychoose_text' >WHY CHOOSE RUDRA CASTINGS ?</div>
                        {/* CARDS */}
                        <div className='whychoose_cards_div_parent' >

                            <Card title="PRECISION IN EVERY DETAIL" paregraph="We approach every project with the utmost care to ensure flawless execution." />
                            <Card title="UNCOMPROMISING QUALITY" paregraph="Our ISO-certified processes are designed to deliver high- quality castings that exceed industry expectations." />
                            <Card title="DRIVEN BY INNOVATION" paregraph="We continually refine our techniques to stay at the forefront of casting technology, offering you the best solutions available." />
                            
                            <Card title="PRECISION IN EVERY DETAIL" paregraph="We approach every project with the utmost care to ensure flawless execution." />
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Whychoose


function Card({ title, paregraph }) {
    return (

        <div className='card_whychoose_div' >
            <div className='card_whychoose_title' >{title}</div>
            <div>
                <img src={Matchin} alt="logo" className='card_whychoose_image' />
            </div>
            <div className='card_whychoose_paregraph' >
                {paregraph}
            </div>
        </div>
    )
}