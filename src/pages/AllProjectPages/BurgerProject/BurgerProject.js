import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/burger1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/burger2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/burger.png';

const BurgerProject = () => {
    const usedTechnologies = ['Html','JSX', 'CSS', 'React', 'Redux']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Burger Builder"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            gitButton="button"
            gitLink="https://github.com/dekimioc/burger"
            siteLink="https://dekimioc.github.io/burger"
            subheadingText="React app with Firebase"
            descriptionText="Burger Builder is one of the biggest app that I made. In this app, there are many features like authentication, firebase and much more. The library that is used on this project is Axios for working with requests, react-router for syncing UI with the URL, Redux for centralizing the state. Ingredients that user add are stored in firebase and you can see your order list only if you're signed in. The app is fully responsive and works on all devices."
        />
    )
}

export default BurgerProject;