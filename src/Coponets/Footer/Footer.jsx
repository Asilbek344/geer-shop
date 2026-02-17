import React from 'react'
import "./Footer.css"
import Ka from "./imesges/Ka.png"
const Footer = () => {
    return (
        <main>
            <section id='footer'>
                <div className="container ft-cn">
                    <div className='ft-card'>
                        <img src={Ka} alt="" />
                        <h1>Garden Care</h1>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className='ft-card'>
                        <img src={Ka} alt="" />
                        <h1>Garden Care</h1>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className='ft-card'>
                        <img src={Ka} alt="" />
                        <h1>Garden Care</h1>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className='Gt'>
                        <div className='put'>
                            <h1>Would you like to join newsletters?</h1>
                            <div className='put-f'>
                                <input placeholder='enter your email address...' type="email" className='put-1' /> <button className='btn-g'>Join</button>
                            </div>
                            <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our green house to yours! </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Footer
