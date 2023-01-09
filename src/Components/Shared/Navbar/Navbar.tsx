import React from 'react'
import { useState } from 'react';
import {MdMenu, MdClose} from 'react-icons/md'


import './navbar.sass'

const logo = require('./../../../assets/logo.svg').default;
const bg = require('./../../../assets/bg-pattern-about-1-mobile-nav-1.svg').default;

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false) 

  const handleOpen = () => {
    setOpenMenu(!openMenu)

  }

  return (
    <header className='container-header'>
        <div className='container-content'>
          <img className='logo' src={logo} />
            <div className={openMenu === false ? 'navbar' : 'open'}>
                <nav>
                    <button>home</button>
                    <button>about</button>
                </nav>
                <button className='btncontact'>contact us</button>
                <img className='bgnav' src={bg} />
            </div>
            <button onClick={handleOpen} className='btnMenu'>{openMenu === false ? <MdMenu size={40} color={'#fff'}/> : <MdClose size={40} color={'#fff'}/>}</button>
        </div>
    </header>
  )
}

export default Navbar