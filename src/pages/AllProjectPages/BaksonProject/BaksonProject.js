import React from 'react';

import './BaksonProject.scss';
import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/bakson.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/bakson2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/Bakson.png';

const BaksonProject = () => {
    const usedTechnologies = ['Html', 'Scss', 'React', 'Redux']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Bakson Project"
            siteName="Bakson Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            siteButton="button"
            descriptionText="I pulled some data from API with Axios library, saved in the state and the arranged into components. All components are reusable. I also added a function for sorting image from biggest to smallest and vice versa and function to change the layout from grid view to list view and vice versa. Application is wrapped with Redux, the state is centralized. I used the main features of Redux library like Provider, reducer, actions, dispatch and connect function from 'react-redux' to connect page to reducer where I use state values."
        />
    )
}

export default BaksonProject;