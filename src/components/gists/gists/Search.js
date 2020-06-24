import React, { useState } from 'react'; 

export default function Search({ search, loading, error }) { 
    const [username, setUsername] = useState(""); 

    const handleChange = value => setUsername(value); 
    const handleSubmit = event => { 
        event.preventDefault(); 
        search(username); 
    }

    return( 
        <form style={{ display: 'flex', 'justify-content': 'center'}} onSubmit={event => handleSubmit(event)}>
            <fieldset style={{ width: '40%'}}> 
                <label>Search Gists: </label>
                <input 
                    type="text" 
                    value={username}
                    placeholder="username"
                    onChange={({ target }) => handleChange(target.value)}
                /> 
                 <button type="submit">
                    {loading ? 'Searching...' : 'Search'}
                </button> 
                { error && <p style={{ fontSize: 12, color: 'red'}}>A server error occured. Please try again later</p>}
            </fieldset>         
        </form> 
    )
}