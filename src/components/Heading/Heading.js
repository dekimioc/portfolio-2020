import React from 'react';
import "./Heading.scss";

const Heading = ({mainHeading, subheading}) => {
    return(
        <div className="headingContainer"> 
            <h1>{mainHeading}</h1>
            <p>{subheading}</p>
        </div>
    )
};

export default Heading;