import React from 'react';
import './styles.css';

// Testimonials Image Assets
import TestimonialPicture from '../../components/Testimonials/TestimonialPicture';
import Star from './assets/star.png'

export default function Testimonials(){
    return (
        <div className='testimonials__container'>
            <div className='testimonials__header'>
                <h1>TESTIMONIALS</h1>
                <p>OUR PARTICIPANT STORIES. <br/>
                    Learn how participants jumpstarted their startup journeys through Startup Summit.
                </p>
            </div>
            <div className='testimonials'>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                    <TestimonialPicture />
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <p className='testimonial-body'>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                    </p>
                </div>
            </div>
            <div className="bg__container">
                <img src={Star} id="bg-star1" />
                <img src={Star} id="bg-star2" />
            </div>
        </div>
    )
}