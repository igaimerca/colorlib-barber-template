import React from 'react'

function ServiceCard({title, image, content}) {
    return (
        <div className="s-box">
            <img src={image} className="service-icon" alt="health icon" />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default ServiceCard