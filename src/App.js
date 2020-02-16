import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';

function App() {
  return (
    <div className="App">
      
     <Header />
     <div className="container">
        <SkillsContainer />
     </div>
     
    </div>
  );
}

export default App;
