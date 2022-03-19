import React, { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './styles.css';

// Navbar Icons
import SUSLogo from '../../assets/sus-nav-logo.svg';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='nav'>  
            <Link to='/' className='nav__sus-logo'>
                 <img src={SUSLogo} alt="Startup Summit 2022"></img>
            </Link>
            
            <div className="nav__burger" onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
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
                    <Button style="navbar" label="Register" link="register" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;