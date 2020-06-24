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
        try { 
            const resource = await this.props.fetch(); 
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