import React from 'react';

import PageTemplateForProjects from '../PageTemplateForProjects/PageTemplateForProjects';
import mainImage from '../../../assets/images/pages/SingleProject/singleProjectImage1.jpg';
import screenshoot from '../../../assets/images/projects/big-images/stolarijaBatajnica.jpg';
import screenshoot2 from '../../../assets/images/projects/big-images/stolarijaBatajnica2.jpg'
import laptop from '../../../assets/images/projects/Laptop Images/stolarija.png';

const StolarijaBatajnica = () => {
    const usedTechnologies = ['Html', 'CSS', 'jQuery', 'Wordpress']
    return (
        <PageTemplateForProjects 
            image={mainImage}
            laptop={laptop}
            siteName="Stolarija Batajnica"
            backgroundSecond="yellowBack"
            projectScreenshot={screenshoot}
            projectScreenshot2={screenshoot2}
            technologies={usedTechnologies}
            siteButton="button"
            subheadingText="Simple Wordpress site with Avada theme"
            descriptionText="Simple Wordpress site made with Avada theme, this was a quick project. I used a few plugins as a Contact Form 7, Yoast SEO and Counter and Preloader. The layout of the pages is made in the builder which this theme is using. Slider in the header is handly made with the Swiper library in combination with Animate.css for animating the letters. The project is fully responsive and works on all devices, and this site is pixel perfect. The site is designed by me."
        />
    )
}

export default StolarijaBatajnica;