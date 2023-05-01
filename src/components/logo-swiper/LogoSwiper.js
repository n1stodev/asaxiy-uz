import React from 'react'
import './LogoSwiper.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";

function LogoSwiper() {
    return (
        <div className='logo_swiper'>
            <div className="container">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//603481675b122.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand//63b65df2b0896.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='logo_swiper-item'>
                        <img src="https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default LogoSwiper