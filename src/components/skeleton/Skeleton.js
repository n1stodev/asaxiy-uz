import React from 'react'
import './Skeleton.css'

function Skeleton() {
    return (
        <div className="skeleton container">
            {new Array(5).fill("").map((_, inx) => (
                <div key={inx} className="skeleton__card">
                    <div className="skeleton__img"></div>
                    <div className="skeleton__title"></div>
                    <div className="skeleton__price"></div>
                </div>
            ))}
        </div>
    )
}

export default Skeleton