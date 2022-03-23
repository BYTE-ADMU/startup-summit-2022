import React from 'react';
import './styles.css';

import TestimonialPicture from '../../components/Testimonials/TestimonialPicture';

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
                    <div className='testimonial-body'>
                        <p>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                        </p>
                    </div>
                </div>
                <div className='testimonials__testimonial'>
                    <img src=""></img>
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <div className='testimonial-body'>
                        <p>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                        </p>
                    </div>
                </div>
                <div className='testimonials__testimonial'>
                    <img src=""></img>
                    <div className='testimonial-details'>
                        <h1>Name</h1>
                        <h2>Startup Summit (Year)</h2>
                    </div>
                    <div className='testimonial-body'>
                        <p>
                        Use Objectivity Light for body text.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Neque id lorem ultrices  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}