import React from 'react'
import './styles.css'
import Button from '../../components/Button';

// Startups Image Assets
import unawa from './assets/unawa.png'
import splore from './assets/splore.png'
import mayani from './assets/mayani.png'
import eskwelabs from './assets/eskwelabs.png'
import datacamp from './assets/datacamp.png'

export default function Startups(){
    return (
        <div className="startups__container" id="startups">
            <div className='startups_details'>
                <h1 className='startups__title startups'>STARTUPS</h1>
                <p>Check out the startups that joined us in this year's Startup Summit!</p>
            </div>
            <div className="startups__wrapper">
                <div className="startups__image-wrapper">
                    <img src={splore} alt="Splore Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="Startups__content-heading">
                        <h1>SPLORE</h1>
                        <div>
                            <p>Field of Expertise</p>
                            <Button variant='navbar schedule-btn' label="Health Tech" />
                        </div>
                    </div>
                    <h2>About Us</h2>
                    <p>Splore is a wellness marketplace that envisions a world where fitness and health are both accessible and attainable, especially in our developing country that perceives such a lifestyle as a luxury.</p>

                </div>
            </div>
        </div>
    )
}