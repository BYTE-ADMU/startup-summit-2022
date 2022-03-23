import React from 'react';
import './styles.css';

// Testimonial Picture Icons
import PFPDesign from './assets/testimonials__plane.svg'
import Samplepfp from './assets/spesh.png'

function TestimonialPicture(){
    return (
        <div className="testimonials__pfp-container">
            <img src={PFPDesign} id="testimonials__pfp-design"/>
            <div className="testimonials__background">
               <img src={Samplepfp} id="testimonials__pfp"/> 
            </div>
        </div>
    )
}

export default TestimonialPicture;