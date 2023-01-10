import React from 'react'
import { useState } from 'react';

import './contact.sass'

const bg1 = require('./../../assets/bg-pattern-about-2-contact-1.svg').default;
const bg2 = require('./../../assets/bg-pattern-contact-2.svg').default;

const person = require('./../../assets/icon-person.svg').default;
const cog = require('./../../assets/icon-cog.svg').default;
const chart = require('./../../assets/icon-chart.svg').default;

const ContactComponent = () => {

        const [form, SetForm] = useState({
            name: '',
            email: '',
            companyName: '',
            title:'',
            message:''
        })

    const handleChange = (e:any) => {
        let newProp:any = form;
        newProp[e.target.name] = e.target.value;
        SetForm({...newProp})

    }

    const [emptyValue, SetEmptyValue] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault();
        let emptyValues = Object.values(form).some(obj => obj === '');
        SetEmptyValue(emptyValues)
    }

  return (
    <section className='container-contact'>
        <img alt='Background' className='bg1' src={bg1} />
        <div className='contact-content'>
            <div className='container-left'>
                <h2>Contact</h2>
                <h3>Ask us about</h3>
                <div className='container-left-content'>
                    <div>
                        <img alt='Icon' src={person} />
                        <p>The quality of our talent network</p>
                    </div>
                    <div>
                        <img alt='Icon' src={cog} />
                        <p>Usage & implementation of our software</p>
                    </div>
                    <div>
                        <img alt='Icon' src={chart} />
                        <p>How we help drive innovation</p>
                    </div>
                </div>
            </div>
            <div className='container-right'>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <input name='name' type='text' placeholder='Name' onChange={(e) => {handleChange(e)}} />
                    {emptyValue && form['name'] === '' ? <span className='error'>This field is required</span> :<></> }
                    <input name='email' type='text' placeholder='Email Address' onChange={(e) => {handleChange(e)}} />
                    {emptyValue && form['email'] === '' ? <span className='error'>This field is required</span> :<></> }
                    <input name='companyName' type='text' placeholder='Company Name' onChange={(e) => {handleChange(e)}} />
                    {emptyValue && form['companyName'] === '' ? <span className='error'>This field is required</span> :<></> }
                    <input name='title' type='text' placeholder='Title' onChange={(e) => {handleChange(e)}} />
                    {emptyValue && form['title'] === '' ? <span className='error'>This field is required</span> :<></> }
                    <textarea name='message' placeholder='Message' onChange={(e) => {handleChange(e)}}>
                    </textarea>
                    {emptyValue && form['message'] === '' ? <span className='error'>This field is required</span> :<></> }
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
        <img alt='Background' className='bg2' src={bg2} />
    </section>
  )
}

export default ContactComponent