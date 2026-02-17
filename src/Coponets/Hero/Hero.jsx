import React, { useState } from 'react';
import "./Hero.css";
import Flov1 from "./imeges/Flov1.png";
import Let from "./imeges/Let.png";
import Xm from "./imeges/Xm.png"
import Sx from "./imeges/Sx.png"

const Hero = () => {
  const images = [Flov1, Let,Xm,Sx];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main>
      <section id='hero-cn'>
        <div className="container hero-cn">
          <div className="hero-text">
            <h2>Welcome to GreenShop</h2>
            <h1>Let’s Make a Better <span> Planet</span></h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!</p>
            <button className='btn-1'>SHOP NOW</button>
          </div>
          <div className="hero-slider">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt="Plant" />
            <button className="next" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero;
