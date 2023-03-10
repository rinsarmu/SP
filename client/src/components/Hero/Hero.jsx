import React from 'react'
import Header from '../Header/Header'
import'./Hero.css'
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-h">
            <Header/>
{/* The best */}
            <div className="the__best_fitness">
                <div className=""> </div>
                    <span>THe best fittnes club in the town</span>
            </div>

{/* Hero Heading */}

        <div className="hero__text">
            <div>
                <span className='stroke__text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>

            <div>
                <span>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
            </div>
        </div>

    {/* Figures */}

    <div className="figures">
        <div> 
            <span>+ 140</span>
            <span> Expert Coaches</span>
        </div>

        <div>
            <span> + 978</span>
            <span>members Joined</span>
        </div>

        <div>
            <span> +50</span>
            <span>Fitness Program</span>
        </div>
    </div>

    {/* Hero Buttons */}
        <div className="hero__buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>
    </div>

    <div className="right-h"> 
        <button className="btn">Join now</button>
        <div className="heart__rate">
            <img src={heart} alt="" />
            <span>Heart Rate </span>
            <span> 116 Bpm</span>
        </div>
    
    {/* Hero Images */}
        <img src = {heroImage} alt="" className='hero__image'/>
        <img src = {heroImageBack} alt="" className='hero__image_back' />
    
    {/*  Calories */}

    <div className="calories">
        <img src={calories} alt="" />
        <div className="">
            <span>Calories Bound</span>
            <span>220 kcal</span>
        </div>
    </div>
        </div>
    </div>

    
  )
}

export default Hero
