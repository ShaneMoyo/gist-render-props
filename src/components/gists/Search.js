import React, { useState } from 'react'; 

export default function Search({ search }) { 
    const [username, setUsername] = useState(""); 

    const handleChange = value => setUsername(value); 
    const handleSubmit = event => { 
        event.preventDefault(); 
        search(username); 
    }

    return( 
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset> 
                <label>Search Gists: </label>
                <input 
                    type="text" 
                    value={username}
                    placeholder="username"
                    onChange={({ target }) => handleChange(target.value)}
                /> 
                 <button type="submit">
                    Search
                </button> 
            </fieldset>         
        </form> 
    )
}