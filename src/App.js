import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BaksonProject from './pages/AllProjectPages/BaksonProject/BaksonProject';
import StolarijaBatajnica from './pages/AllProjectPages/StolarijaProject/Stolarija';
import DiceProject from './pages/AllProjectPages/DiceProject/DiceProject';
import PhotoTimeProject from './pages/AllProjectPages/PhotoTimeProject/PhotoTImeProject';
import ReactECommerceProject from './pages/AllProjectPages/ReactECommerceProject/ReactECommerceProject'
import BurgerProject from './pages/AllProjectPages/BurgerProject/BurgerProject';
import MonsterGameProject from './pages/AllProjectPages/MonsterGameProject/MonsterGameProject';
import SurferProject from './pages/AllProjectPages/SurferProject/SurferProject';
import MiamiProject from './pages/AllProjectPages/MiamiProject/MiamiProject';
import ThunderProject from './pages/AllProjectPages/ThunderProject/Thunder';
import HexaProject from './pages/AllProjectPages/HexaProject/HexaProject';
import ChoreDoorProject from './pages/AllProjectPages/ChoreDoorProject/ChoreDoorProject';
import MonsterAppProject from './pages/AllProjectPages/MonsterAppProject/MonsterAppProject';
import MiniShopProject from './pages/AllProjectPages/MiniShopProject/MiniShopProject';
import KraftLine from './pages/AllProjectPages/KraftLine/KraftLine';

function App() {
  return (
    <div className="App">

      <HashRouter basename="/">
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={Homepage} />

            <Route path="/more-about-me" component={AboutPage} />
            <Route path="/projects" exact component={PortfolioPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/projects/kraft-line" exact component={KraftLine} />
            <Route path="/projects/bakson" exact component={BaksonProject} />
            <Route path="/projects/stolarija" exact component={StolarijaBatajnica} />
            <Route path="/projects/dice" exact component={DiceProject} />
            <Route path="/projects/phototime" exact component={PhotoTimeProject} />
            <Route path="/projects/reactecommerce" exact component={ReactECommerceProject} />
            <Route path="/projects/burger" exact component={BurgerProject} />
            <Route path="/projects/monstergame" exact component={MonsterGameProject} />
            <Route path="/projects/surfer" exact component={SurferProject} />
            <Route path="/projects/miami" exact component={MiamiProject} />
            <Route path="/projects/thunder" exact component={ThunderProject} />
            <Route path="/projects/hexa" exact component={HexaProject} />
            <Route path="/projects/choreDoor" exact component={ChoreDoorProject} />
            <Route path="/projects/monsterapp" exact component={MonsterAppProject} />
            <Route path="/projects/minishop" exact component={MiniShopProject} />

          </Switch>
        </ScrollToTop>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
