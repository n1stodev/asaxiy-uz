import React, { useRef } from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart, decFromCart, delAllCart, removeFromCart } from '../../context/action/action'

const TOKEN = `6036131094:AAHMSgA9MYrF8RzmMY0WAcBX8hDKAEmu9Og`
const CHAT_ID = `5782739679`

function Cart({ cart }) {
    const dispatch = useDispatch()
    const name = useRef()
    const tel = useRef()
    const address = useRef()

    const handleSend = (e) => {
        e.preventDefault()
        let text = 'Buyurtma %0A%0A'
        text += `Ism: ${name.current.value} %0A`
        text += `Tel: ${tel.current.value} %0A`
        text += `Manzil: ${address.current.value}%0A%0A`

        cart.forEach(i => {
            text += `Nomi: ${i.title} %0A`
            text += `Soni: ${i.soni} %0A`
            text += `Narxi: ${i.price} %0A%0A`
        })

        text += `<b>Jami summa: ${cart?.reduce((a, b) => a + (b.soni * b.price), 0)} so'm </b>`

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        setTimeout(() => {
            name.current.value = ''
            tel.current.value = ''
            address.current.value = ''
            dispatch(delAllCart())
        })
    }
    return (
        <div className='container cart'>
            <h2 className="page__title">Savatcha</h2>
            <div className="cart__body">
                <div className="cart__box">
                    {
                        cart?.map(e => (
                            <div key={e.id} className="cart__item">
                                <div className="cart__item-pro">
                                    <img src={e.images[0]} alt="" />
                                    <h2>{e.title}</h2>
                                </div>
                                <div className="cart__item-price">
                                    <div className='cart__item-num'>
                                        <button onClick={() => e.soni <= 1 ? dispatch(removeFromCart(e)) : dispatch(decFromCart(e))}>-</button>
                                        <span>{e.soni}</span>
                                        <button onClick={() => dispatch(addToCart(e))}>+</button>
                                    </div>
                                    <div className='cart__item-prices'>
                                        <del>{e.price * e.soni * 1.2} so'm</del>
                                        <p>{e.price * e.soni} so'm</p>
                                        <button onClick={() => dispatch(removeFromCart(e))} className="cart__item-btn"><BsTrash3 /> O'chirish</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart__form">
                    <p className='cart__pro-data'>
                        <span>Mahsulotlar soni:</span>
                        <span>{cart.reduce((a, b) => a + b.soni, 0)} ta</span>
                    </p>
                    <p className='cart__pro-data'>
                        <span>Jami summa:</span>
                        <span>{cart?.reduce((a, b) => a + (b.soni * b.price), 0)} so'm</span>
                    </p>
                    <form className='cart_form' onSubmit={handleSend} name='form'>
                        <input required ref={name} type="text" placeholder='Ismingiz' />
                        <input required ref={tel} type="number" placeholder='Nomeringiz' />
                        <input required ref={address} type="text" placeholder='Manzilingiz' />
                        <button type='submit' className='cart__form-btn'>BUYURTMA</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart