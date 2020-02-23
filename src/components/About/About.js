import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

import './About.scss';

const About = () => {
    return(
        <Wrapper color="yellowBack">
            <Heading 
                mainHeading="Do you know who I am?"
                subheading="A couple of things about me"
                color="black"
                subColor="white"
            />
        <div className="aboutContainer">
            <div className="aboutLeftSection">
            <p>My main goal as Front End Developer is to understand and implement client needs. Constantly looking for new challenges!</p>
            </div>
            <div className="aboutRightSection">
            <p>I am a Front-end Developer and I am specialized im HTML5, CSS3, JavaScript. Dedication and passion are main characteristics that describe me the best. This characteristic can also describe my willing to constantly improve my knowledge and skills. I build dinamic web apps in ReactJS framework.</p>
            </div>
        </div>
        <Button text="More about me"/>
        </Wrapper>
    )
}

export default About;