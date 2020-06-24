import React, { Component } from 'react';
import Search from './Search'; 
import github from '../../services/api'; 

class GistContainer extends Component {
    state = { 
        gists: [],
     }

    handleSearch = async username => { 
        this.setState({ 
            loading: true, 
            error: false, 
        }); 
        try { 
            const gists = await github.getGistsByUsername(username); 
            debugger; 
            this.setState({
                gists, 
                loading: false, 
            })
        } catch (error) { 
            this.setState({ 
                loading: false, 
                error: true, 
            }); 
        }
    }

    render() {
        return (
            <section>
                <h1>GistContainer</h1> 
                <Search search={this.handleSearch}/>
            </section>     
        );
    }
}

export default GistContainer;