import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Wishlist.css'
import { removeFromHeart, addToCart } from '../../context/action/action'

function Wishlist() {
    const dispatch = useDispatch()
    let data = useSelector(s => s.heart)
    // data = data[0]
    return (
        <div className='container wishlist'>
            <h2 className='page__title'>Sevimlilar</h2>
            <div className="wishlist__items">
                {
                    data?.map(data => (
                        <div className="wishlist__item" key={data.id}>
                            <div className="wishlist__item-pro">
                                <img src={data.images[0]} alt="" />
                                <h2>{data.title}</h2>
                            </div>
                            <div className="wishlist__item-price">
                                <div><span>Price:</span></div>
                                <div className="pro__card-price">
                                    <del>{data.price * 1.2} so'm</del>
                                    <p>{data.price} so'm</p>
                                    <span className='pro__card-monthly'>{Math.round(data.price * 1.5 / 12)} so'm / 12 oy</span>
                                </div>
                            </div>
                            <div className="wishlist__item-btns">
                                <button onClick={() => dispatch(addToCart(data))} className="wishlist__item-btn">Savatchaga qo'shish</button>
                                <button onClick={() => dispatch(removeFromHeart(data))} className="wishlist__item-btn">O'chirish</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist