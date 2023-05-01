import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiRss } from 'react-icons/fi'
import { BsTelephoneFill, BsFacebook, BsTelegram, BsInstagram, BsYoutube, } from 'react-icons/bs'
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi'
import './Footer.css'

function Footer() {
    const { pathname } = useLocation()
    if (pathname.includes('admin')) {
        return <></>
    }
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__top">
                    <ul>
                        <li><h4>Ma'lumotlar</h4></li>
                        <li>Ko'p so'raladigan savollar</li>
                        <li>Olib ketish punktlari</li>
                        <li>Yangiliklar</li>
                        <li>Ommaviy oferta (Foydalanuvchi bitimi)</li>
                        <li>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</li>
                        <li>Biz haqimizda</li>
                    </ul>
                    <ul>
                        <li><h4>Biz bilan aloqa</h4></li>
                        <li><BsTelephoneFill /> +998 71 200 01 05</li>
                        <li><HiOutlineMail /> info@asaxiy.uz</li>
                        <li><HiLocationMarker /> Islom Karimov 49, Toshkent</li>

                        <li><h4>Kitob do'konlarimiz</h4></li>
                        <li><HiLocationMarker /> Asaxiy Novza</li>
                        <li><HiLocationMarker /> Asaxiy Farhod bozori</li>
                        <li><HiLocationMarker /> Asaxiy Panorama, Kitob olami</li>
                    </ul>
                    <ul>
                        <li><h4>Erishgan yutuqlarimiz</h4></li>
                        <li>"Tahsin" mukofoti</li>
                        <li>"Shuhrat" medali</li>
                        <li>"Kelajak bunyodkori" medali</li>
                        <li><h4>Biz ijtimoiy tarmoqlarda</h4></li>
                        <li className='footer__icons'>
                            <BsFacebook />
                            <BsTelegram />
                            <BsInstagram />
                            <BsYoutube />
                            <FiRss />
                        </li>
                    </ul>
                    <ul>
                        <li><h4>To'lov turlari</h4></li>
                        <li className='footer__pay-types'>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="" />
                            </div>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
                            </div>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
                            </div>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
                            </div>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
                            </div>
                            <div className="footer__pay-typesItem">
                                <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer__btm">
                    <span className='footer__btmText'>2015-2023 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer