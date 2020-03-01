import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/monsterattack1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/monsterattack2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/monstersattack.png';

const MonsterGameProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'Java Script']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Monster Game"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            gitButton="button"
            siteLink="https://dekimioc.github.io/monster_app/"
            gitLink="https://github.com/dekimioc/monster_app"
            subheadingText="Simple game made in JavaScript"
            descriptionText="This is a really simple small game without much stylization. Monster Killer is made of few variables, few functions, few if/else statements and two progress bars. On the game start, health is controlled from the prompt field. The game is fully responsive and works on all devices. "
        />
    )
}

export default MonsterGameProject;