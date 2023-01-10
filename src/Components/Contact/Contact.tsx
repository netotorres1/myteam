import React from 'react'

import './contact.sass'

const bg1 = require('./../../assets/bg-pattern-about-2-contact-1.svg').default;
const bg2 = require('./../../assets/bg-pattern-contact-2.svg').default;

const person = require('./../../assets/icon-person.svg').default;
const cog = require('./../../assets/icon-cog.svg').default;
const chart = require('./../../assets/icon-chart.svg').default;

const ContactComponent = () => {
  return (
    <section className='container-contact'>
        <img className='bg1' src={bg1} />
        <div className='contact-content'>
            <div className='container-left'>
                <h2>Contact</h2>
                <h3>Ask us about</h3>
                <div className='container-left-content'>
                    <div>
                        <img src={person} />
                        <p>The quality of our talent network</p>
                    </div>
                    <div>
                        <img src={cog} />
                        <p>Usage & implementation of our software</p>
                    </div>
                    <div>
                        <img src={chart} />
                        <p>How we help drive innovation</p>
                    </div>
                </div>
            </div>
            <div className='container-right'>
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email Address' />
                    <input type='text' placeholder='Company Name' />
                    <input type='text' placeholder='Title' />
                    <textarea placeholder='Message'>

                    </textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
        <img className='bg2' src={bg2} />
    </section>
  )
}

export default ContactComponent