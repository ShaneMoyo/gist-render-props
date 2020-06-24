import React, { Component } from 'react'; 

export default class Resource extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            loading: true, 
            error: false, 
            resource: null,
        }
    }
    
    async componentDidMount() { 
        const id = this.props.match.params.id;
        console.log('here')
        try { 
            const resource = await this.props.fetch(id); 
            console.log('resource: ', resource)
            this.setState({
                loading: false,  
                resource, 
            })
        } catch (error) { 
            this.setState({ 
                error: true,
                loading: false, 
            })
        }
    }

    render() { 
        return this.props.render(this.state); 
    }


}