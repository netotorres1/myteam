import React from 'react'

import HomeBlockOne from '../../Components/Home/BlockOne/HomeBlockOne'
import HomeBlockTwo from '../../Components/Home/BlockTwo/HomeBlockTwo'
import Navbar from '../../Components/Shared/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBlockOne/>
        <HomeBlockTwo/>
    </div>
  )
}

export default Home