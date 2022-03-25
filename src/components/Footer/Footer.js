import React from 'react';
import './styles.css';

import Button from '../../components/Button';

//Image Assets
import Check from './assets/check.svg';
import FooterLogo from './assets/suslogo.png';
import Facebook from './assets/facebook.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import Linkedin from './assets/linkedin.png';
import Email from './assets/email.png';
import Website from './assets/website.png';

export default function Footer(){
    return (
        <div className='footer__container'>
            <div className="header-content">
                <div className="SUS-info">
                    <div className="SUS-info-item">
                        <img src={Check} id='footer-check-icon' />
                        <p>4-Day Event</p>
                    </div>
                    <div className="SUS-info-item">
                        <img src={Check} id='footer-check-icon' />
                        <p>Networking</p>
                    </div>
                    <div className="SUS-info-item">
                        <img src={Check} id='footer-check-icon' />
                        <p>Free Admission</p>
                    </div>
                    <div className="SUS-info-item">
                        <img src={Check} id='footer-check-icon' />
                        <p>Internship Opportunities</p>
                    </div>
                    <div className="SUS-info-item">
                        <img src={Check} id='footer-check-icon' />
                        <p>Talks and Panels</p>
                    </div>
                </div>
                <Button variant='navbar' id="footer__sticker" label='LAUNCH YOUR PURPOSE!'></Button>
            </div>
            <div className="footer__main-content">
                <div className="footer__sus-branding">
                    <div>
                        <img src={FooterLogo} />
                        <div>
                            <p className="organization">© 2022 Startup Summit 2022</p>
                            <p className="organization">Organized by Building Young Tech Entrepreneurs, BYTE</p>
                        </div>
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__website-links"> 
                        <li id="footer__link"><a href="#">Home</a></li>
                        <li id="footer__link"><a href="#about">About SUS 2022</a></li>
                        <li id="footer__link"><a href="#schedule">Event Schedule</a></li>
                        <li id="footer__link"><a href="#testimonials">Testimonials</a></li>
                        <li id="footer__link"><a href="#aboutbyte">About BYTE</a></li>
                        <li id="footer__link"><a href="#faqs">FAQs</a></li>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/StartupSummit2022" target="_blank"><img src={Facebook} id="social-media-icon" /></a>
                        <a href="https://www.instagram.com/byteadmu/" target="_blank"><img src={Instagram} id="social-media-icon"/></a>
                        <a href="https://twitter.com/byteadmu" target="_blank"><img src={Twitter} id="social-media-icon" /></a>
                        <a href="https://www.linkedin.com/company/byteadmu/mycompany/" target="_blank"><img src={Linkedin} id="social-media-icon" /></a>
                        <a href="byteadmu@gmail.com" target="_blank"><img src={Email} id="social-media-icon" /></a>
                        <a href="https://byteadmu.com/" target="_blank"><img src={Website} id="social-media-icon" /></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}