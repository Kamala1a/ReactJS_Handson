import React, { useState, useEffect } from 'react'

const useEffectcleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);
        };
    })
    console.log('render');
    return (
        <div>
            <h2>Window</h2>
            <h1>{size}</h1>
        </div>
    )
}

export default useEffectcleanup;
