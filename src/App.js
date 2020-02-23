import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import BaksonProject from './pages/AllProjectPages/BaksonProject/BaksonProject';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <PortfolioPage /> */}
      {/* <BaksonProject /> */}
     <Header />
     <div className="container">
        <Slider />
        <SkillsContainer />
       <About />
       
        <Portfolio />
        <Footer />
     </div>
     
    </div>
  );
}

export default App;
