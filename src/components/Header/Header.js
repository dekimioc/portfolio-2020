import React from 'react';
import logo from '../../assets/images/logo/DM.png';
import './Header.scss';
import Wrapper from '../Wrapper/Wrapper';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Header = () => {
    return(
        <Wrapper>
        <nav className="header">
            <div className="left-side">
            <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="right-side">
                <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/more-about-me"><li>About</li></Link>
                        <Link to="/#skills"><li>Skills</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
        </Wrapper>
    )
};

export default Header;