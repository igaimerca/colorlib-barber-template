import React from 'react'

function DetailsCard({icon, title, subTitle}) {
    return (
        <div className="media contact-info">
            <span className="contact-info-icon">
                <img src={icon} alt="" />
            </span>
            <div className="media-body">
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default DetailsCard