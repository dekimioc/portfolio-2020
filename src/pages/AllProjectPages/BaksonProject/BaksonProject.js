import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/bakson.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/bakson2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/Bakson.png';

const BaksonProject = () => {
    const usedTechnologies = ['Html', 'SCSS', 'React', 'Redux']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Bakson Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/bakson"
            siteLink="https://dekimioc.github.io/bakson/"
            siteButton="button"
            subheadingText="I pull some data from the API and then added them to the components."
            descriptionText="I pulled some data from API with Axios library, saved in the state and then arranged data into components. All components are reusable. I also added a function for sorting images from biggest to smallest and vice versa and function to change the layout from grid view to list view and vice versa. In the header, I added a search field where user can filter for events. Application is wrapped with Redux, the state is centralized. I used the main features of Redux library like Provider, reducer, actions, dispatch and connect function from 'react-redux' to connect page to reducer where I use state values. The app is fully responsive and works on all devices. "
        />
    )
}

export default BaksonProject;