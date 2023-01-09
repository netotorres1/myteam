import React from 'react'

import './navbar.sass'

const logo = require('./../../../assets/logo.svg').default;

function Navbar() {
  return (
    <header className='container-header'>
        <div className='container-content'>
            <div>
                <img src={logo} />
                <nav>
                    <button>home</button>
                    <button>about</button>
                </nav>
            </div>
            <button className='btncontact'>contact us</button>
        </div>
    </header>
  )
}

export default Navbar