import React, { useState } from 'react'
import "./Cards.css"
import Fs from "./imeges/Fs.png"
import Cv from "./imeges/Cv.png"
import Ht from "./imeges/Ht.png"
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Er from "./imeges/Er.png"
import Sd from "./imeges/Sd.png"

const Cards = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="container card-cn">

      <div className='card-cnm'>
        <div className='card-1'>
          <img src={Cv} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Fs} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Ht} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Fs} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Cv} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>


        <div className='card-1'>
          <img src={Ht} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>
        <div className='card-1'>
          <img src={Cv} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Fs} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>

        <div className='card-1'>
          <img src={Cv} alt="" />
          <div className='icons-1'>
            <CiShoppingCart className='' />
            <CiHeart />
            <CiSearch />
          </div>
          <h1>Angel Wing Begonia</h1>
          <p>$169.00</p>
        </div>
      </div>
      <div className='catigors-m'>

        {/* 1 - category */}
        <aside className='Cards'>
          <h3 className="cat-title" onClick={() => setOpen1(!open1)}>
            Categories
          </h3>

          {open1 && (
            <div className="cat-content">
              <ul className="cat-list">
                <li>House Plants <span>(33)</span></li>
                <li>Potter Plants <span>(12)</span></li>
                  <li>House Plants <span>(33)</span></li>
                <li>Potter Plants <span>(12)</span></li>
                  <li>House Plants <span>(33)</span></li>
                <li>Potter Plants <span>(12)</span></li>
              </ul>
              <img className="sale-img" src={Fs} alt="Sale" />
            </div>
          )}
        </aside>

        {/* 2 - category */}
        <aside className='Cards'>
          <h3 className="cat-title" onClick={() => setOpen2(!open2)}>
            Categories
          </h3>

          {open2 && (
            <div className="cat-content">
              <ul className="cat-list">
                <li>Seeds <span>(65)</span></li>
                <li>Small Plants <span>(39)</span></li>
                  <li>House Plants <span>(33)</span></li>
                <li>Potter Plants <span>(12)</span></li>
              </ul>
              <img className="sale-img" src={Sd} alt="Sale" />
            </div>
          )}
        </aside>

        { }
        <aside className='Cards'>
          <h3 className="cat-title" onClick={() => setOpen3(!open3)}>
            Categories
          </h3>

          {open3 && (
            <div className="cat-content">
              <ul className="cat-list">
                <li>Big Plants <span>(23)</span></li>
                <li>Succulents <span>(17)</span></li>
              </ul>
              <img className="sale-img" src={Er} alt="Sale" />
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

export default Cards
