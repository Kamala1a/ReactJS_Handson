import React, { useState, useEffect } from 'react';


const ControlledInput = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //const person = { firstName: firstName, email: email }; // this statement equals to below statement
        const person = { id: new Date().getTime().toString(), firstName, email };
        setPeople((people) => {
            return [...people, person];
        });
        setFirstName('');
        setEmail(() => {
            return '';
        })
    };

    return (
        <>
            <article>
                <form className='form'>
                    <div className='form-control'>
                        <label htmlFor="firstName">Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value = {firstName}
                            onChange={ (e) => setFirstName(e.target.value)}>
                        </input>
                    </div>

                    <div className='form-control'>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value = {email}
                            onChange={ (e) => setEmail(e.target.value)}>
                        </input>
                    </div>

                    <button type='submit' onClick={handleSubmit}>add person</button>

                </form>
                {
                    people.map((person, index) => {
                        const { id, firstName, email } = person;
                        return (
                            <div className='item' key = {id}>
                                <h4>{id}</h4>
                                <h4>{firstName}</h4>
                                <h4>{email}</h4>
                            </div>
                        );
                    })
                }
            </article>
        </>
    )
}


export default ControlledInput;

