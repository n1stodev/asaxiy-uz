import React from 'react'
import './Payment.css'
import AboutApp from '../../components/about-app/AboutApp'
import LogoSwiper from '../../components/logo-swiper/LogoSwiper'
import Comforts from '../../components/comforts/Comforts'

function Payment() {
    return (
        <>
            <div className='container login'>
                <div className="pay__box">
                    <h3 className="pay__title">To'lov</h3>
                    <p className="pay__rem">Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
                    <form className='pay__form'>
                        <input type="text" className='pay__from-inp' placeholder='Namuna: A111 yoki B222 yoki M333' />
                        <button className='pay__from-btn' type='submit'>Tasdiqlash</button>
                    </form>
                    <div className="pay__rem-btm">
                        <p>A - akkount uchun</p>
                        <p>B - buyurtma uchun</p>
                        <p>M - rassrochkani so'ndirish uchun</p>
                    </div>
                </div>
            </div>
            <AboutApp />
            <LogoSwiper />
            <Comforts />
        </>
    )
}

export default Payment