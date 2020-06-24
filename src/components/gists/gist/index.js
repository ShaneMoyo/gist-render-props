import React, { Component } from 'react'; 
import Resource from '../../utils/Resource';



export default class Gist extends Component { 
    
    render() { 
        const { data: { resource: gist, loading, error }} = this.props;
        
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
            
    }

}


