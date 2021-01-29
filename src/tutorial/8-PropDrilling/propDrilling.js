import React, {useState} from 'react'
import {data} from '../../data'

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        })
    }

    const SinglePerson = ({ id, name, age, removePerson }) => {
        return (           
            <div className = 'item'>
                <h4>{id}</h4>
                <h4>{name}</h4>
                <h4>{age}</h4>
                <button className='btn' onClick={() => removePerson(id)}>
                    Remove
                </button>
            </div>
        );
    }

    
    const List = ({ people, removePerson }) => {
        return (
            <>
                {
                    people.map((person) => {
                        return(
                            <SinglePerson
                                {...person}
                                removePerson = {removePerson}
                            />
                        )
                    })
                }
            </>
        )
    }

    return (
        <section>
            <h4>Prop Drilling</h4>
            <List people={people} removePerson={removePerson}/>
        </section>
    )

}

export default PropDrilling;
