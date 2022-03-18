// DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import './styles.css';

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

// Button Properties:
// 1. style - how will the button look like? (used strings 'primary', 'secondary', and 'navbar' to determine which css style to use)
// 2. label - what will the button say? (button text)
// 3. link - where does the button lead to?
Button.propTypes = {
    style: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string
}

export default Button;