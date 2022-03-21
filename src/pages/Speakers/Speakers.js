import React from 'react'
import './styles.css'
import Speaker from './Speaker';

export default function Speakers(){
    return (
        <div class="speaker__container">
            
            <h1>Past Speakers</h1>
            <div class="speakers__area">
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
            
        </div>
    )
}