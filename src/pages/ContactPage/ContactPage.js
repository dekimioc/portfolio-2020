import React from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import MainImage from '../../components/MainImage/MainImage';
import contactMainImage from '../../assets/images/pages/SingleProject/singleProjectImage3.jpg';

import "./ContactPage.scss";

const ContactPage = () => {
    return (
        <Wrapper color="yellowBack">
            <MainImage mainUrl={contactMainImage} headingText="Contact" />
            <div className="contactContainer">
                <h2 className="heading-contact">If you like my projects and technologies that I know, feel free to contact me.</h2>
                <p className="contact-p"><a href="tel:+381659912706"><strong>Phone: </strong>+381659912706</a></p>
                <p className="contact-p"><a href="mailto:dekimioc@gmail.com"><strong>Email: </strong>dekimioc@gmail.com</a></p>
                <p className="contact-p"><a target="blank" href="https://www.linkedin.com/in/dejan-miocinovic-747641171/"><strong>Linkedin: </strong>Dejan Miocinovic</a></p>
                <p className="contact-p"><a target="blank" href="https://github.com/dekimioc"><strong>GitHub: </strong>GitHub profile</a></p>
            </div>
        </Wrapper>

    )
}

export default ContactPage;