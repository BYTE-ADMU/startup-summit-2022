import React from 'react'
import './styles.css'

// About Page Image Assets
import AboutByteImage from './assets/abt-byte-img.png'
import Dots from './assets/dots.png'
import Bars from './assets/bars.png'

export default function AboutByte(){
    return (
        <div className="aboutbyte__container">
            <h1 className="aboutbyte__header">
                ABOUT BYTE:
                <br></br>
                BUILDING YOUNG TECH ENTREPRENEURS
            </h1>
            <div className="aboutbyte__content">
                <img src={AboutByteImage} id="aboutbyte__image" />
                <div className="aboutbyte__text">
                    <p>BYTE, the home organization for B.S. Information Technology Entrepreneurship course, is an independent organization under LIONS.</p>
                    <p>We strive to help our members develop technological skills and entrepreneurial principles in an inclusive, fun and welcoming environment, and to promote tech entrepreneurship inside and outside of the Ateneo De Manila University.</p>
                    <p>BYTE envisions itself to be a technological and entrepreneurial network spearheaded by existing and potential catalysts for change.</p>
                </div>
            </div>
            <div className="aboutbyte__bg">
                <img src={Dots} id="aboutbyte-bg-dots" />
                <img src={Bars} id="aboutbyte-bg-bars" />
            </div>
        </div>
    )
}