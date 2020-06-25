import React from 'react'; 
import Search from './Search'; 
import GistList from './GistList'; 

export default function Gists({ search, loading, error, gists }) { 
    console.log('rendering Gists...')
    return (
        <>
            <Search/>
            <GistList gists={gists} loading={loading} error={error}/>
        </>
    ); 
}