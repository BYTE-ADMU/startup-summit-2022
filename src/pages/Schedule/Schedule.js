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
                <div className="schedule__title boarding__pass">CLAIM YOUR BOARDING PASS NOW!</div>
                <div className='boarding_pass_details'>
                    <div className='boarding_pass_spiel'>Join us as we blast off into the future with students, storytellers, and startup founders 
                    as we become catalysts for change!</div>
                    <div className='claim'><Button variant='navbar schedule-btn' label='CLAIM YOURS HERE!'></Button> </div>
                </div>
            </div>
            <img src={MainTicket} id="schedule-main-ticket" alt="Ticket" />
            {/* <div className='Ticket'>
                <Ticket reversed> 
                    <div className="ticket__container">
                        <div className="left-ticket">
                            <div className="ticket-head">
                                <h1 className="ticket-title">STARTUP SUMMIT 2022</h1>
                                <h2 className="ticket-subtitle">BOARDING PASS</h2>
                            </div>

                            <div className="ticket-body">
                                <h1 className="ticket-info">4 DAYS, 10 SPEAKERS, NETWORKING,</h1>
                                <h1 className="ticket-info">INTERNSHIP OPPORTUNITIES, AND MORE!</h1>
                            </div>

                            <div className="ticket-bottom">
                                <h4 className="ticket-mini-text">SUS 2022 - ADMIT ONE  |  ID: SUS #2022</h4>
                                <img src={LeftTicketBars} id="ticket-bars"/>
                            </div>
                        </div>
                    </div>
                </Ticket>
            </div> */}
            <div className='schedule_details'>
                <div className='schedule__title schedule'>SCHEDULE</div>
                    <div className='schedule_info_container'>
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
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
                                    <div>Networking Day</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
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