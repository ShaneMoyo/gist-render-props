import React, { useState, useMemo } from 'react'; 
import  SearchContext from '../../contexts/SearchContext'; 

const Search = () => { 
    const [username, setUsername] = useState(""); 

    const handleChange = value => setUsername(value); 
    const handleSubmit = (event, search) => { 
        event.preventDefault(); 
        search(username); 
    }
    console.log('rendering Search...')
    return( 
        <SearchContext.Consumer>
            { search => (
                <form style={{ display: 'flex', justifyContent: 'center'}} onSubmit={event => handleSubmit(event, search)}>
                    <fieldset style={{ width: '40%'}}> 
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
            )}
        </SearchContext.Consumer>
    )
};

export default Search