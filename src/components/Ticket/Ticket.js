// DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import './styles.css';

// ASSETS
import sun from "./assets/sun.png"

// reversed property is for the layout
// included leftBody and rightBody to prepare for final designs
const Ticket = ({ reversed, leftHeader, children, ...props }) => (
    <div className={`ticket__container`}>
        {/* if reversed, then left side will be long */}
        <div className={`ticket__wrapper ${reversed ? `long` : `short`}`}> 
            <div className={`ticket__header left`} />
            <div className="ticket__body">
                {
                    // if reversed
                    reversed
                    ?
                    children
                    :
                    <div className="left-ticket">
                        <h1 className="left-ticket__header">{leftHeader}</h1>
                        <img src={sun} alt="Sun" className="sun" />
                    </div>
                }
            </div>
        </div>
        {/* if reversed, then right side will be short */}
        <div className={`ticket__wrapper ${reversed ? `short` : `long`}`}>
            <div className={`ticket__header right`} />
            <div className="ticket__body">
                {reversed ? null : children}
            </div>
        </div>
    </div>
)

export default Ticket;