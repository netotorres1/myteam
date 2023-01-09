import React from 'react'

import './homeblockone.sass'

const bgPatterHomeOne = require('./../../../assets/bg-pattern-home-1.svg').default;
const bgPatterHomeTwo = require('./../../../assets/bg-pattern-home-2.svg').default;

const HomeBlockOne = () => {
  return (
    <section className='container-homeblockone'>
      <div className='homeblockone-content'>
        <div>
          <img className='bg1' alt='bg-pattern-home-one' src={bgPatterHomeOne}/> 
          <h2>Find the best <span className='talent'>talent</span></h2>
          <p>Finding the right people and building high performing teams can 
            be hard. Most companies aren’t tapping into the abundance of global 
            talent. We’re about to change that.</p>
        </div>
        <img className='bg2' alt='bg-pattern-home-two' src={bgPatterHomeTwo} />
      </div>
    </section>
  )
}

export default HomeBlockOne