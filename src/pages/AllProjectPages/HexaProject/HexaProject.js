import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/hexa1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/hexa2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/hexa.png';

const HexaProject = () => {
    const usedTechnologies = ['Html', 'SCSS', 'jQuery']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Hexa Site"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/PSD-to-HTML"
            subheadingText="Converted PSD to HTML"
            descriptionText="This is one of my first projects on which I've been working. I was using HTML, SCSS and a little bit of the  jQuery to convert PSD file to Html. For slider in the header, I used the Swiper library. The project is fully responsive and works on all devices, and this site is pixel perfect. The theme from this PSD is design agency Hexa."
        />
    )
}

export default HexaProject;