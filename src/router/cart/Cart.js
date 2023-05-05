import React from 'react'
import './Cart.css'
import CartComponent from '../../components/cart/Cart'
import { useSelector } from 'react-redux'
import AboutApp from '../../components/about-app/AboutApp'
import LogoSwiper from '../../components/logo-swiper/LogoSwiper'
import Comforts from '../../components/comforts/Comforts'

function Cart() {
    const cart = useSelector(s => s.cart)
    return (
        <div className='cart'>
            <CartComponent cart={cart} />
            <AboutApp />
            <LogoSwiper />
            <Comforts />
        </div>
    )
}

export default Cart