import React from 'react'

import './homeblockfour.sass'

const bg = require('./../../../assets/bg-pattern-home-6-about-5.svg').default;

const HomeBlockFour = () => {
  return (
    <section className='container-homeblockfour'>
        <img className='bg' src={bg} />
        <div className='homeblockfour-content'>
            <h2>Ready to get started?</h2>
            <button>contact us</button>
        </div>
    </section>
  )
}

export default HomeBlockFour