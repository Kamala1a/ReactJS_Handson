import React, {useState} from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Samraj Augustin',
        age: 31,
        message: 'Random Message'
    });

    const changeMessage = () => {
        if (person.message === 'Random Message') {
            setPerson({ ...person, message: 'Hello World' });
        } else {
            setPerson({ ...person, message: 'Random Message' });
        }
    }
    return (
        <> 
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className ="btn" onClick={changeMessage}>change message</button>
        </>
    );
}

export default UseStateObject;
