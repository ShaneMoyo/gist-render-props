import React, { Component } from 'react';
import Gists from '../gists/gists' ; 
import Gist from '../gists/gist';
import github from '../../services/api'; 
import Resource from '../utils/Resource';
import Search from '../contexts/SearchContext';
import { Switch, Route } from 'react-router-dom'; 


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
        console.log('rendering GistContainer...')
       
        const { state: {loading, error, gists}, handleSearch } = this; 
        return (
            <section>
                <h1>Gists</h1> 
                <Switch> 
                    <Route path="/gist/:id"  component={Gist}/>   
                    <Route path="/" component={() => <Search.Provider value={this.handleSearch}><Gists loading={loading} error={error} gists={gists}/></Search.Provider>}/>
                </Switch> 
            </section>     
        );
    }
}

export default GistContainer;