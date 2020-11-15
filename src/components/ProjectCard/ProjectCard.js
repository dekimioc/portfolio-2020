import React from 'react';
import "./ProjectCard.scss";


const ProjectCard = ({ imgSrc, heading, technologies, buttonText, buttonHref }) => {
    return (
        <div className="projectCardContainer">
            <div className="projectCardImgContainer">
                <img src={imgSrc} alt="" />
                <h2>Click to view</h2>
            </div>
            <div className="bottomSectionContainer">
                <div className="projectCardTextContainer">
                    <h3>{heading}</h3>
                    <p>{technologies}</p>
                </div>
                <div className="buttonContainerProjectCard">

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;