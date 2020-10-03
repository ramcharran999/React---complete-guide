import React from 'react';
import './IOcomponents.css';

const userOutput = (props) => {
    return (
        <div className={'paragraph'}>
            <p>{props.username}</p>
            <p style={{color: '#DF013A'}}>{props.children}</p>
        </div>
    );
}

export default userOutput;