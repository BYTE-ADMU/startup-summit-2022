import React from 'react'
import './styles.css'
import Button from '../../components/Button';

// Landing Page Image Assets
import NowBoarding from './assets/landing__nowboarding.svg'
import MainLogo from './assets/landing__mainlogo.svg'
import Circles from './assets/landing__bg-circles.svg'
import YellowPlane from './assets/landing__bg-yellow-plane.png'
import LeftPlane from './assets/landing__bg-left-plane.png'
import RightPlane from './assets/landing__bg-right-plane.png'


export default function Landing(){
    return (
        <div className="landing__container">
            <div className="landing__content">
                <img id="landing__nowboarding" src={NowBoarding} alt="Now Boarding!" />
                <img id="landing__mainlogo" src={MainLogo} alt="Logo" />
                <div id="landing__header">
                    <p>Launch Your Purpose</p>
                    <p>April 6 - 9, 2022</p>
                        <div class="landing__buttons">
                            <Button variant="primary landing-button" label="Register" />
                            <Button variant="secondary landing-button" label="View Schedule" />
                        </div>
                </div>
            </div>
            <div className="landing__bg">
                <img id="landing__leftplane" src={LeftPlane} alt="Plane" />
                <img id="landing__rightplane" src={RightPlane} alt="Plane" />
                <img id="landing__circle1" src={Circles} alt="Circle" />
                <img id="landing__circle2" src={Circles} alt="Circle" />
                {/* the bars are located in app.js so that it continues onto the about section */}
                <img id="landing__yellowplane" src={YellowPlane} alt="Plane" />
            </div>
        </div>
    )
}