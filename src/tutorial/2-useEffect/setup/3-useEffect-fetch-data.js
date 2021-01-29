import React, { useEffect, useState } from 'react'
//Fetch data using second argument
// We we change state of any object inside useEffect method then its compulsory to add 
// second parameter []. That is because when we change state of any object then it will re-render the page.
// After every re-render it will call useEffect. so it will leads to infinite loop.

const url = 'https://api.github.com/users';

const useEffectFetchData = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h3>github users</h3>  
            <ul className="users">

            </ul>
            
            {users.map((user) => {
                const { login, id, avatar_url, html_url } = user;
                return (
                    <li key={id}>
                        <img src={avatar_url} alt={login} />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                );
            })}
        </>
    )
}

export default useEffectFetchData
