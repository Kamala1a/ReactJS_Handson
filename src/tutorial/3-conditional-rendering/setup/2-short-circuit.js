import React, { useState } from 'react'

function Shortcircuit() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('Text2');
    const [text3, setText3] = useState('Text3');
    const [text4, setText4] = useState('Text4');

    const firstValue = text1 || 'Hello World';
    const secondValue = text1 && 'Hello World';

    const [isError, setIsError] = useState(false);

    return (
        <>
            {/*
            <h1>First Value: {firstValue}</h1>
            <h1>Second Value: {secondValue}</h1>
            */}
            <h1>1 || : {text1 || 'Kamala'}</h1>
            <h1>2 && : {text1 && 'Kamala'}</h1>
            <h1>3 || : {text3 || 'Kamala'}</h1>
            <h1>4 && : {text4 && 'Kamala'}</h1>
            <h1>4 !&& : {!text4 && 'Kamala'}</h1>
            <button class='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
            {isError ? (
                <p>True</p>
            )
            :
            (
                <p>False</p>
            )}
            {isError && <h2>Error...</h2>}
        </>
    )
}

export default Shortcircuit;