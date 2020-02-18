import React, {Component} from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

import projectsData from './PortfolioData';

class Portfolio extends Component {
    render() {
       console.log(projectsData)
        const renderedData = projectsData.map(el => <ProjectCard imgSrc={el.image}/>)
        return(
            
            <div>
                {renderedData}
            </div>
        )
    }
}

export default Portfolio;