import React from 'react';
import MainImage from '../../../components/MainImage/MainImage';
import Wrapper from '../../../components/Wrapper/Wrapper';
import Header from '../../../components/Wrapper/Wrapper';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Heading/Heading';

const PageTemplateForProjects = ({backgroundFirst, backgroundSecond, image, siteName}) => {
    return(
        <div>
            <Wrapper color={backgroundFirst}>
                <Header />
                <MainImage mainUrl={image}/>
                <div>
                    <div>
                    <h2>Image of {siteName} site</h2>
                    </div>
                </div>
            </Wrapper>
            <Wrapper color={backgroundSecond}>
                <div>
                    <h2>{siteName} description</h2>
                    <div>technologies</div>
                    <div>desription</div>
                </div>
                <Button  />
            </Wrapper>
        </div>
    )
}

export default PageTemplateForProjects;