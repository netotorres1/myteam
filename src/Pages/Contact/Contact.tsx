import React from 'react'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import ContactComponent from '../../Components/Contact/Contact'
function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactComponent />
      <Footer/>
    </div>
  )
}

export default Contact