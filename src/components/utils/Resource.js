import React, { useEffect, useState } from 'react'; 

export default function useResource(fetch) { 
    const [loading, setLoading ] = useState(true); 
    const [error, setError ] = useState(false); 
    const [resource, setResource ] = useState(null); 

    useEffect(() => {
        async function fetchResource() {
            try { 
                const fetchedResource = await fetch(); 
                setResource(fetchedResource); 
                setLoading(false); 
            } catch (error) { 
                setError(true); 
                setLoading(false); 
            }
         }
         fetchResource(); 
    }, []);  

    return { loading, error, resource }

}