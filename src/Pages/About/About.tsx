import React from 'react'
import AboutBlockOne from '../../Components/About/AboutBlockOne/AboutBlockOne'
import AboutBlockThree from '../../Components/About/AboutBlockThree/AboutBlockThree'
import AboutBlockTwo from '../../Components/About/AboutBlockTwo/AboutBlockTwo'
import HomeBlockFour from '../../Components/Home/BlockFour/HomeBlockFour'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'


function About() {
  return (
    <div>
      <Navbar/>
      <AboutBlockOne/>
      <AboutBlockTwo />
      <AboutBlockThree/>
      <HomeBlockFour/>
      <Footer/>
    </div>
  )
}

export default About