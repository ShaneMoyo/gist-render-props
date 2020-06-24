import React from 'react'; 
import { Link } from 'react-router-dom'; 


export default function GistList({ gists }) { 

    const gistList = gists.map((gist, index) => { 
        return(
            <li key={index}>
                <Link to={`/gist/${gist.id}`}> 
                    {gist.description}
                </Link>
            </li> 
        ); 
    }); 

    return (
        <ul>{gistList}</ul> 
    ); 

}