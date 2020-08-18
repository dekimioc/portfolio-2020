import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/gitsearch1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/gitsearch2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/git-laptop.png';

const GitHubSearch = () => {
    const usedTechnologies = ['JSX', 'SCSS', 'React', 'Redux']
    return (
        <PageTemplateForProjects
            image={mainImage}
            laptop={laptop}
            siteName="GitHub Search Users Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/search-github-users-classbased"
            siteLink="https://dekimioc.github.io/search-github-users-classbased"
            siteButton="button"
            subheadingText="Want to search for GitHub users and see repos? This is place for you!"
            descriptionText="Site with React technology for searching GitHub Users, when you enter name in input field and submit the form, request is sent to the GitHub API and then you get response, if user is matched you can click on his card and see his repos. Redux is used for centraling the state. There is version of this app which is made with React Hooks technology, you can see that repo in my GitHub!"
        />
    )
}

export default GitHubSearch;