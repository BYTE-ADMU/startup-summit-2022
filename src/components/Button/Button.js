import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// Button Properties:
// 1. style - how will the button look like?
// 2. label - what will the button say? (button text)
// 3. link - where does the button lead to?

// use "= ({ properties })" to pass different properties along components (See Navbar.js for a sample usage of the button component)
const Button = ({
    style,
    label,
    link,
    ...props
}) => {
    return (
        <Link to={link} className="default-btn-link">
            <button className={`default-btn ${style} ${props.className}`}>
                {label}
            </button>
        </Link>
    );
}

export default Button;