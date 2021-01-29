import React, {useReducer} from 'react'

const initialState = {
    count : 0,
    isconfirmed: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                isconfirmed: true
            }
            break;
    
        default:
            throw new Error('Unknown Error');
    }
}

const Example = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                {
                    state.isconfirmed ?
                        (<p>confirmed!!</p>) :
                        (<p>Waiting for confirmation!!</p>)
                }
                <button className='btn' onClick={() => dispatch({type:'success'})}>confirm</button>
            </div>
        </div>
    )
}

export default Example;