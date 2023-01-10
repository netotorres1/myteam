import React from 'react'

import './aboutblockthree.sass'

const theverge = require('./../../../assets/logo-the-verge.png')
const jakartapost = require('./../../../assets/logo-jakarta-post.png')
const theguardian = require('./../../../assets/logo-the-guardian.png')
const techradar = require('./../../../assets/logo-tech-radar.png')
const gadgets = require('./../../../assets/logo-gadgets-now.png')
const bg = require('./../../../assets/bg-pattern-about-4.svg').default;

const AboutBlockThree = () => {
  return (
    <section className='container-aboutblockthree'>
        <img className='bg' src={bg} />
        <div className='aboutblockthree-content'>
            <h2>Some of our clients</h2>
            <div>
                <img alt='The Verge' src={theverge} />
                <img alt='Jakarta Post' src={jakartapost} />
                <img alt='The Guardian' src={theguardian} />
                <img alt='Tech Radar' src={techradar} />
                <img alt='Gadgets' src={gadgets} />
            </div>
        </div>
    </section>
  )
}

export default AboutBlockThree