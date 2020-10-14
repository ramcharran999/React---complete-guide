import React, {useState} from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from "./Components/CharComponent";

function App() {
    const [textState, setTextState] = useState(
        {textLength: 0, text: ''}
    );

    const handleTextChange = (event) => {
        setTextState({textLength: event.target.value.length, text: event.target.value});
    };

    const handleCharCompClick = (index) => {
        let curtext = textState.text.split('');
        curtext.splice(index, 1);
        let newChar = curtext.join('');
        setTextState({textLength: newChar.length, text: newChar});
    }

    let chars = null;
    let charsElements = null;
    if (textState.textLength > 0) {
        chars = textState.text.split('');
        charsElements = chars.map((char, index)=>{
            return <CharComponent
                charValue = {char}
                key = {index}
                click={()=>handleCharCompClick(index)}/>
        });
    }

    return (
        <div className="App">
            <input className={'chartext'} value={textState.text} onChange={event => handleTextChange(event)}/>
            <p>Text length: {textState.textLength}</p>
            <ValidationComponent inputLength={textState.textLength}/>
            {charsElements}
        </div>
    );
}

export default App;
