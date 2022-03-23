import React from 'react'
import './styles.css'
import Button from '../../components/Button';

// Landing Page Image Assets
import NowBoarding from './assets/landing__nowboarding.svg'
import MainLogo from './assets/landing__mainlogo.svg'
import TopLeft from './assets/landing__top-left.svg'
import TopRight from './assets/landing__top-right.svg'

export default function Landing(){
    return (
        <div class="landing__container">
            <div class="landing__content">
                <img id="landing__nowboarding" src={NowBoarding} />
                <img id="landing__mainlogo" src={MainLogo} />
                <div id="landing__header">
                    <p>Launch Your Purpose</p>
                    <p>April 6 - 9, 2022</p>
                        <div class="landing__buttons">
                            <Button style="primary landing-button" label="Register" />
                            <Button style="secondary landing-button" label="View Schedule" />
                        </div>
                </div>
            </div>
            <div className="landing__top-left">
                <img id="landing__top-left" src={TopLeft} />
            </div>
        </div>
    )
}