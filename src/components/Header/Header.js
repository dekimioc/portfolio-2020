import React, { Component } from 'react';
import logo from '../../assets/images/logo/DM.png';
import './Header.scss';
import hamburger from '../../assets/images/logo/hamburger.png';

import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            openMobNav: false
        }
    }

    openMobileMenuHandler = () => {
        this.setState({ openMobNav: !this.state.openMobNav });
    }

    closeNavOnEveryClick = () => {
        this.setState({ openMobNav: false })
    }

    render() {
        return (
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
                            <Link to="/projects"><li>Projects</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                        <img className="img-toggler" src={hamburger} onClick={this.openMobileMenuHandler} alt="" />
                        {this.state.openMobNav ?
                            <div class="small-menu">
                                <ul>
                                    <Link onClick={this.closeNavOnEveryClick} to="/"><li>Home</li></Link>
                                    <Link onClick={this.closeNavOnEveryClick} to="/more-about-me"><li>About</li></Link>
                                    <Link onClick={this.closeNavOnEveryClick} to="/projects"><li>Projects</li></Link>
                                    <Link onClick={this.closeNavOnEveryClick} to="/contact"><li>Contact</li></Link>
                                </ul>
                            </div> : null}
                    </div>
                </nav>
            </Wrapper>
        )
    }
};

export default Header;