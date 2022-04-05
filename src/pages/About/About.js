import React from 'react';

import NavBar from '../../sections/NavBar/NavBar';
import Profile from "../../sections/Profile/Profile";
import Services from "../../sections/Services/Services"
import Team from "../../sections/Team/Team";
import Pricing from "../../sections/Pricing/Pricing"
import Gallery from "../../sections/Gallery/Gallery"
import Footer from "../../sections/Footer/Footer"

import './About.styles.scss'
import Feedback from '../../sections/Feedback/Feedback';
import Contact from '../../sections/Contact/ContactSection';

function About() {
    return (
        <main>
            <NavBar />
            <div className='header'>
                <h1>About Us</h1>
            </div>
            <Profile />
            <Services />
            <Team />
            <Pricing />
            <Gallery />
            <Feedback />
            <Footer />
        </main>
    )
}

export default About
