import React, { Component } from 'react';
import Gists from '../gists/gists' ; 
import github from '../../services/api'; 


class GistContainer extends Component {
    state = { 
        gists: [],
        loading: false, 
        error: false, 
     }

    handleSearch = async username => { 
        this.setState({ 
            loading: true, 
            error: false, 
        }); 
        try { 
            const gists = await github.getGistsByUsername(username); 
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
                {/* <Search search={this.handleSearch} loading={loading} error={error}/>
                <GistList gists={gists}/> */}
                <Gists search={this.handleSearch} loading={loading} error={error} gists={gists}/>
            </section>     
        );
    }
}

export default GistContainer;