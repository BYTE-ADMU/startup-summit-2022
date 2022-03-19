import React from 'react'
import './styles.css'
import Planet from './Planet';

export default function Startups(){
    return (
        <div className="startups__container">
            <div className='startups__content'>
                <div className='startup__planet__row'>
                    <Planet />
                    <Planet />
                    <Planet />
                </div>
                <div className='startup__planet__row'>
                    <Planet />
                    <Planet />
                    <Planet />
                </div>
                <div className='startup__planet__row startup__pagename'>
                    <h1>Startups</h1>
                </div>
                <div className='startup__planet__row'>
                    <Planet />
                    <Planet />
                    <Planet />
                </div>
                <div className='startup__planet__row'>
                    <Planet />
                    <Planet />
                    <Planet />
                </div>
            </div>
        </div>
        
    )
}