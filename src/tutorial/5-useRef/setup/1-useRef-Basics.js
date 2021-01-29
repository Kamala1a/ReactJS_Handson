import React, { useRef, useEffect } from 'react';

const UseRefBasics = () => {
    
    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }
    
    useEffect(() => {
        refContainer.current.focus();
    })
     
    return (
        <>
            <form className='form'>
                <div>
                    <input type='text' ref={refContainer}/>
                    <button type = 'button' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default UseRefBasics;
