import React from 'react'
import './OrderStatus.css'

function OrderStatus() {
    return (
        <div className='order_status container'>
            <div className="order_status__body">
                <h2 className="order_status__title">Buyurtma holati</h2>
                <p className="order_status__rem">Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
                <form className='order_status__form pay__form'>
                    <div>
                        <label htmlFor="order__num">Buyurtma raqami *</label>
                        <input type='text' className="pay__from-inp order_status__form-inp" id='order__num' />
                    </div>
                    <div>
                        <label htmlFor="phone_num">Buyurtma berilgandagi telefon raqami *</label>
                        <input type='text' className="order_status__form-inp pay__from-inp" id='phone_num' />
                    </div>
                    <button className="order_status__form-btn pay__from-btn">Ko'rinish</button>
                </form>
            </div>
            <div className='order_status__img'>
                <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
            </div>
        </div>
    )
}

export default OrderStatus