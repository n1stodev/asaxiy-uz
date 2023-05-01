import React from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

function Banner() {
    return (
        <div className='banner container'>
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6411577c955a4.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/644b6c0c0d5d3.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/64477ac5a70d9.jpg.webp" alt="" /></SwiperSlide>
            </Swiper>
            <div className="banner__advert">
                <span>01</span>
                :
                <span>23</span>
                :
                <span>34</span>
            </div>
        </div>
    )
}

export default Banner