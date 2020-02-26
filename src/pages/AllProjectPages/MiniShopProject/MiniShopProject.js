import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/minishop.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/minishop.jpg';
import laptop from '../../../assets/images/projects/Laptop Images/minishop.png';

const MiniShopProject = () => {
    const usedTechnologies = ['Html', 'CSS', 'Java Script']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Mini Shop Project"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            subheadingText="Converted PSD to HTML"
            descriptionText="Presentation of the simple shop with pure js! This project is made with OOP in JavaScript. In this app only two products are available and cart components. You can add products to the cart and see how much you have to pay for these products. The game is fully responsive and works on all devices. "
        />
    )
}

export default MiniShopProject;