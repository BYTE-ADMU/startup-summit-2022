import React from 'react'
import './styles.css'
// import Button from '../../components/Button';

// Landing Page Assets
import NowBoarding from '../../assets/Landing/landing__nowboarding.svg'
import MainLogo from '../../assets/Landing/landing__mainlogo.svg'
import LYP from '../../assets/Landing/landing__launchyourpurpose.svg'
import SYJ from '../../assets/Landing/landing__startyourjourney.svg'

export default function Landing(){
    return (
        <div class="landing_container">
            <div class="landing_content">
                <img id="landing__nowboarding" src={NowBoarding} />
                <img id="landing__mainlogo" src={MainLogo} />
                <div id="landing__header">
                <p>Launch Your Purpose</p>
                <p>April 6-9, 2022</p>
                    <div class="landing__buttons">
                        {/* <Button style="landing" label="Register" link="register" /> */}
                        {/* <Button style="landing" label="View Schedule" link="register" /> */}
                    </div>
                </div>
                <div class="landing__stickers" >
                <img id="landing__launchyourpurpose" src={LYP} />
                <img id="landing__startyourjourney" src={SYJ} />
                </div>
            </div>
        </div>
    )
}