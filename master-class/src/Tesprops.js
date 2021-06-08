import React, { Component } from 'react';
class Tesprops extends Component {
    state = { 
        book : "bagian dari props"
     }
    render() { 
        return ( <div>
            <h1>{this.props.name}</h1><br/>
            <h1>{this.props.rilis}</h1><br/>

            
        </div> );
    }
}
 
export default Tesprops;