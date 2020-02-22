import React, { Component } from 'react';
import "./PortfolioPage.scss";
import projectsData from '../../components/Portfolio/PortfolioData';
import projectsPage from '../../assets/images/pages/projectsPage.jpg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';

class PortfolioPage extends Component {
    render() {
        const projects = projectsData.map(el => <ProjectCard  imgSrc={el.image} 
            heading={el.heading} 
            technologies={el.technologies}
            buttonText="See project"/>)
        return(
            <Wrapper color="blackBack">
            <Header />
            <MainImage mainUrl={projectsPage} headingText="All My Projects"/>
            <div className="portfolioPageContainer">
            {projects}
            </div>
        </Wrapper>
        )
    }
};

export default PortfolioPage;