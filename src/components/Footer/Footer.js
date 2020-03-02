import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './Footer.scss';
import logo from '../../assets/images/logo/DM.png';

const Footer = () => {
    return(
        <footer>
        <Wrapper color="blackBack">
        <div className="footerContainer">
            <div className="topContentFooter">
                <div className="footer-img-container">
                    <img src={logo} width="60" height="60"/>
                </div>
                <div className="footer-text-container">
                    <h3>Contact</h3>
                    <p><strong>Phone: </strong><a href="tel:+381659912706">+381659912706</a></p>
                    <p><strong>Email: </strong><a href="mailto:dekimioc@gmail.com">dekimioc@gmail.com</a></p>
                    <p><strong>Linkedin: </strong><a target="blank" href="https://www.linkedin.com/in/dejan-miocinovic-747641171/">Dejan Miocinovic</a></p>
                </div>
                </div>
            </div>
            </Wrapper>
            <Wrapper color="yellowBack">
            <div className="footerContainer">
            <div className="bottomFooter">
                <p>Made with &hearts; by Dejan Miocinovic</p>
            </div>
            </div>
            </Wrapper>
        </footer>
    )
};

export default Footer;