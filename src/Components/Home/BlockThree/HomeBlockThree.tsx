import React from 'react'

import './homeblockthree.sass'

const kady = require('./../../../assets/avatar-kady.jpg');
const aiysha = require('./../../../assets/avatar-aiysha.jpg');
const arhur = require('./../../../assets/avatar-arthur.jpg');

const quotes = require('./../../../assets/icon-quotes.svg').default;
const bg1 = require('./../../../assets/bg-pattern-home-4-about-3.svg').default;
const bg2 = require('./../../../assets/bg-pattern-home-5.svg').default;

const HomeBlockThree = () => {
  return (
    <section className='container-homeblockthree' >
        <img className='bg1' src={bg1} />
            <div className='homeblockthree-container'>
                <h2>Delivering real results for top companies. Some of our <span className='span'>sucess stories.</span></h2>
                <div className='container-quotes'>
                    <div>
                        <img className='quotes' src={quotes} />
                        <p>“The team perfectly fit the specialized skill set required. They focused 
                            on the most essential features helping us launch the platform eight months 
                            faster than planned.”</p>
                        <h3>Kady Baker</h3>
                        <span>Product Manager at Bookmark</span>
                        <img className='avatar' src={kady} />
                    </div>
                    <div>
                        <img className='quotes' src={quotes} />
                        <p>“We needed to automate our entire onboarding process. The team came in and 
                            built out the whole journey. Since going live, user retention has gone 
                            through the roof!”</p>
                        <h3>Aiysha Reese</h3>
                        <span>Founder of Manage</span>
                        <img className='avatar' src={aiysha} />
                    </div>
                    <div>
                        <img className='quotes' src={quotes} />
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for 
                            hiring a physio. The launch was an instant success with 100k downloads in the 
                            first month.”</p>
                        <h3>Arthur Clarke</h3>
                        <span>Co-founder of MyPhysio</span>
                        <img className='avatar' src={arhur} />
                    </div>
                </div>
            </div>
        <img className='bg2' src={bg2} />
    </section>
  )
}

export default HomeBlockThree