import React from 'react';
import Slider from '../Slider/Slider';
import SkillsContainer from '../SkillsContainer/SkillsContainer';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

function Homepage() {
  return (
    <div>
    
     <div className="container">
        <Slider />
        <SkillsContainer />
       <About />
        <Portfolio />

     </div>
    </div>

  );
}

export default Homepage;