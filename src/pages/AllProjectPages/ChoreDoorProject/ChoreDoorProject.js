import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/chore1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/chore2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/choreDoor.png';

const ChoreDoorProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'JavaScript']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="ChoreDoor Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/Chore-Door"
            siteButton="button"
            siteLink="https://dekimioc.github.io/Chore-Door/"
            subheadingText="Java Script mini game for fun"
            descriptionText="This is a really simple small game without much stylization. ChoreDoor is made of few variables, few functions and few if/else statements. The game is fully responsive and works on all devices. "
        />
    )
}

export default ChoreDoorProject;