import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/kraftline1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/kraftline2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/KraftLine.png';

const KraftLine = () => {
    const usedTechnologies = ['Html', 'Css', 'jQuery', 'PHP', "Wordpress"]
    return (
        <PageTemplateForProjects
            image={mainImage}
            laptop={laptop}
            siteName="KraftLine Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            // gitButton="button"
            // gitLink="https://github.com/dekimioc/bakson"
            siteLink="https://www.kraft-line.com"
            siteButton="button"
            subheadingText="Wordpress site with underscore theme, and custom code!"
            descriptionText="This is presentational site and I decided to use Wordpress with custom theme. This site is using a few plugins, Carbon Fields, Contact Form 7 and some plugins for caching. This site is very simple for using, and client can make changes on this site by himself. No theme, no unnecessary  code, all code is optimized and this is working perfectly!"
        />
    )
}

export default KraftLine;