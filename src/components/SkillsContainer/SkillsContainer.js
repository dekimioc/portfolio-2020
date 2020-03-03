import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import skillsData from './SkillsData.js';
import SkillsCard from '../SkillsCard/SkillsCard';
import Wrapper from '../Wrapper/Wrapper';
import axios from 'axios';

import './SkillsContainer.scss';

class SkillsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    // componentDidMount = () => {
    //     axios.get('skillsData.json')
    //     .then(response => {
    //       this.setState({data: response.data})
    //       console.log(this.state)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // }
    render() {
            const skillsCardElement = skillsData.map(el => 
            <SkillsCard 
                url={el.image} 
                skillsHeading={el.name}
                key={el.key}
            />)
        return (
            <Wrapper>
            <div className="skills-wrapper" id="skills" href="skills">
                <Heading 
                mainHeading="What do I know?"
                subheading="I'm skilled in this technologies"
                color="white"
                subColor="yellow"
                />
                <div className="skillsContainer">
                    {skillsCardElement}
                </div>
               
            </div>
            </Wrapper>
        )
        }
}

export default SkillsContainer;