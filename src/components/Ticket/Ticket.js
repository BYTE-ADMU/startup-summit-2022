// DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import './styles.css';

const Ticket = ({ reversed, leftBody, rightBody }) => (
    <div className={`ticket__container`}>
        <div className={`ticket__wrapper ${reversed ? `long` : `short`}`}>
            <div className={`ticket__header left`} />
            <div className="ticket__body">
                {leftBody}
            </div>
        </div>
        <div className={`ticket__wrapper ${reversed ? `short` : `long`}`}>
            <div className={`ticket__header right`} />
            <div className="ticket__body">
                {rightBody}
            </div>
        </div>
    </div>
)

export default Ticket;