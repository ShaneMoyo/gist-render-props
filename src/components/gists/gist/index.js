import React, { Component } from 'react'; 
import Resource from '../../utils/Resource';
import github from '../../../services/api'; 



export default class Gist extends Component { 
    
    render() { 
        const id = this.props.match.params.id; 
        return (
            <Resource fetch={() => github.getGistByid(id)} render={data => {
                const { resource: gist, loading, error } = data;
                if(loading) {
                    return <p>Loading...</p>;
                } else if (error) {
                    return <p style={{ fontSize: 12, color: 'red'}}>Something went wrong. Please try again later</p>;
                } else {
                    return (
                        <section> 
                            <h3>Gist: {gist.id}</h3>
                        </section>
                    );
                } 
            }}/>       
        )      
    }

}


