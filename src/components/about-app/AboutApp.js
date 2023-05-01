import React from 'react'
import './AboutApp.css'

function AboutApp() {
    return (
        <div className='about_app container'>
            <div className='about_app-body'>
                <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg" alt="" />
                <p>Sizning internet do'koningiz</p>
                <div className="about_app-bodyApps">
                    <img src="https://asaxiy.uz/custom-assets/images/app-store.svg" alt="" />
                    <img src="https://asaxiy.uz/custom-assets/images/google-play.svg" alt="" />
                    <img src="https://asaxiy.uz/custom-assets/images/app-gallery.svg" alt="" />
                </div>
            </div>
            <img className='about_app-img' src="https://asaxiy.uz/custom-assets/images/asaxiy-apps.png" alt="" />
        </div>
    )
}

export default AboutApp