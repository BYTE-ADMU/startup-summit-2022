import React from 'react';
import './styles.css';

// Testimonials Image Assets
import TestimonialPicture from '../../components/Testimonials/TestimonialPicture';
import Star from './assets/star.png'
import samantha from './assets/samantha.png'
import tres from './assets/tres.png'
import kirsten from './assets/kirsten.png'
import justine from './assets/justine.png'
import javi from './assets/javi.png'
import julianne from './assets/julianne.png'

export default function Testimonials(){
    return (
        <div className='testimonials__container'>
            <div className='testimonials__header'>
                <h1>STORIES FROM THE SUMMMIT</h1>
            </div>
            <div className='testimonials'>
                <div className='testimonials__testimonial'>
                    <img src={samantha} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Samantha See</h1>
                        <h2>Startup Summit 2022 Programs Dept. Head</h2>
                    </div>
                    <p className='testimonial-body'>
                    "Through Startup Summit 2021, I was able to reimagine the possibilities with tech! It was life-changing in the sense I am now venturing into the startup space myself!"
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                <img src={justine} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Justine Ngo</h1>
                        <h2>Startup Summit 2022 Project Head</h2>
                    </div>
                    <p className='testimonial-body'>
                    "Startup Summit 2021 was the event that affirmed my interest in building my career with advocacy-driven tech startups."
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                <img src={javi} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Javi Ko</h1>
                        <h2>Startup Summit 2021 Project Head</h2>
                    </div>
                    <p className='testimonial-body'>
                    "Project heading for Startup Summit 2021 was just the right balance of challenge and doability I needed to be able to do the things I’m working on today."
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                <img src={kirsten} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Kirsten Sayson</h1>
                        <h2>Startup Summit 2022 Content Team Member</h2>
                    </div>
                    <p className='testimonial-body'>
                    "Startup Summit 2021 opened my eyes to the world of tech, something I didn't know I needed, but subsequently did. The speakers provided amazing ideas and insights, which left me inspired and learning so much.”
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                <img src={julianne} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Julianne Ysrael</h1>
                        <h2>Startup Summit 2021 Externals Team Member</h2>
                    </div>
                    <p className='testimonial-body'>
                    "As part of the externals team of Startup Summit 2021, I was really inspired to fulfill my role because I was able to learn from both local and international speakers who I contacted for the event! The stories they shared and their passion for the tech space inspired me to forge a path of my own in the industry."
                    </p>
                </div>
                <div className='testimonials__testimonial'>
                <img src={tres} id="testimonials-picture" />
                    <div className='testimonial-details'>
                        <h1>Tres Nocos</h1>
                        <h2>Startup Summit 2021 Participant</h2>
                    </div>
                    <p className='testimonial-body'>
                    “I was easily attracted to the speaker line-up since they invited speakers from companies, like Notion. Even though I am not much of a tech enthusiast, I still learned a lot from the conference and will continue to support events that aim to bridge the digital divide.”
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