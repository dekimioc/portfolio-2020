import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      
     <Header />
     <div className="container">
        <SkillsContainer />
        <Portfolio />
     </div>
     
    </div>
  );
}

export default App;
