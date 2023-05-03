import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FiSearch, FiUser, FiMenu } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAVBAR_BOTTOM_DATA } from '../../static'
import '../search_bar/Search.css'
import { db } from '../../server'
import { collection, getDocs } from 'firebase/firestore'

function Navbar() {
    const [data, setData] = useState([])
    const productRef = collection(db, 'products')
    const [filter, setFilter] = useState([])
    const { pathname } = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            const getData = await getDocs(productRef)
            setData(getData.docs.map(i => ({ ...i.data(), id: i.id })))
        }
        fetchData()
    }, [])
    if (pathname.includes("admin")) {
        return <></>
    }
    const inpBlur = () => {
        setFilter([])
    }
    const handleFilter = e => {
        const search = e.target.value
        const filtered = data.filter(value => {
            return value.title.toLowerCase().includes(search.toLowerCase())
        })
        search === "" ? setFilter([]) : setFilter(filtered)
    }
    return (
        <div className='header'>
            <div className='navbar container'>
                <Link to={'/'} className="nav__logo">
                    <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
                </Link>
                <div className="nav__search">
                    <input type="text" placeholder='Qidirish' onChange={handleFilter} />
                    <button>
                        <FiSearch />
                        <span>Qidirish</span>
                    </button>
                    {filter.length != 0 && (
                        <div className="search_bar">{
                            filter?.map(e => (
                                <Link onClick={inpBlur} className="search_barItem" key={e.id} to={`/product/${e.id}`} state={e}>
                                    {(e.title).length > 40 ? `${(e.title).slice(0, 40)}...` : e.title}
                                </Link>
                            ))
                        }
                        </div>
                    )
                    }
                </div>
                <div className="nav__links">
                    <NavLink to={'/'} className="nav__link">
                        <AiOutlineHome />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={'/payment'} className="nav__link">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg" alt="" />
                        <span>To'lov</span>
                    </NavLink>
                    <NavLink to={'/order-status'} className="nav__link">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg" alt="" />
                        <span>Trek</span>
                    </NavLink>
                    <NavLink to={'/cart'} className="nav__link">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
                        <span>Savatcha</span>
                    </NavLink>
                    <NavLink to={'/wishlist'} className="nav__link">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg" alt="" />
                        <span>Sevimlilar</span>
                    </NavLink>
                    <NavLink to={'/login'} className="nav__link">
                        <img src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg" alt="" />
                        <span>Кабинет</span>
                    </NavLink>
                </div>
            </div>
            <hr />
            <div className="nav__bottom container">
                <button>
                    <FiMenu />
                    <span>Barcha bo'limlar</span>
                </button>
                {
                    NAVBAR_BOTTOM_DATA?.map((e, inx) => (
                        <span className='nav__btm-span' key={inx}>{e}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar