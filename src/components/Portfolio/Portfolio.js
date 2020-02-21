import React, {Component} from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import "./Portfolio.scss";
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

import projectsData from './PortfolioData';
import Wrapper from '../Wrapper/Wrapper'

class Portfolio extends Component {
    render() {
       console.log(projectsData)
        const renderedData = projectsData.map(el => <ProjectCard 
            imgSrc={el.image} 
            heading={el.heading} 
            technologies={el.technologies}
            buttonText="See project"
            />)
        return(
            <Wrapper>
                 <Heading mainHeading="Have you seen my works?" subheading="Projects I've been working on" color="white"
                subColor="yellow"/>
            <div className="portfolio-container">
               
                {renderedData}
                
            </div>
            <div className="portfolioButtonContainer">
                <Button text="See more projects"/>
                </div>
            </Wrapper>
        )
    }
}

export default Portfolio;