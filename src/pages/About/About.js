import React from 'react'
import './styles.css'

// About Page Image Assets
import AboutSusImage from './assets/about-sus-img.png'
import Spirals from '../../assets/bg-spirals.png'
import Plane from './assets/about-plane.png'


export default function About(){
    return (
        <div className="about__container" id="about">
            <h1 className="about__header">WHAT IS STARTUP SUMMIT 2022?</h1>
            <div className="about__content">
                <img src={AboutSusImage} id="about__image" alt="About SUS" />
                <div className="about__text">
                    <p>
                    Startup Summit is BYTE's flagship tech startup conference featuring thought-provoking keynote sessions, personal interactions with global thought leaders, internships and networking opportunities through platforms such as Hopin, Zoom and Discord. Over the course of 3 days, we will go over the steps of constructing a startup from the ground up that every entrepreneur takes in their journey as a founder.
                    </p>
                    <p>Join us as we discover more about the ideation, technicalities, and adversities of a startup by learning from a high-caliber roster of speakers!</p>
                </div>
            </div>
            <div className="about__bg">
                <img src={Spirals} id="about__spirals1" alt="Spirals" />
                <img src={Spirals} id="about__spirals2" alt="Spirals" />
                <img src={Plane} id="about__plane1" alt="Planes" />
                <img src={Plane} id="about__plane2" alt="Planes" />
            </div>
        </div>
    )
}