import React from 'react'; 
import useResource from '../../utils/Resource';
import github from '../../../services/api'; 
import { useParams } from 'react-router-dom'; 



export default function Gist() { 
     const { id } = useParams(); 
     const { resource: gist, loading, error } = useResource(() => github.getGistByid(id)); 
     console.log('rendering Gist...')
    if(loading) {
        return <p>Loading...</p>;
    } else if (error) {
        return <p style={{ fontSize: 12, color: 'red'}}>Something went wrong. Please try again later</p>;
    } else {
        return (
            <section style={{ width: '80%', margin: 'auto'}}> 
                <h3>Gist: {gist.id}</h3>
            </section>
        );
    } 
                 
 }




