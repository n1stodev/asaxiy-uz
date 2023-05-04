import React from 'react'
import './Sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
    return (
        <div className='sidebar'>
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <button className='sidebar__btn' onClick={() => navigate('/')}>Go Home</button>
                </li>
                <li>
                    <NavLink className={'sidebar__link'} to={'/admin/create-product'}>Create Product</NavLink>
                </li>
                <li>
                    <NavLink className={'sidebar__link'} to={'/admin/manage-product'}>Manage Product</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar