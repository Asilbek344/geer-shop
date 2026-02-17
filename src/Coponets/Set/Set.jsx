import React from 'react'
import "./Set.css"
import Logo from "../Header/imeges/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Set = () => {
    return (
        <main>
            <section id='set'>
                <div className="container set-cn" >
                    <img src={Logo} alt="" />
                    <ul>
                        <li>
                            <a href="">My Account</a>
                        </li>
                        <li>
                            <a href="">Help & Guide</a>
                        </li>
                        <li>
                            <a href="">Categories</a>
                        </li>
                        <li>
                            <a href="">Social Media</a>
                        </li>
                        <FaInstagram />
                        <CiFacebook />
                        <CiTwitter />

                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Set
