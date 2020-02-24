import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageTemplateForProject from './pages/AllProjectPages/PageTemplateForProjects/PageTemplateForProjects';
import BaksonProject from './pages/AllProjectPages/BaksonProject/BaksonProject';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header /> 
        <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path="/more-about-me" component={AboutPage} />
          <Route path="/projects" exact component={PortfolioPage} />
          <Route path="/projects:name" exact component={PageTemplateForProject} />
          <Route path="/projects/bakson" exact component={BaksonProject} />
      </Switch>
      </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
