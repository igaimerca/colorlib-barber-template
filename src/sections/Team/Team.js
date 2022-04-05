import React from 'react'
import './Team.styles.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "./Team.styles.scss";
import { Pagination } from "swiper";
import Member from './Member';
import {membersData} from "../../assets/data";

export default function Team() {


    return (
        <section className="team-section mb-90">

            <div className="team-container">
                <div className="team-header text-center">
                    <h3>PROFESSIONAL TEAMS</h3>
                    <h1>OUR AWARD WINNER HAIR CUT EXPARTS FOR YOU</h1>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {membersData && membersData?.map(({profile, work, name}, i) => (
                            <SwiperSlide key={i}>
                                <Member
                                    image={profile}
                                    work={work}
                                    name={name}
                                />
                            </SwiperSlide>
                        ))}
                    </div>

                </div>
            </Swiper>



        </section>
    )
}

