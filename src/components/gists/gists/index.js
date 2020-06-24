import React from 'react'; 
import Search from './Search'; 
import GistList from './GistList'; 

export default function Gists({ search, loading, error, gists }) { 
    return (
        <>
            <Search search={search} loading={loading} error={error}/>
            <GistList gists={gists}/>
        </>
    ); 
}