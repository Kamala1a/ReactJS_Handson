import React, {useReducer} from 'react'

const initialState = {
    count1 : 0,
    count2: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {
                ...state,
                count1: state.count1 + 1,
            }
            break;
        
        case 'decrement1':
            return {
                ...state,
                count1: state.count1 - 1,
            }
            break;
        
        case 'reset1':
            return {
                ...state,
                count1: 0,
            }
            break;
        
        case 'increment2':
            return {
                ...state,
                count2: state.count2 + 1,
            }
            break;
        
        case 'decrement2':
            return {
                ...state,
                count2: state.count2 - 1,
            }
            break;
        case 'reset2':
            return {
                ...state,
                count2: 0
            }
            break;

        default:
            throw new Error('Unknown Error');
    }
}

const Example2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h2>{state.count1}</h2>
                <button className='btn' onClick={() => dispatch({ type: 'increment1' })}>+</button>
                <button className='btn' onClick={() => dispatch({ type: 'decrement1' })}>-</button>
                <button className='btn' onClick={() => dispatch({ type: 'reset1' })}>0</button><br/><br/><hr/><br/>
                <h2>{state.count2}</h2>
                <button className='btn' onClick={() => dispatch({ type: 'increment2' })}>+</button>
                <button className='btn' onClick={() => dispatch({ type: 'decrement2' })}>-</button>
                <button className='btn' onClick={() => dispatch({type:'reset2'})}>0</button>
            </div>
        </div>
    )
}

export default Example2;