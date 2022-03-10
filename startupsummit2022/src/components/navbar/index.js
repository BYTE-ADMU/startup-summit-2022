import React from 'react'
import './navbar.css'

// Navbar SUS Logo
import SUSLogo from '../../logos/sus-nav-logo.svg'

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

function mobileMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

burger.addEventListener('click', mobileMenu, false);

export default function Navbar(){
    return (
        <nav>  
            <ul class="menu">
                <li class="sus-nav-logo"><img src={SUSLogo}></img></li>
                <li class="item">Home</li>
                <li class="item">Schedule</li>
                <li class="item">Startups</li>
                <li class="item">About</li>
                <button class="item">REGISTER</button>
                <li class="burger"> 
                    <div class="top"></div>
                    <div class="middle"></div>
                    <div class="bottom"></div>
                </li>
            </ul>
        </nav>
    )
}