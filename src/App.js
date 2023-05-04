import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './router/home/Home'
import Cart from './router/cart/Cart'
import Admin from './router/admin/Admin'
import Login from './router/login/Login'
import Wishlist from './router/wishlist/Wishlist'
import Payment from './router/payment/Payment'
import SingleRoute from './router/single-route/SingleRoute'
import OrderStatus from './router/order-status/OrderStatus'
import { useSelector } from 'react-redux'

function App() {
    const auth = useSelector(s => s.auth)
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/order-status' element={<OrderStatus />} />
                <Route path='/cart' element={<Cart />} />
                {
                    auth
                        ?
                        <Route path='/login' element={<Navigate replace to={'/admin'} />} />
                        :
                        <Route path='/admin/*' element={<Navigate replace to={'/login'} />} />
                }
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/product/:id' element={<SingleRoute />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin/*' element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App