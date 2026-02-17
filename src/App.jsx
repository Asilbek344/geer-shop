import React from 'react'
import "./App.css"
import Header from './Coponets/Header/Header'
import Hero from './Coponets/Hero/Hero'
import Cards from './Coponets/Cards/Cards'
import About from "./Coponets/About/About"
import Blog from './Coponets/Blog/Blog'
import Footer from './Coponets/Footer/Footer'
import Set from './Coponets/Set/Set'
const App = () => {
  return (
   <>
   <div>
    <Header/>
    <Hero/>
    <Cards/>
    <About/>
    <Blog/>
    <Footer/>
    <Set/>
   </div>
   </>
  )
}

export default App
