import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LogoSwiper from './components/logo-swiper/LogoSwiper'
import Comforts from './components/comforts/Comforts'
import AboutApp from './components/about-app/AboutApp'
import Navbar from './components/navbar/Navbar'
import Home from './router/home/Home'
import Cart from './router/cart/Cart'
import Admin from './router/admin/Admin'
import Login from './router/login/Login'
import Wishlist from './router/wishlist/Wishlist'
import Payment from './router/payment/Payment'
import SingleRoute from './router/single-route/SingleRoute'
import OrderStatus from './router/order-status/OrderStatus'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order-status' element={<OrderStatus />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/product/:id' element={<SingleRoute />} />
                <Route path='/admin/*' element={<Admin />} />
            </Routes>
            <LogoSwiper />
            <AboutApp />
            <Comforts />
            <Footer />
        </div>
    )
}

export default App