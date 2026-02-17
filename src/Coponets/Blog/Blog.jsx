import React from 'react'
import "./Blog.css"
import Fa from "./imeges/Fa.png"
import Ga from "./imeges/Ga.png"
import Sa from "./imeges/Sa.png"
import Wa from "./imeges/Wa.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
    return (
        <main>
            <section id='blog'>
                <h1 className='Ser'>Our Blog Posts</h1>
                <p className='Wer'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <div className="container blog-cn">
                    <div className='blog-card'>
                        <img src={Sa} alt="" />
                        <div className='blog-tex'>
                            <h2>September 12  I Read in 6 minutes</h2>
                            <h1>Cactus & Succulent
                                Care Tips</h1>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <h3>Read More <FaArrowRightLong className='bl-icon' />
                            </h3>
                        </div>
                    </div>

                    <div className='blog-card'>
                        <img src={Fa} alt="" />
                        <div className='blog-tex'>
                            <h2>September 12  I Read in 6 minutes</h2>
                            <h1>Cactus & Succulent
                                Care Tips</h1>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <h3>Read More <FaArrowRightLong className='bl-icon' />
                            </h3>
                        </div>
                    </div>

                    <div className='blog-card'>
                        <img src={Wa} alt="" />
                        <div className='blog-tex'>
                            <h2>September 12  I Read in 6 minutes</h2>
                            <h1>Cactus & Succulent
                                Care Tips</h1>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <h3>Read More <FaArrowRightLong className='bl-icon' />
                            </h3>
                        </div>
                    </div>

                    <div className='blog-card'>
                        <img src={Ga} alt="" />
                        <div className='blog-tex'>
                            <h2>September 12  I Read in 6 minutes</h2>
                            <h1>Cactus & Succulent
                                Care Tips</h1>
                            <p>Cacti are succulents are easy care plants for any home or patio. </p>
                            <h3>Read More <FaArrowRightLong className='bl-icon' />
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Blog
