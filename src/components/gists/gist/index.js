import React, { Component } from 'react'; 
import github from '../../../services/api'; 


export default class Gist extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            loading: true, 
            error: false, 
            gist: null,
        }
    }
    
    async componentDidMount() { 
        const id = this.props.match.params.id;
        console.log('here')
        try { 
            const gist = await github.getGistByid(id); 
            console.log('gist: ', gist)
            this.setState({
                loading: false,  
                gist, 
            })
        } catch (error) { 
            this.setState({ 
                error: true,
                loading: false, 
            })
        }
    }

    render() { 
        const { loading, error, gist } = this.state; 
        const  gistView = gist ? (
            <>
                <p>Description: { this.state.gist.description } </p>
                <p>Created at: { this.state.gist.created_at }</p> 
            </>
        ) : null; 
        const loadingView =<p>Loading...</p>; 

       
        return(
            <section> 
                <h3>Gist: {this.props.match.params.id}</h3>
                { loading ? loadingView : gistView }
            </section>
        ); 
    }


}