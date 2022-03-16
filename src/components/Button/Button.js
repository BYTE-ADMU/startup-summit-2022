import React from 'react';
import './styles.css';
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