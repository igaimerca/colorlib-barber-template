import React from 'react'
import QuoteIcon from "../../assets/images/quote.png"
import './Feedback.styles.scss'

function FeedbackCard() {
    return (
        <div className="feedback-card">
            <div className="left-section">
                <div className="quote-icon">
                    <img src={QuoteIcon} alt="Quote icon" />
                </div>
                <p>Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum. Suspendis.</p>
                <span>JONT NICOLIN KOOK</span>
            </div>
            <div className="right-section">
                <div className="quote-icon">
                    <img src={QuoteIcon} alt="Quote icon" />
                </div>
                <p>Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum. Suspendis.</p>
                <span>JONT NICOLIN KOOK</span>
            </div>
        </div>
    )
}

export default FeedbackCard