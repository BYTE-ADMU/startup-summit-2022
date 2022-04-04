import React from 'react'
import './styles.css'
import Button from '../../components/Button';

// Ticket Component
// import Ticket from '../../components/Ticket'

// Schedule Image Assets
import plane from './assets/top-right-plane.png'
import boxlines from './assets/boxlines.png'
import arrow from './assets/arrow.svg'
import MainTicket from './assets/ticket.svg'
import SpeakersComingSoon from './assets/speakers-coming-soon.svg'

export default function Schedule(){
    return (
        <div className="schedule__container" id="schedule">
            <div className='boarding_pass_container'>
                <div className="schedule__title boarding__pass">TAKE OFF INTO YOUR FUTURE!</div>
                <div className='boarding_pass_details'>
                    <div className='boarding_pass_spiel'>Join us as we embark on an exciting journey with students, storytellers, and startup founders as we become catalysts for change!</div>
                    <a href="https://tinyurl.com/SUS2022RegForm/" className="claim" target="_blank" rel="noreferrer">
                        <Button variant='navbar schedule-btn' label="REGISTER NOW!" href="https://tinyurl.com/SUS2022RegForm/" />
                    </a>
                </div>
            </div>
            <img src={MainTicket} id="schedule-main-ticket" alt="Ticket" />
            <div className='schedule_details'>
                <div className='schedule__title schedule'>SCHEDULE</div>
                    <div className='schedule_info_container'>
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>2:50 - 5:15 PM</div>
                                </div>
                            </div>
                                <img src={arrow} id="schedule__arrow-icon" alt="Arrow" />
                            <div className='schedule_info'>
                                <div className='date'>Day 2 - April 7, 2022</div>
                                <div className='date_info'>
                                    <div>Building a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
                                <img src={arrow} id="schedule__arrow-icon" alt="Arrow" />
                            <div className='schedule_info'>
                                <div className='date'>Day 3 - April 8, 2022</div>
                                <div className='date_info'>
                                    <div>Growing a Startup</div>
                                    <div>3:00 - 6:00 PM</div>
                                </div>
                            </div>
                                <img src={arrow} id="schedule__arrow-icon" alt="Arrow" />
                            <div className='schedule_info'>
                                <div className='date'>Day 4 - April 9, 2022</div>
                                <div className='date_info'>
                                    <div>*Networking Night</div>
                                    <div>5:30 - 7:00 PM</div>
                                </div>
                            </div>
                    </div>
                <div className="schedule__networking-container">
                    <div className='mini-detail'>*Networking Night will be held via Zoom</div>
                    <a href="https://tinyurl.com/SUS22NetworkingNight" className="claim" target="_blank" rel="noreferrer">
                        <Button variant='navbar schedule-btn' label="REGISTER HERE!" href="https://tinyurl.com/SUS2022RegForm/" />
                    </a>
                </div>
            </div>
            <div className='bottom_card'>
                <div className='schedule__title speakers_soon'>SPEAKERS COMING SOON</div>
                <img src={SpeakersComingSoon} id="speakers-coming-soon" alt="Speakers" />
            </div>

            <div className="schedule__bg"> 
                <img src={plane} id="top-right-plane" alt="Plane" />
                <img src={boxlines} id="box-lines" alt="Box Lines" />
            </div>
        </div>
    )
}