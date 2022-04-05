import React from 'react'
import ServiceCard from './ServiceCard';
import './Services.styles.scss';

import stylishIcon from "../../assets/images/stylish-hair-cut.png";
import massegeIcon from "../../assets/images/body-massege.png";
import breardIcon from "../../assets/images/breard-style.png"

function Services() {
    return (
        <section className="services">
            <div className="s-heading">
                <span>Professional Services</span>
                <h2>Our best services that we are offering to you</h2>
            </div>
            <div className="s-box-container">
                <ServiceCard
                    image={stylishIcon}
                    title="Stylish Hair Cut"
                    content="Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
                />
                <ServiceCard
                    image={massegeIcon}
                    title="Body Massage"
                    content="Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
                />
                <ServiceCard
                    image={breardIcon}
                    title="Beard Style"
                    content="Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
                />
            </div>

        </section>
    )
}

export default Services