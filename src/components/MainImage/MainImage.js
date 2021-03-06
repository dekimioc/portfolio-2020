import React from 'react';
import './MainImage.scss';

const MainImage = ({ mainUrl, headingText }) => {
    return (
        <div className="mainImageContainer">
            <img src={mainUrl} alt="" />
            <h1>{headingText}</h1>
        </div>
    )
}

export default MainImage;