import React from 'react'
import {Navbar} from '../../components/Navbar'
import './styles.css'

export default function Testimonials(){
    return (
        <div className='testimonials__testimonials-wrapper'>
            <div className='testimonials__testimonials-header'>
                <h1>TESTIMONIALS</h1>
                <p>OUR PARTICIPANT STORIES. Learn how participants jumpstarted their startup journeys through Startup Summit.</p>
            </div>
            <div className='testimonials__testimonials-content'>
                <div className='testimonials__testimonial-item'>
                    <img src=""></img>
                    <div className='testimonial-item__summary'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <div className='testimonial-item__body'>
                        <p>
                            loremipsumetcdlkdjadijdoidjdoi
                        </p>
                    </div>
                </div>
                <div className='testimonials__testimonial-item'>
                    <img src=""></img>
                    <div className='testimonial-item__summary'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <div className='testimonial-item__body'>
                        <p>
                            loremipsumetcdlkdjadijdoidjdoi
                        </p>
                    </div>
                </div>
                <div className='testimonials__testimonial-item'>
                    <img src=""></img>
                    <div className='testimonial-item__summary'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <div className='testimonial-item__body'>
                        <p>
                            loremipsumetcdlkdjadijdoidjdoi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}