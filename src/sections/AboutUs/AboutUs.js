import React from 'react';

import './AboutUs.styles.scss';

function AboutUs() {
  return (
    <main>
        <div className='header'>
            <h1>About Us</h1>
        </div>
        <div className='profile'>
            <div className='profimg'>
              <div className='picframe'> 
                <div className='innerpic'>
                <img src="https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='Barber'/>
                </div>
              </div>
            </div>
            <div className='brief'> 
              <h3><strong>ABOUT OUR COMPANY</strong></h3>
              <h1>52 YEARS OF EXPERIENCE IN <br/>HAIRCUT!</h1>
              <p>Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.</p>
              <p id='specific'><strong>Brook presents your services with flexible, convenient and ent anipurpose layouts. You can select your favorite.</strong></p>
              <img src='https://cdn.pixabay.com/photo/2014/11/09/08/06/signature-523237_960_720.jpg' alt='Signature'/>
            </div>
        </div>
        
        
    </main>
  )
}

export default AboutUs
