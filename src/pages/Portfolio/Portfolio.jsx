import React from 'react'
import NavBar from '../../sections/NavBar/NavBar'
import Footer from '../../sections/Footer/Footer';
import Gallery from '../../sections/Gallery/Gallery';


function Portfolio() {
    return (
        <>
            <NavBar />
            <div className='header'>
                <h1>Portfolio</h1>
            </div>
            <Gallery />
            <Footer />
        </>
    )
}

export default Portfolio