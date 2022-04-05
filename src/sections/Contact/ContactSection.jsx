import React from 'react'

import "./contact.style.scss";
import DetailsCard from './DetailsCard';
import MapContainer from '../MapContainer/MapContainer';

import HomeIcon from "../../assets/images/home.png"
import MailIcon from "../../assets/images/mail.png"
import PhoneIcon from "../../assets/images/phone.png"




function ContactSection() {

    return (
        <div className="contact-wrapper">
            <MapContainer />
            <div className="form-part">
                <div>
                    <h2>Get in Touch</h2>
                    <form action="#">
                        <textarea
                            className="field"
                            name="message"
                            id="message"
                            cols={98}
                            rows={9}
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Enter Message'} placeholder="Enter Message"
                        >
                        </textarea>
                        <div className="field-group">
                            <input
                                className="field name-input"
                                name="name"
                                id="name"
                                type="text"
                                onFocus={(e) => e.target.placeholder = ''}
                                onBlur={(e) => e.target.placeholder = 'Enter your name'}
                                placeholder="Enter your name" />
                            <input
                                className="field"
                                name="email"
                                type="email"
                                id="email"
                                onFocus={(e) => e.target.placeholder = ''}
                                onBlur={(e) => e.target.placeholder = 'Enter your email'}
                                placeholder="Enter your email" />
                        </div>
                        <input
                            className="field subject-input"
                            name="ema
                        il"
                            type="email"
                            id="email"
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Enter Subject'}
                            placeholder="Enter Subject" />
                        <button type="submit" className="contact-btn">Send</button>
                    </form>
                </div>
                <div className="contact-details">
                    <DetailsCard
                        icon={HomeIcon}
                        title="Buttonwood, California."
                        subTitle="Rosemead, CA 91770"
                    />
                    <DetailsCard
                        icon={PhoneIcon}
                        title="+1 253 565 2365"
                        subTitle="Mon to Fri 9am to 6pm"
                    />
                    <DetailsCard
                        icon={MailIcon}
                        title="support@colorlib.com"
                        subTitle="Send us your query anytime!"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactSection