import React from 'react';
import MainImage from '../../../components/MainImage/MainImage';
import Wrapper from '../../../components/Wrapper/Wrapper';
import ExternalButton from '../../../components/ExternalButton/ExternalButton';
import Heading from '../../../components/Heading/Heading';
import GoBack from '../../../components/BackButton/BackButton';

import './PageTemplateForProjects.scss';

const PageTemplateForProjects = ({ backgroundFirst, backgroundSecond, image, siteName, projectScreenshot, projectScreenshot2, technologies, gitButton, siteButton, descriptionText, laptop, subheadingText, siteLink, gitLink }) => {
    return (
        <div>
            <Wrapper color={backgroundFirst}>
                <MainImage mainUrl={image} headingText={siteName} />
                <div className="laptopimageContainer">
                    <img src={laptop} alt="" />
                </div>
                <Heading
                    subColor="white"
                    subheading={subheadingText}
                />
                <div className="imgTextContainer">
                    <img src={projectScreenshot} alt="" />
                    <img src={projectScreenshot2} alt="" />
                </div>
                <div className="projectsButtons">
                    <ExternalButton buttonProps={gitButton} text="GitHub code" href={gitLink} />
                    <ExternalButton buttonProps={siteButton} text="Visit site" href={siteLink} />
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
                <GoBack />
            </Wrapper>
        </div>
    )
}

export default PageTemplateForProjects;