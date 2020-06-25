import React from 'react'; 
import { Link } from 'react-router-dom'; 


export default function GistList({ gists, loading, error }) { 
    console.log('rendering GistList...')
    const gistList = gists.map((gist, index) => { 
        return(
            <li key={index}>
                <Link to={`/gist/${gist.id}`}> 
                    {gist.description}
                </Link>
            </li> 
        ); 
    }); 
    
    if(loading) { 
       return  <h1 style={{ color: 'green' }}>Loading....</h1>
    } else if(error) { 
       return  <h1 style={{ color: 'red' }}>Error....</h1>
    } else { 
       return  <ul>{gistList}</ul> 
    }

}