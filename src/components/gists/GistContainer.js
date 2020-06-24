import React, { Component } from 'react';
import Search from './Search'; 
import Gists from './Gists'; 
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
            console.log('gistsss: ', gists); 
            this.setState({
                gists, 
                loading: false, 
            }); 
        } catch (error) { 
            this.setState({ 
                loading: false, 
                error: true, 
            }); 
        }
    }

    render() {
        const { loading, error, gists } = this.state; 
        return (
            <section>
                <h1>Gists</h1> 
                <Search search={this.handleSearch} loading={loading} error={error}/>
                <Gists gists={gists}/>
            </section>     
        );
    }
}

export default GistContainer;