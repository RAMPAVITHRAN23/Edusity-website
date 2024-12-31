import React from 'react'
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero__text'>
                <h1>We Ensure a better education for a better world</h1>
                <p>You can put a call to action here or a brief description of your website.</p>
                <button className='btn'>
                    Explore More <img src={dark_arrow} alt="arrow" />
                </button>
            </div>

        </div>
    )
}

export default Hero