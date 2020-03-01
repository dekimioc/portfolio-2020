import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/surfer1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/surfer2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/surfer.png';

const SurferProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'React']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Surfer Site"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            siteLink="https://dekimioc.github.io/Surfer/"
            gitButton="button"
            gitLink="https://github.com/dekimioc/Surfer"
            subheadingText="Converted PSD to HTML"
            descriptionText="For this site, I used ReactJs in combination with HTML and CSS to convert this PSD into the site. All components are made to be reusable. The project is fully responsive and works on all devices, and this site is pixel perfect. The theme from this PSD is shop for the surfer's boards."
        />
    )
}

export default SurferProject;