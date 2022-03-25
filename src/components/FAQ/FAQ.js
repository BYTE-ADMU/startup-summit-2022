// DEPENDENCIES
import React from "react";

// STYLES
import "./styles.css";

const FAQ = ({
    title,
    body
}) => (
    <div className="faq--container">
        <div className="faq--line" />
        <h1 className="faq--question">{title}</h1>
        <p className="faq--answer">{body}</p>
    </div>
)

export default FAQ;