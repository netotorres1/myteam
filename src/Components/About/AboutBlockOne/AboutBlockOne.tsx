import React from 'react'
import './aboutblockone.sass'

const bg = require('./../../../assets/bg-pattern-about-1-mobile-nav-1.svg').default;

const AboutBlockOne = () => {
  return (
    <section className='container-aboutblockone'>
        <div className='aboutblockone-content'>
            <h2>About</h2>
            <p>
                We help companies build dynamic teams made up of top global talent. 
                Using our network of passionate professionals we drive innovation 
                and deliver incredible outcomes. Talented, diverse teams shape the 
                best products and experiences. We’ll bring those teams to you.
            </p>
        </div>
        <img className='bg' src={bg} />
    </section>
  )
}

export default AboutBlockOne