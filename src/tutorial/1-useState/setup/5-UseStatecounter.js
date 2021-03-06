import React, { useState } from 'react'



const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const complexcounter = () => {
    setTimeout(() => { 
        //setValue(value + 2)
        setValue((prevState) => {
            return  prevState + 1;
        });
    }, 2000);
    }
    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={ () => setValue(value + 1)}>
                    Increase
                </button>
                <button className='btn' onClick={ () => setValue(value-1)}>
                    Decrease
                </button>
                <button className='btn' onClick = {() => setValue(0)}>
                    Reset
                </button>
                <h2>complex counter</h2>
                <h1>{value}</h1>
                <button className = 'btn' onClick={complexcounter}>complex counter</button>
            </section>
        </>
    );
}

export default UseStateCounter;
