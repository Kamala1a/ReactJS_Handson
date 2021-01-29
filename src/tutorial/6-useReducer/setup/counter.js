import React, { useState, useReducer } from 'react';

const Counter = () => {

    const [initialState, setInitialState] = useState(0);

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    

    return (
        <div>
            <h2>counter: {state}</h2> 
            <button className = 'btn' onClick={() => dispatch('increment')}>+</button>
            <button className='btn' onClick={() => dispatch('decrement')}>-</button>
            <button className = 'btn' onClick={()=>dispatch('reset')}>0</button>
        </div>
    )
}

export default Counter;
