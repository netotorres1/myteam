import React from 'react'
import HomeBlockFour from '../../Components/Home/BlockFour/HomeBlockFour'

import HomeBlockOne from '../../Components/Home/BlockOne/HomeBlockOne'
import HomeBlockThree from '../../Components/Home/BlockThree/HomeBlockThree'
import HomeBlockTwo from '../../Components/Home/BlockTwo/HomeBlockTwo'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBlockOne/>
        <HomeBlockTwo/>
        <HomeBlockThree/>
        <HomeBlockFour/>
        <Footer/>
    </div>
  )
}

export default Home