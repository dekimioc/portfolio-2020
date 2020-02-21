import React from 'react';
import "./Heading.scss";

const Heading = ({mainHeading, subheading, color, subColor}) => {
    return(
        <div className="headingContainer"> 
            <h1 className={color}>{mainHeading}</h1>
            <p className={subColor}>{subheading}</p>
        </div>
    )
};

export default Heading;