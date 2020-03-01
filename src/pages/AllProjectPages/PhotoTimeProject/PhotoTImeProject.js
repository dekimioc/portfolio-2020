import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/photo1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/photo2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/phototime.png';

const PhotoTimeProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'React']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Photo Time"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            siteLink="https://dekimioc.github.io/Phototime/"
            gitButton="button"
            gitLink="https://github.com/dekimioc/Phototime"
            subheadingText="Converted PSD to HTML"
            descriptionText="This is one of my first projects where I convert PSD to HTML with ReactJS technology. I was using HTML(JSX), CSS combined with React to convert PSD file to Html. All components are made to be reusable. The project is fully responsive and works on all devices, and this site is pixel perfect. The theme of this PSD is an app for photography."
        />
    )
}

export default PhotoTimeProject;