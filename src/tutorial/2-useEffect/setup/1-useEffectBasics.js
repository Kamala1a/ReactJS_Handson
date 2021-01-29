import React, {useEffect, useState} from 'react'

//UseEffect allows us to do the side effect. 
// by default useEffect runs after every re-render
// cleanup function
//second parameter: the second parameter is used to specify useEffect works on which parameter/ parameters
// if second parameter is [] then it will execute only on initial render
const useEffectBasics = () => {

    const [value, setValue] = useState(0);
// We cannot do conditional check useEffect
    /*
    That is 
    if(condition) {
        useEffect 
    }

    it is not possible. but we can achieve the requirement as below
    */
    useEffect(() => {
        if (value > 0) {
            console.log('useEffect call');
            document.title = `New Message ( ${value} )`;
        }
    }, [value]);

    useEffect(() => {
        alert('Initial render');
    }, []);
    
    console.log('First call');

    return (
        <div>
            <h2>useEffect Example</h2>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
        </div>
    )
}

export default useEffectBasics
