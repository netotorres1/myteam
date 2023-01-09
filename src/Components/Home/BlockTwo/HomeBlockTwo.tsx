import React from 'react'

import './homeblocktwo.sass'

const person = require('./../../../assets/icon-person.svg').default;
const chart = require('./../../../assets/icon-chart.svg').default;
const cog = require('./../../../assets/icon-cog.svg').default;

const bg = require('./../../../assets/bg-pattern-home-3.svg').default;

const HomeBlockTwo = () => {
  return (
    <section className='container-homeblocktwo'>
        <div className='homeblocktwo-content'>
            <h2>Build & manage distributed teams like no one else.</h2>
            <div className='container-right'>
                <div>
                    <img src={person} alt='icon' />
                    <div>
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are 
                            passionate about what they do.</p>
                    </div>
                </div>
                <div>
                    <img src={cog} alt='icon' />
                    <div>
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning 
                            our teams always deliver.</p>
                    </div>
                </div>
                <div>
                    <img src={chart} alt='icon' />
                    <div>
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your 
                            distributed teams.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className='bg' src={bg} />
    </section>
  )
}

export default HomeBlockTwo