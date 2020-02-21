import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      
     <Header />
     <div className="container">
        <Slider />
       <About />
        <SkillsContainer />
        <Portfolio />
     </div>
     
    </div>
  );
}

export default App;
