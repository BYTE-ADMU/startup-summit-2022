import React from 'react'
import './styles.css'
import Button from '../../components/Button';

//Ticket Component
import Ticket from '../../components/Ticket'

//Schedule Image Assets
import LeftTicketBars from './assets/ticket-left-design.svg'
import plane_right from './assets/plane_right.png'
import plane from './assets/plane.png'
import tail from './assets/plane_tail.png'
import boxlines from './assets/boxlines.png'
import arrow from './assets/arrow.svg'
import wavy_lines from './assets/wavy_lines.png'
import wavy_lines2 from './assets/wavy_lines2.png'
import boxes from './assets/boxes.png'
import MainTicket from './assets/ticket.svg'

export default function  Schedule(){
    return (
        <div className="schedule__container">
            <div className='boarding_pass_container'>
                <div className="boarding_pass">CLAIM YOUR BOARDING PASS NOW!</div>

                <div className='boarding_pass_details'>
                    <div className='boarding_pass_spiel'>Join us as we blast off into the future with students, storytellers, and startup founders 
                    as we become catalysts for change!</div>

                    <div className='claim'><Button style='navbar schedule-btn' label='CLAIM YOURS HERE!'></Button> </div>

                </div>
            </div>

            <div className='boxes'><img src={boxes}></img></div>

        { /* <div className='plane'>
                <img src={plane} ></img>
                <img src={tail} className='plane_tail'></img>
             </div> */}

            <div className='plane'><img src={plane_right}></img></div>
            <img src={MainTicket} id="schedule-main-ticket" />
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
                <div className='schedule'>SCHEDULE</div>

                    <div className='schedule_info_container'>
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
                                <img src={arrow} />
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
                                <img src={arrow} />
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
                                <img src={arrow} />
                            <div className='schedule_info'>
                                <div className='date'>Day 1 - April 6, 2022</div>
                                <div className='date_info'>
                                    <div>Ideating a Startup</div>
                                    <div>3:00 - 5:15 PM</div>
                                </div>
                            </div>
                    </div>
            </div>

            <div className='boxlines'><img src={boxlines}></img></div>
            
            <div className='wavy_lines'><img src={wavy_lines}></img></div>


            <div className='bottom_card'>

                <div className='speakers_soon'>SPEAKERS COMING SOON</div>
                <div className='wavy_lines2'><img src={wavy_lines2}></img></div>

                <div className='botcard'>
                    <div className='startup_card'>STARTUP SUMMIT 2022 ITINERARY</div>
                    <div className='startup_card_white'></div>
                </div>
                
            
            </div>

        </div>
    )
}