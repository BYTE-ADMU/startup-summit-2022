import React, { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './styles.css';

// Navbar Icons
import SUSLogo from '../../assets/nav__sus-logo.svg';
import Burger from '../../assets/nav__burger.svg';
import Exit from '../../assets/nav__exit.svg';

//Website Sections
import Landing from '../../pages/Landing/Landing';
import About from '../../pages/About/About';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='nav'>  
            <Link to={location => ({ ...location, pathname: "../../pages/Landing/Landing" })}
                    className='nav__sus-logo'>
                 <img src={SUSLogo} alt="Startup Summit 2022"></img>
            </Link>
            
            <div className="nav__burger" onClick={handleClick}>
                <img src={Burger} />
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <li className="nav__item">
                    <Link to={location => ({ ...location, pathname: "../../pages/About/About" })}
                        className='nav__links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                <Link to="/about"
                    className='nav__links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/schedule' className='nav__links' onClick={closeMobileMenu}>
                        Schedule
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/faqs' className='nav__links' onClick={closeMobileMenu}>
                    FAQs
                    </Link>
                </li>
                <li className="nav__item">
                    <Button style="navbar" label="Register" href="https://tinyurl.com/SUS2022RegForm/" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;