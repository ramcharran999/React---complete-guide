import React from 'react';

const ValidationComponent = (props) => {
    return (
        <p>{props.inputLength > 0 ? (props.inputLength < 5 ? 'Text too short' : 'Text long enough') : null}</p>
    );
}

export default ValidationComponent;