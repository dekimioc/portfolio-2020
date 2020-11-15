import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage3.jpg';
import screenshoot from '../../../assets/images/projects/big-images/pagination1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/pagination2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/pagination.png';

const GitPagination = () => {
    const usedTechnologies = ['Html', 'Css', 'jQuery', 'PHP', "Wordpress"]
    return (
        <PageTemplateForProjects
            image={mainImage}
            laptop={laptop}
            siteName="GitHub Users with pagintaion"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/github-app-with-pagination"
            siteLink="https://dekimioc.github.io/github-app-with-pagination/"
            siteButton="button"
            subheadingText="Listing GitHub users with pagination!"
            descriptionText="Small App for listing GitHub users with pagination. There are some extra features, when you click on user row you can see big image fade in and fade out in one second."
        />
    )
}

export default GitPagination;