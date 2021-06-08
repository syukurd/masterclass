import React from 'react';
import PropTypes from 'prop-types'

class Button extends React.Component {
   state = {
       tampil : "Syukur beriman jaya lawolo",
       text : ""
   }

   onClick = () => {
            this.setState({ tampil : this.state.text  });
            this.setState({ text : ""  });
   }

   change = e => {
       this.setState({ text : e.target.value  });
   }
    render() { 
        return ( 
            <div>
                <h1 style = {myStyle}>{this.state.tampil}</h1>
                <h2 className = "gelombang">Gelombang Kami</h2>
                <br/>
                <input type = "text" value = {this.state.text} onChange = {this.change}/>
                <button onClick = {this.onClick}>Change</button>
            </div>
            
         );
    }
}


const myStyle = {
    color : "red"
}

Button.propTypes = {
    color : PropTypes.string.isRequired
}
Button.defaultProps = {
    color : "red"
}
 
export default Button;