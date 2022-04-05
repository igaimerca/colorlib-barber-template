import React from 'react';

import './HomePage.styles.scss';


import NavBar from '../../sections/NavBar/NavBar';
import Profile from '../../sections/Profile/Profile';
import Services from '../../sections/Services/Services';
import Team from '../../sections/Team/Team';
import Pricing from '../../sections/Pricing/Pricing';
import Gallery from '../../sections/Gallery/Gallery';
import Feedback from '../../sections/Feedback/Feedback';
import Footer from '../../sections/Footer/Footer';


function HomePage() {
    return (
        <div className='HomePage_Container'>
            <NavBar />
            <div className="top">
                <h3>WITH PATRICK POTTER</h3>
                <h1>OUR HAIRSTYLE MAKE YOUR<br />LOOK ELEGANCE</h1>
                <h1>GET MORE CONFIDENCE</h1>
                <div className='appoint'>
                    <h2>MAKE AN APPOINTMENT NOW</h2>
                </div>
            </div>
            <Profile />
            <Services />
            <Team />
            <Pricing />
            <Gallery />
            <Feedback />
            <Footer />


        </div>
    )
}

export default HomePage
