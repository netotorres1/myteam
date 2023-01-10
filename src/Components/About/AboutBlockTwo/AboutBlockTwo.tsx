import React from 'react'
import {useState} from 'react'

import './aboutblocktwo.sass'

const aden = require('./../../../assets/avatar-aden.jpg')
const christian = require('./../../../assets/avatar-christian.jpg')
const cruz = require('./../../../assets/avatar-cruz.jpg')
const drake = require('./../../../assets/avatar-drake.jpg')
const nikita = require('./../../../assets/avatar-nikita.jpg')
const griffin = require('./../../../assets/avatar-griffin.jpg')

const bg1 = require('./../../../assets/bg-pattern-about-2-contact-1.svg').default;
const bg2 = require('./../../../assets/bg-pattern-home-4-about-3.svg').default;

const twitter = require('./../../../assets/icon-twitter.svg').default;
const linkedin = require('./../../../assets/icon-linkedin.svg').default;

const cross = require('./../../../assets/icon-cross.svg').default;
const close = require('./../../../assets/icon-close.svg').default;

const AboutBlockTwo = () => {

    const [openNikita, setOpenNikita] = useState(false)
    const [openChristian, setOpenChristian] = useState(false) 
    const [openCruz, setOpenCruz] = useState(false) 
    const [openDrake, setOpenDrake] = useState(false) 
    const [openGriffin, setOpenGriffin] = useState(false) 
    const [openAden, setOpenAden] = useState(false) 

    const handleOpenNikita = () => {
        setOpenNikita(!openNikita)

    }

    const handleOpenChristian = () => {
        setOpenChristian(!openChristian)

    }
    const handleOpenCruz = () => {
        setOpenCruz(!openCruz)

    }
    const handleOpenDrake = () => {
        setOpenDrake(!openDrake)

    }
    const handleOpenGriffin = () => {
        setOpenGriffin(!openGriffin)

    }
    const handleOpenAden = () => {
        setOpenAden(!openAden)

    }

  return (
    <section className='container-aboutblocktwo'>
        <img className='bg1' src={bg1} />
        <h2>Meet the directors</h2>
        <div className='aboutblocktwo-content'>
            <div>
                <img src={nikita} />
                <h3>Nikita Marks</h3>
                <span>Founder & CEO</span>
                <button onClick={handleOpenNikita}>{openNikita == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openNikita === false ? 'nikita' : 'nikitaopen'}>
                    <h3>Nikita Marks</h3>
                    <p>“It always amazes me how much talent there is in every corner of the globe.”</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
            <div>
                <img src={christian} />
                <h3>Cristian Duncan</h3>
                <span>Co-founder & COO</span>
                <button onClick={handleOpenChristian}>{openChristian == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openChristian === false ? 'christian' : 'christianopen'}>
                    <h3>Cristian Duncan</h3>
                    <p>“Distributed teams required unique processes. You need to approach work in a new way.”
                        Cristian Duncan</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
            <div>
                <img src={cruz} />
                <h3>Cruz Hamer</h3>
                <span>Co-founder & CTO</span>
                <button onClick={handleOpenCruz}>{openCruz == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openCruz === false ? 'cruz' : 'cruzopen'}>
                    <h3>Cruz Hamer</h3>
                    <p>“Technology is at the forefront of enabling distributed teams. That's where we come in.”</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
            <div>
                <img src={drake} />
                <h3>Drake Heaton</h3>
                <span>Business Development Lead</span>
                <button onClick={handleOpenDrake}>{openDrake == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openDrake === false ? 'drake' : 'drakeopen'}>
                    <h3>Drake Heaton</h3>
                    <p>“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
            <div>
                <img src={griffin} />
                <h3>Griffin Wise</h3>
                <span>Lead Marketing</span>
                <button onClick={handleOpenGriffin}>{openGriffin == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openGriffin === false ? 'griffin' : 'griffinopen'}>
                    <h3>Griffin Wise</h3>
                    <p>“Unique perspectives shape unique products, which is what you need to survive these days.”</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>
                </div>
            </div>
            <div>
                <img src={aden} />
                <h3>Aden Allan</h3>
                <span>Head of Talent</span>
                <button onClick={handleOpenAden}>{openAden == false ? <button className='btnopen'><img className='icon' src={cross} /></button> : <button className='btnclose'><img className='icon' src={close} /></button>}</button>
                <div className={openAden === false ? 'aden' : 'adenopen'}>
                    <h3>Aden Allan</h3>
                    <p>“Empowered teams create truly amazing products. Set the north star and let them follow it.”</p>
                    <div className='media'>
                        <img src={twitter} />
                        <img src={linkedin} />
                    </div>  
                </div>
            </div>
        </div>
        <img className='bg2' src={bg2} />
    </section>
  )
}

export default AboutBlockTwo