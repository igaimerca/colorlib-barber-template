import React from 'react'
import "./BlogComponent.style.scss"

export default function BlogCard({ banner }) {
    return (
        <div className="blog-card">
            <div className="blog-banner">
                <img src={banner} alt="" />
                <div className="blog-date">
                    <h2>15</h2>
                    <h5>Jan</h5>
                </div>
            </div>
            <div className="blog-details">
                <h2>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <ul className="blog-info-link">
                    <li><a href="#"><i class="fa-solid fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i class="fa-solid fa-comments"></i> 03 Comments</a></li>
                </ul>
            </div>
        </div>
    )
}
