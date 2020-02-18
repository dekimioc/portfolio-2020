import React, { Component } from 'react';
import Heading from '../Heading/Heading';
// import './skillsData.json';
import SkillsCard from '../SkillsCard/SkillsCard';
import axios from 'axios';

import './SkillsContainer.scss';

class SkillsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get('skillsData.json')
        .then(response => {
          this.setState({data: response.data})
          console.log(this.state)
        })
        .catch(error => {
          console.log(error);
        })
    }
    render() {
            const skillsCardElement = this.state.data.map(el => 
            <SkillsCard 
                url={el.image} 
                skillsHeading={el.name}
                key={el.key}
            />)
        return (
            <div>
                <Heading 
                mainHeading="What do I know?"
                subheading="I'm skilled in this technologies"
                />
                <div className="skillsContainer">
                    {skillsCardElement}
                </div>
               
            </div>
        )
        }
}

export default SkillsContainer;