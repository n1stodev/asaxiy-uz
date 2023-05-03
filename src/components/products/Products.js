import React from 'react'
import './Products.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart, AiOutlineDelete, AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToHeart, addToCart, removeFromHeart } from '../../context/action/action'
import { db } from '../../server'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Skeleton from '../skeleton/Skeleton'


function Products({ data, admin, like, setRefresh }) {
    const dispatch = useDispatch()
    const heart = useSelector(s => s.heart)

    const handleDelete = async (id) => {
        if (window.confirm('are you sure')) {
            await deleteDoc(doc(db, 'products', id))
                .then()
                .catch()
                .finally(() => setRefresh(p => !p))
        }
    }
    return (
        <>
            {!data.length && <Skeleton />}
            <div className='products container'>
                {
                    data?.map(item => (
                        <div className="pro__card" key={item.id}>
                            <div className="pro__img">
                                <p className="pro__img-sale">
                                    Chegirma
                                </p>
                                <Link to={`/product/${item.id}`} state={item}>
                                    <img src={item.images[0]} alt={item.title} />
                                </Link>
                                <div className="pro__img-btns">
                                    {
                                        admin
                                            ?
                                            <AiOutlineDelete className='pro__img4' onClick={() => handleDelete(item.id)} />
                                            :
                                            <AiOutlineShoppingCart className='pro__img4' onClick={() => {
                                                toast.success("Muvaffaqiyatli qo'shildi")
                                                dispatch(addToCart(item))
                                            }} />
                                    }
                                    {
                                        like
                                            ?
                                            heart?.some(i => i.id === item.id) ?
                                                <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} />
                                                :
                                                <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                            <div className="pro__body">
                                <div className="pro__card-title">{item.title.length > 55 ? (item.title.slice(0, 55) + '...') : item.title}</div>
                                <div className="pro__card-stars">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <span>0 ta sharx</span>
                                </div>
                                <div className="pro__card-price">
                                    <del>{(item?.price * 1.2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm</del>
                                    <p>{(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm</p>
                                    <span className='pro__card-monthly'>{Math.round(item?.price * 1.5 / 12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm / 12 oy</span>
                                </div>
                                <div className="pro__card-btns">
                                    <button className="pro__card-btn">Rassrochka</button>
                                    <button className="pro__card-btn">Bir klikda olish</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default Products