import React, { Component } from 'react';
import axios from 'axios';
import data from './skillsData';
import SkillsCard from '../SkillsCard/SkillsCard';

import './SkillsContainer.scss';

class SkillsContainer extends Component {
    render() {
            const skillsCardElement = data.map(el => 
            <SkillsCard 
                url={el.image} 
                skillsHeading={el.name}
                key={el.key}
            />)
        return (
            <div className="skillsContainer">
               {skillsCardElement}
            </div>
        )
    }
    
}

export default SkillsContainer;