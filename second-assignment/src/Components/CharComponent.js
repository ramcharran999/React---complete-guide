import React from "react";
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className={'char-component'} onClick={props.click}>
            <p>{props.charValue}</p>
        </div>
    );
}

export default CharComponent;