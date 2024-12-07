import React from 'react'
import '../../../styles/about/aboutscroll/detailscards.css'
function Detailscards() {
    return (
        <>
            <div className='detailscards_main_div' >
                {/* 1 */}
                <Cards title={"PHILOSOPHY"} paregraph={"We believe that every product we create reflects our commitment to quality and precision. By listening to our clients and understanding their needs, we deliver solutions that go beyond expectations."} />
                <Cards title={"TEAM"} paregraph={"Our success is driven by a skilled team of professionals who embody our values of integrity, craftsmanship, and innovation. Their dedication helps us maintain the high standards we set for ourselves."} />
                <Cards title={"SUSTAINABILITY"} paregraph={"We strive to minimize our environmental footprint by adopting eco-friendly practices and reducing waste, all while maintaining top-quality production."} />
                <Cards title={"CLIENT PARTNERSHIPS"} paregraph={"Every client is a valued partner. Through transparency and collaboration, we deliver customized solutions that fit unique requirements."} />
                <Cards title={"LOOKING AHEAD"} paregraph={"Every client is a valued partner. Through transparency and collaboration, we deliver customized solutions that fit unique requirements."} />
            </div>
        </>
    )
}

export default Detailscards

function Cards({ title, paregraph }) {
    return (
        <>
            <div className='detailscards_div' >
                <div className='about_details_title' >{title}</div>
                <div className='about_details_paregraph' >{paregraph}</div>
            </div>
        </>
    )
}