import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/monster2.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/monster1.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/monstersapp.png';

const MonsterAppProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'JavaScript']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Monsters Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            siteButton="button"
            subheadingText="Sample Java Script App"
            descriptionText="App where I fetch data from JSON placeholder API with fetch method, save data in the state and then arranged them to the components. All components are reusable. One of the components is the search field where users can filter monsters by their names."
        />
    )
}

export default MonsterAppProject;