import React from 'react';
import './Button.scss';

const Button = ({href, text}) => {
    return(
        <button className="button" href={href}>{text}</button>
    )
}

export default Button;