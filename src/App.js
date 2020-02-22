import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

function App() {
  return (
    <div className="App">
      {/* <PortfolioPage /> */}
     <Header />
     <div className="container">
        <Slider />
        <SkillsContainer />
       <About />
       
        <Portfolio />
     </div>
     
    </div>
  );
}

export default App;
