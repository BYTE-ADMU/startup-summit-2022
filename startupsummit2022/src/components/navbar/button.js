import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='register'>
            <button className='nav__register-btn'>
                REGISTER
            </button>
        </Link>
    );
}