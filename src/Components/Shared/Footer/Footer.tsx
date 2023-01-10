import React from 'react'
import { Link } from 'react-router-dom';

import './footer.sass'

const logo = require('./../../../assets/logo.svg').default;

const facebook = require('./../../../assets/icon-facebook.svg').default;
const pinterest = require('./../../../assets/icon-pinterest.svg').default;
const twitter = require('./../../../assets/icon-twitter.svg').default;

const Footer = () => {
  return (
    <footer className='container-footer'>
        <div className='footer-content'>
            <div className='container-left'>
                <div className='container-left-logo'>
                    <img className='logo' src={logo} />
                    <div>
                        <Link to={'/'}><button>home</button></Link>
                        <Link to={'/about'}><button>about</button></Link>
                    </div>
                </div>
                <div className='container-left-address'>
                    <span>987 Hillcrest Lane</span>
                    <span>Irvine, CA</span>
                    <span>California 92714</span>
                    <span>Call Us: 949-833-7432</span>
                </div>
            </div>
            <div className='container-right'>
                <div className='container-right-media'>
                    <img src={facebook} />
                    <img src={pinterest} />
                    <img src={twitter} />
                </div>
                <span>Copyright 2020. All Rights Reserved</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer