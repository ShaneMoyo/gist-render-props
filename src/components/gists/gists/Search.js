import React, { useState } from 'react'; 
import  Context from '../../contexts/searchContext'; 

export default function Search() { 
    const [username, setUsername] = useState(""); 

    const handleChange = value => setUsername(value); 
    const handleSubmit = (event, search) => { 
        event.preventDefault(); 
        search(username); 
    }

    return( 
        <Context.Consumer>
            { props => (
                <form style={{ display: 'flex', justifyContent: 'center'}} onSubmit={event => handleSubmit(event, props.search)}>
                    <fieldset style={{ width: '40%'}}> 
                        <label>Search Gists: </label>
                        <input 
                            type="text" 
                            value={username}
                            placeholder="username"
                            onChange={({ target }) => handleChange(target.value)}
                        /> 
                        <button type="submit">
                            {props.loading ? 'Searching...' : 'Search'}
                        </button> 
                        {props.error && <p style={{ fontSize: 12, color: 'red'}}>A server error occured. Please try again later</p>}
                    </fieldset>         
                </form> 
            )}
        </Context.Consumer>
    )
}