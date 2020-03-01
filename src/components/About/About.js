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
            <p>I am a Front-end Developer and I am specialized in HTML5, CSS3, JavaScript, React, Redux. Dedication and passion are the main characteristics that describe me the best. This characteristic can also describe my willingness to constantly improve my knowledge and skills.</p>
            </div>
        </div>
        <div className="moreButtonCont">
        <Button href="/more-about-me" text="More about me" buttonProps="blackButton"/>
        </div>
        </Wrapper>
    )
}

export default About;