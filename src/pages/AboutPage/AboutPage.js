import React from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Heading from '../../components/Heading/Heading';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';
import aboutMainImage from '../../assets/images/pages/aboutPage.jpg';
import myImage from '../../assets/images/pages/myImage.jpg';
import ExternalButton from '../../components/ExternalButton/ExternalButton';

import "./AboutPage.scss";

const AboutPage = () => {
    return(
        <Wrapper color="yellowBack">
            <MainImage mainUrl={aboutMainImage} headingText="About Me"/>
            <div className="aboutPageContainer">
                <div className="aboutPageImgContainer">
                    <img src={myImage} alt=""/>
                    <p><strong>Date of birth: </strong>27.06.1991</p>
                    <p><strong>Address: </strong>Nove Medje 62dj, Batajnica</p>
                    <p><strong>Email: </strong><a href="mailto:dekimioc@gmail.com">dekimioc@gmail.com</a></p>
                    <p><strong>Phone number: </strong><a href="tel:+381659912706">+381659912706</a></p>
                </div>
                <div>
                    <h2>Dejan Miocinovic</h2>
                    <p>I currently work at Intellrocket as a front-end developer, before that I worked as a freelance JavaScript programmer for 6 - 7 months.</p>

<p>I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. I think that websites don't have to be static, I love making pages come to life, and my layouts work on any device, big or small. I know how to create a website to run across devices using the latest technologies available. I'm especially interested in learning technology, I want to become a full stack developer. I mostly like to work in React JS technology.</p>
<p>Skilled in:</p>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>SCSS</li>
    <li>Bootstrap</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>React</li>
    <li>Redux</li>
    <li>Wordpress</li>
    <li>Git</li>
    <li>Photoshop</li>
    <li>Webpack</li>
</ul>
                </div>
            </div>
            <div className="extButtonContainer">
            <ExternalButton href="https://github.com/dekimioc" buttonProps="blackButton" text="GitHub profile"  />
            </div>
        </Wrapper>
        
    )
}

export default AboutPage;