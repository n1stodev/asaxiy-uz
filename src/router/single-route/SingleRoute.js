import React from 'react'
import './SingleRoute.css'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { addToCart, removeFromHeart, addToHeart } from '../../context/action/action'
import AboutApp from '../../components/about-app/AboutApp'
import LogoSwiper from '../../components/logo-swiper/LogoSwiper'
import Comforts from '../../components/comforts/Comforts'

function SingleRoute() {
    const dispatch = useDispatch()
    const data = useLocation().state
    const heart = useSelector(s => s.heart)
    const holat = true
    return (
        <>
            <div className='single_route container'>
                <div className="single-route__images">
                    <div className="sr__imagesLeft">
                        {
                            data?.images?.map((e, inx) => (
                                <div className="sr__imagesLeftItem active" key={inx}>
                                    <img src={e} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="sr__imagesRight">
                        <img src={data?.images[0]} alt="" />
                        <div className="sr__contentTop">
                            {
                                heart?.some(i => i.id === data.id) ?
                                    <button onClick={() => dispatch(removeFromHeart(data))}>
                                        <AiFillHeart />
                                    </button>
                                    :
                                    <button onClick={() => dispatch(addToHeart(data))}>
                                        <AiOutlineHeart />
                                    </button>
                            }
                            <div />
                        </div>
                    </div>
                </div>
                <div className="single-route__content">
                    <h2>{data?.title}</h2>
                    <h1>{(data?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm</h1>
                    <div className="sr__content-comment">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>0 ta sharx</span>
                    </div>
                    <p>Brend: {data?.title}</p>
                    <p className={`sr__content-holat ${holat ? 'active' : ''}`}>Holati: <span>- Sotuvda bor</span></p>
                    <div className="sr__content-share">
                        <p>Uzatish: </p>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaTelegramPlane />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaWhatsapp />
                        </li>
                    </div>
                    <div className="sr__content-btns">
                        <button className='sr__content-btn'>
                            <img src="https://asaxiy.uz/custom-assets/images/cart-white.svg" alt="" />
                            <span>Savatchaga qo'shish</span>
                        </button>
                        <button className='sr__content-btn'>
                            <span>Bir klikda olish</span>
                        </button>
                    </div>
                </div>
            </div>
            <AboutApp />
            <LogoSwiper />
            <Comforts />
        </>
    )
}

export default SingleRoute