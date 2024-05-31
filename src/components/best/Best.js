import React from 'react'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Fitness Studio in Toronto</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Gym Floor</p>
                <p>Washrooms</p>
                <p>Studio</p>
            </div>
            <div className='container'>
                <img src={"https://club1studios.com/wp-content/uploads/2020/07/gallery17-1024x683.jpg"} alt='' />
                <img src={"https://club1studios.com/wp-content/uploads/2020/07/gallery20-1024x683.jpg"} alt='' />
                <img src={"https://club1studios.com/wp-content/uploads/2020/07/gallery18-1024x683.jpg"} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
