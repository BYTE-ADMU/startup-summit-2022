import React from 'react'
import './styles.css'

export default function AboutByte(){
    return (
        <div className="faq__container">
            <h1 className="faq-header">FREQUENTLY ASKED QUESTIONS</h1>
            <div className="question__container">
                <div className="bar-design"></div>
                <h3 className="faq-question"> question </h3>
                <p className="faq-answer">answer</p>
            </div>
        </div>
    )
}