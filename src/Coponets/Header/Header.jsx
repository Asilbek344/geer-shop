import React, { useState } from 'react'
import "./Header.css"
import Logo from "./imeges/Logo.png"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <header>
            <div className="container heder-cn ">
                <img src={Logo} alt="" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Plant Care</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>

                <div className="header-right">
                    <CiSearch
                        onClick={() => setShowSearch(!showSearch)}
                        style={{ cursor: "pointer" }}
                    />

                    {showSearch && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    )}

                    <CiShoppingCart />
                    <button className='btn'><IoExitOutline className='login' /> Login</button>
                </div>

            </div>

        </header>
    )
}

export default Header
