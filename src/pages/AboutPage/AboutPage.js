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
            <MainImage mainUrl={aboutMainImage} headingText="About Me"/>
            <div className="aboutPageContainer">
                <div className="aboutPageImgContainer">
                    <img src={myImage} alt=""/>
                    <p><strong>Date of birth: </strong>27.06.1991</p>
                    <p><strong>Address:</strong>Nove Medje 62dj, Batajnica</p>
                    <p><strong>Email:</strong><a href="mailto:dekimioc@gmail.com">dekimioc@gmail.com</a></p>
                    <p><strong>Phone number:</strong>+381 65 991 27 06</p>
                </div>
                <div>
                    <h2>Dejan Miocinovic</h2>
                </div>
            </div>
        </Wrapper>
        
    )
}

export default AboutPage;