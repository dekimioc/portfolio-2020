import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/e-commerce-react1.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/e-commerce-react2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/ecommerce.png';

const ReactECommerceProject = () => {
    const usedTechnologies = ['Html', 'JSX', 'SCSS', 'React', 'Redux']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="React E-commerce"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            subheadingText="React app with integrated Stripe payment"
            descriptionText="E-commerce with ReactJS! I mostly like this application from all of my projects. In this app are initialized firebase, sign in with Google method and Stripe payment method. You don't need to bee signed in to buy products. In the header is cart icon which has dropdown and you can see you're cart items from every page on the site. From the checkout page, you can add or remove products from your cart and then you can pay with the Stripe! React router library is used to keep UI in sync with the URL. The app is fully responsive and works on all devices. The state is centralized with Redux."
        />
    )
}

export default ReactECommerceProject;