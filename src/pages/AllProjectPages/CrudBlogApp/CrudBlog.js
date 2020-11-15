import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage2.jpg';
import screenshoot from '../../../assets/images/projects/big-images/crud1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/crud2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/crudapp.png';

const GitHubSearch = () => {
    const usedTechnologies = ['JSX', 'SCSS', 'React']
    return (
        <PageTemplateForProjects
            image={mainImage}
            laptop={laptop}
            siteName="CRUD Blog App"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/CRUD-blog-app"
            siteLink="https://dekimioc.github.io/CRUD-blog-app/"
            siteButton="button"
            subheadingText="Create, Update and Delete Posts with this App!"
            descriptionText="Site with React technology for making posts and organize them into the categories. All the posts are on the REST API and you can make a new post, delete posts, and update the current posts. Simple and easy to use."
        />
    )
}

export default GitHubSearch;