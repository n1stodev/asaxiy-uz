import React from 'react'
import './Cart.css'
import CartComponent from '../../components/cart/Cart'
import { useSelector } from 'react-redux'

function Cart() {
    const cart = useSelector(s => s.cart)
    return (
        <div className='cart container'>
            <CartComponent cart={cart} />
        </div>
    )
}

export default Cart