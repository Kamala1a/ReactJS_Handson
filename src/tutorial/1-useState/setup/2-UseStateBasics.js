import React, { useState } from 'react';
//useState is a function

//component name's first character should be upper case
// must be in function  / component body
// cannot call conditionally: that is : if(condition) { call useState} is not possible
const UseStateBasics = () => {
    /*
    console.log(useState('Hello world'));
    const value = useState(1)[0];
    const handler = useState(1)[1];
    console.log(value, handler);
    */
    
    const handleClick = () => {
        if (text === 'random title') {
            setText('Hello World');
        } else {
            setText('random title');
        }
    }

    const [text, setText] = useState('random title');
    return (
    <React.Fragment>
            <h1> {text} </h1>
            <button className='btn' onClick={handleClick}>
                change title
            </button>
    </React.Fragment>
    );
}

export default UseStateBasics;