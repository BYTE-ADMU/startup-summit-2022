import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './styles.css';

// Navbar SUS Logo
import SUSLogo from '../../logos/sus-nav-logo.svg';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='nav'>  
            <Link to='/' className='nav__sus-logo'>
                 <img src={SUSLogo}></img>
            </Link>
            
            <div className="nav__burger" onClick={handleClick}>
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <li className="nav__item">
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Schedule
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Startups
                    </Link>
                </li>
                <li className="nav__item">
                    <Button />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;