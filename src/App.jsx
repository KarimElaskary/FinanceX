import React from "react"
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import Partners from "./components/Partners"
import OurServices from "./components/OurServices"
import Benefits from './components/Benefits'
import GetStarted from "./components/GetStarted"
import Footer from "./components/Footer"

const App = () => {
  return (
  <>
    <NavBar/>
    <Hero/>
    <Partners/>
    <OurServices/>
    <Benefits/>
    <GetStarted/>
    <Footer/>
  </>
  )
}

export default App
