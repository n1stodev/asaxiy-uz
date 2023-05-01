import React from 'react'
import './Comforts.css'

function Comforts() {
    return (
        <div className='comforts'>
            <div className="container">


                <div className='comforts__items'>

                    <div className="comforts__item">
                        <img src='https://asaxiy.uz/custom-assets/images/icons/market.svg' alt='comforts__itemImg' className="comforts__item-img" />
                        <div className="comforts__item-body">
                            <h3>Endi bozorga borishga hojat yo'q</h3>
                            <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                        </div>
                    </div>

                    <div className="comforts__item">
                        <img src='https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg' alt='comforts__itemImg' className="comforts__item-img" />
                        <div className="comforts__item-body">
                            <h3>Tez yetkazib berish</h3>
                            <p>Bizning xizmatimiz sizni ajablantiradi</p>
                        </div>
                    </div>

                </div>


                <div className='comforts__items'>

                    <div className="comforts__item">
                        <img src='https://asaxiy.uz/custom-assets/images/icons/return.svg' alt='comforts__itemImg' className="comforts__item-img" />
                        <div className="comforts__item-body">
                            <h3>Siz uchun qulayliklar</h3>
                            <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                        </div>
                    </div>

                    <div className="comforts__item">
                        <img src='https://asaxiy.uz/custom-assets/images/icons/card.svg' alt='comforts__itemImg' className="comforts__item-img" />
                        <div className="comforts__item-body">
                            <h3>Bo'lib to'lash</h3>
                            <p>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Comforts