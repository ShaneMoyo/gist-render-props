import React, { Component } from 'react';
import Gists from '../gists/gists' ; 
import Gist from '../gists/gist';
import github from '../../services/api'; 
import Resource from '../utils/Resource';
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
       
        const { state: {loading, error, gists}, handleSearch } = this; 
        return (
            <section>
                <h1>Gists</h1> 
                <Switch> 
                    <Route path="/gist/:id" render={(props) => {
                            return (
                                <Resource {...props} 
                                    fetch={github.getGistByid} 
                                    render={ data => <Gist data={data}/> } 
                                />
                            );
                        }}
                    />   
                    <Route path="/" component={() => <Gists search={handleSearch} loading={loading} error={error} gists={gists}/>}/>
                </Switch> 
            </section>     
        );
    }
}

export default GistContainer;