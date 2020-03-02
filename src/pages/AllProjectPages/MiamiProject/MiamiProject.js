import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/miami1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/miami2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/miami.png';

const MiamiProject = () => {
    const usedTechnologies = ['Html', 'SCSS', 'jQuery']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Miami Site"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/miamiTemplate"
            subheadingText="Converted PSD to HTML"
            descriptionText="This is one of my first projects on which I've been working. I was using HTML, SCSS and a little bit of the jQuery to convert PSD file to Html. The project is fully responsive and works on all devices, and this site is pixel perfect. The theme from this PSD is Miami town."
        />
    )
}

export default MiamiProject;