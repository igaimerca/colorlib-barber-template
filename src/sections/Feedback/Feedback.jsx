import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import FeedbackCard from './FeedbackCard';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Feedback.styles.scss'

function Feedback() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span className="' + className + '">' + "" + "</span>";
          },
    };
    return (
        <div className="feedback-wrapper">
            <Swiper
                className='mySwiper'
                pagination={pagination}
                modules={[Pagination]}
                rewind={true}
            >
                <SwiperSlide>
                    <FeedbackCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Feedback