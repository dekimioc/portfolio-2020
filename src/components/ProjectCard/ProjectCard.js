import  React from 'react';
// import Html from '../../assets/images/skills/html.png'

const ProjectCard = ({imgSrc, heading, technologies}) => {
    return(
    <div className="projectCardContainer">
        <div className="projectCardImgContainer">
        <img src={imgSrc} />
        </div>
        <div className="projectCardTextContainer">
            <h5>{heading}</h5>
            <p>{technologies}</p>
        </div>
    </div>
    )
}

export default ProjectCard;