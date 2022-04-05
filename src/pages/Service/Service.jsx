import React from 'react'
import NavBar from '../../sections/NavBar/NavBar'
import Services from '../../sections/Services/Services'
import Footer from '../../sections/Footer/Footer';


function Service() {
    return (
        <>
            <NavBar />
            <div className='header'>
                <h1>Our Services</h1>
            </div>
            <Services />
            <Footer />
        </>
    )
}

export default Service