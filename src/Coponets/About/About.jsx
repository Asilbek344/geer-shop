import React from 'react'
import "./About.css"
import Fet from "./imeges/Fet.png"
import Zet from "./imeges/Zet.png"
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
    return (
        <main>
            <section id='Ab'>
                <div className="container">
                    <div className='a-b'>
                        <div className='fet'>
                            <img src={Fet} alt="" />
                            <div className='tex-f'>
                                <h1>SUMMER CACTUS & SUCCULENTS</h1>
                                <p>We are online plant offercing a wide rage of chep and tryder planst</p>
                                <button className='btn-3'>Find more <FaArrowRightLong /> </button>
                            </div>
                        </div>
                        <div className='Zet'>
                            <img src={Zet} alt="" />
                            <div className='tex-z'>
                                <h1>SUMMER CACTUS & SUCCULENTS</h1>
                                <p>We are online plant offercing a wide rage of chep and tryder planst</p>
                                <button className='btn-3'>Find more <FaArrowRightLong /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About
