import React from 'react';
import './IOcomponents.css';

const userInput = (props) => {
    return <input className={'input'} type={'text'} value={props.name} onChange={props.changed}/>;
}

export default userInput;