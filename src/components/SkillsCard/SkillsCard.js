import React from 'react';
import "./SkillsCard.scss";

const SkillsCard = ({url, altDescription, skillsHeading}) => {
    return(
        <div className="skillsCardComponent">
            <img src={url} alt={altDescription} />
            <h3 className="white">{skillsHeading}</h3>
        </div>
    )
};

export default SkillsCard;