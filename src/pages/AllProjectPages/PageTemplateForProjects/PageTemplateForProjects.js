import React from 'react';
import MainImage from '../../../components/MainImage/MainImage';
import Wrapper from '../../../components/Wrapper/Wrapper';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';

import './PageTemplateForProjects.scss';

const PageTemplateForProjects = ({backgroundFirst, backgroundSecond, image, siteName, projectScreenshot, projectScreenshot2, technologies, gitButton, siteButton, descriptionText, laptop, subheadingText}) => {
    return(
        <div>
            <Wrapper color={backgroundFirst}> 
                <MainImage mainUrl={image} headingText={siteName}/>
                <div className="laptopimageContainer">
                <img src={laptop} />
                </div>
                <Heading 
                        subColor="white" 
                       subheading={subheadingText}
                    />
                <div className="imgTextContainer">
                    <img src={projectScreenshot} />
                    <img src={projectScreenshot2} />
                </div>
                <div className="projectsButtons">
                        <Button buttonProps={gitButton} text="GitHub code"/>
                        <Button buttonProps={siteButton} text="Visit site"/>
                    </div>
            </Wrapper>
            <Wrapper color={backgroundSecond}>
                <div className="descContainer">
                    <div>
                    <Heading 
                        color="black" 
                        mainHeading="Technologies"
                    />
                        <ul className="listPageTemplate">
                            {technologies.map(el => <li className="listElPageTemplate">{el}</li>)}
                        </ul>
                    </div>
                    <div>
                        <Heading 
                        color="black" 
                        mainHeading="Description"
                    />
                    <p>{descriptionText}</p>
                    </div>
                </div>
                <Button  />
            </Wrapper>
        </div>
    )
}

export default PageTemplateForProjects;