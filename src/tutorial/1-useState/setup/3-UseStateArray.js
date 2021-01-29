import React from 'react'

import { data } from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    
    const removeItem = (id) => {
        //let newPeople = people.filter((person) => person.id !== id);
        //setPeople(newPeople);
        setPeople((oldPeople) => {
            alert('oldPeople ' + oldPeople);
            let newPeople = people.filter((person) => person.id !== id);
            return newPeople;
        });
    }

    return (
        <>
            {
                people.map((person) => {
                    //when we use map function to iterate array we need to 
                    // 1. destructure the given array
                    // 2. should return required html elements using return element
                    // 3. use any valid parameter as id
                    const { id, name } = person;
                    return(
                        <div key = "id" className = 'item'>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>Remove Item</button>
                        </div>
                    )
                })
            }

            <button className="btn" onClick={() => setPeople([]) }>
                clear items
            </button>
        </>
    );
}

export default UseStateArray;
