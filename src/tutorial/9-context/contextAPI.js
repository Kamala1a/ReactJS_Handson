import React, {useState, useContext} from 'react'
import { data } from '../../data'

const PersonContext = React.createContext();

const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        })
    }

    const SinglePerson = ({ id, name, age }) => {
        const {removePerson} = useContext(PersonContext);
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

    
    const List = () => {
        const mainData = useContext(PersonContext);
        return (
            <>
                {
                    mainData.people.map((person) => {
                        return(
                            <SinglePerson
                                {...person}
                            />
                        )
                    })
                }
            </>
        )
    }

    return (
        <section>
            <h4>ContextAPI</h4>
            <PersonContext.Provider value = {{people, removePerson}}>
                <List />
            </PersonContext.Provider>
        </section>
    )

}

export default ContextAPI;
