import React, { useState } from 'react';
import Button from '../Button';
import './styles.css';

// Navbar Icons
import SUSLogo from '../../assets/nav__sus-logo.svg';
import Burger from '../../assets/nav__burger.svg';
import Exit from '../../assets/nav__exit.svg';

function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={`nav ${colorChange ? "scroll" : null}`}>  
            <a href="/#" className='nav__sus-logo'>
                 <img src={SUSLogo} alt="Startup Summit 2022"></img>
            </a>
            
            <div className="nav__burger" onClick={handleClick}>
                <img src={click ? Exit : Burger} alt="Burger Menu" />
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <li className="nav__item">
                    <a href="/#" className='nav__links' onClick={closeMobileMenu}>
                        Home
                    </a>
                </li>
                <li className="nav__item">
                <a href="#about" className='nav__links' onClick={closeMobileMenu}>
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#schedule" className='nav__links' onClick={closeMobileMenu}>
                        Schedule
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#faqs" className='nav__links' onClick={closeMobileMenu}>
                        FAQs
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://tinyurl.com/SUS2022RegForm/" target="_blank" rel="noreferrer">
                        <Button variant="navbar" label="Register" href="https://tinyurl.com/SUS2022RegForm/" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;