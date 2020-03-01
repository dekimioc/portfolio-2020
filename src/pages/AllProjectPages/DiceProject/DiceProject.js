import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage3.jpg';
import screenshoot from '../../../assets/images/projects/big-images/dice2.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/dice1.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/dice.png';

const DiceProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'JavaScript']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Dice Game"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            gitButton="button"
            gitLink="https://github.com/dekimioc/Dice-game"
            siteLink="https://dekimioc.github.io/Dice-game/"
            siteButton="button"
            subheadingText="Java Script mini game for fun"
            descriptionText="I pulled some data from API with Axios library, saved in the state and the arranged into components. All components are reusable. I also added a function for sorting image from biggest to smallest and vice versa and function to change the layout from grid view to list view and vice versa. In the header, I added a search field where user can filter for events. Application is wrapped with Redux, the state is centralized. I used the main features of Redux library like Provider, reducer, actions, dispatch and connect function from 'react-redux' to connect page to reducer where I use state values."
        />
    )
}

export default DiceProject;