import React from 'react'; 


export default function GistList({ gists }) { 

    const gistList = gists.map((gist, index) => { 
        return(
            <li key={index}>
                {gist.description}
            </li> 
        ); 
    }); 

    return (
        <ul>{gistList}</ul> 
    ); 

}