import React from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Heading from '../../components/Heading/Heading';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';
import aboutMainImage from '../../assets/images/pages/aboutPage.jpg';
import myImage from '../../assets/images/pages/myImage.jpg';

import "./AboutPage.scss";

const AboutPage = () => {
    return(
        <Wrapper color="yellowBack">
            <Header />
            <MainImage mainUrl={aboutMainImage} headingText="About Me"/>
            <div className="aboutPageContainer">
                <div className="aboutPageImgContainer">
                    <img src={myImage} alt=""/>
                    <p><strong>Date of birth:</strong></p>
                    <p><strong>Address:</strong></p>
                    <p><strong>Email:</strong></p>
                    <p><strong>Phone number:</strong></p>
                </div>
                <div>
                    <h2>Dejan Miocinovic</h2>
                </div>
            </div>
        </Wrapper>
        
    )
}

export default AboutPage;