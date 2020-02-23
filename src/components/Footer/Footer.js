import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './Footer.scss';

const Footer = () => {
    return(
        <Wrapper color="yellowBack">
        <div className="footerContainer">
            <div className="bottomFooter">
                <p>Made with &hearts; by Dejan Miocinovic</p>
            </div>
        </div>
        </Wrapper>
    )
};

export default Footer;