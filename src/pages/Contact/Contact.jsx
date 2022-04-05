import React from 'react'
import ContactSection from '../../sections/Contact/ContactSection'
import NavBar from '../../sections/NavBar/NavBar'

function Contact() {
    return (
        <div>
            <NavBar />
            <div className='header'>
                <h1>Contact Us</h1>
            </div>
            <ContactSection />
        </div>
    )
}

export default Contact
