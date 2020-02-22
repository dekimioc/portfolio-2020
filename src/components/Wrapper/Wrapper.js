import React from 'react';
import './Wrapper.scss';

const Wrapper = ({color, ...props}) => {
    return(
        <div className={color === "yellowBack" ? "yellowBack" : "blackBack"}>{props.children}</div>
    )
}

export default Wrapper;