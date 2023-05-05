import React from 'react'
import './Empty.css'

function Empty({ text }) {
    return (
        <div className='empty'>
            <img src="https://media0.giphy.com/media/kcy5dKcg6vBnWk2LfT/giphy.gif?cid=6c09b952bww1mtrzbdz536acxvwv9sgg0mknpwbh42fuwf3c&rid=giphy.gif&ct=s" alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Empty