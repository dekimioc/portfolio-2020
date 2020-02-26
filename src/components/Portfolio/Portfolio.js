import React, {Component} from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import "./Portfolio.scss";
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

import projectsData from './PortfolioData';
import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        const renderedData = projectsData.slice(0, 6).map(el => <Link to={`/projects/${el.path.toLowerCase()}`}><ProjectCard 
            imgSrc={el.image} 
            heading={el.heading} 
            technologies={el.technologies}
            buttonText="See project"
            /></Link>)
        return(
            <Wrapper>
                 <Heading mainHeading="Have you seen my works?" subheading="Projects I've been working on" color="white"
                subColor="yellow"/>
            <div className="portfolio-container">
               
                {renderedData}
                
            </div>
            <div className="portfolioButtonContainer">
                <Button href="/projects" text="See more projects" buttonProps="button"/>
                </div>
            </Wrapper>
        )
    }
}

export default Portfolio;