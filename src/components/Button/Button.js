import React from 'react';
import './Button.scss';

const Button = ({href, text, buttonProps}) => {
    return(
        <button className={buttonProps === "button" ? "button" : "none"} href={href}>{text}</button>
    )
}

export default Button;