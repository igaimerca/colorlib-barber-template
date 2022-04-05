import React from 'react'

function Member({image, name, work}) {
    return (
        <div className="swiper-slide">
            <img src={image} />
            <div className="info">
                <span>{work}</span>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Member