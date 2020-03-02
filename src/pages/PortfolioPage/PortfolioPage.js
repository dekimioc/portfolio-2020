import React, { Component } from 'react';
import "./PortfolioPage.scss";
import { Link } from 'react-router-dom';
import projectsData from '../../components/Portfolio/PortfolioData';
import projectsPage from '../../assets/images/pages/projectsPage.jpg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Wrapper from '../../components/Wrapper/Wrapper';
import ExternalButton from '../../components/ExternalButton/ExternalButton';
import MainImage from '../../components/MainImage/MainImage';


class PortfolioPage extends Component {
    render() {
        const projects = projectsData.map(el => <Link key={el.heading} to={`/projects/${el.path.toLowerCase()}`}><ProjectCard  imgSrc={el.image} 
            key={el.heading}
            heading={el.heading} 
            technologies={el.technologies}
            buttonText="See project"/></Link>)
        return(
            <Wrapper color="blackBack">
            <MainImage mainUrl={projectsPage} headingText="All My Projects"/>
            <div className="portfolioPageContainer">
            {projects}
            </div>
            <div className="extButtonContainer">
            <ExternalButton href="https://github.com/dekimioc" buttonProps="button" text="GitHub profile"  />
            </div>
        </Wrapper>
        )
    }
};

export default PortfolioPage;