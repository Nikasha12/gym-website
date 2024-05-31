import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place to workout</h1>
                <p className='search-text'> Club 1 Studios is your hub for all things health and fitness. Train hard, eat lots, feel good and look great!. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter Keyword..' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Gym Membership</label>
                        <input type='radio'  />
                        <label>Personal Training</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
