import React from 'react';
import logo from '../../assets/images/logo/DM.png';
import './Header.scss';
import Wrapper from '../Wrapper/Wrapper';

const Header = () => {
    return(
        <Wrapper>
        <div className="header">
            <div className="left-side">
                <a>
                    <img className="logo" src={logo} alt="logo" />
                </a>
            </div>
            <div className="right-side">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        </Wrapper>
    )
};

export default Header;