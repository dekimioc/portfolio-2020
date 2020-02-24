import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({href, text, buttonProps}) => {
    return(
        <Link to={href}><button className={buttonProps === "button" ? "button" : buttonProps === "blackButton" ? "blackButton" : "none"} >{text}</button></Link>
    )
}

export default Button;