import React from 'react';
import './ExternalButton.scss';

const ExternalButton = ({href, text, buttonProps}) => {
    return(
        <a target="blank" href={href}><button className={buttonProps === "button" ? "button" : buttonProps === "blackButton" ? "blackButton" : "none"} >{text}</button></a>
    )
}

export default ExternalButton;