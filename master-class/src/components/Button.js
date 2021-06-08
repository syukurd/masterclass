import React from 'react';
import '../style/mystyle.css'
const Button = props => {
    return(
        <button className ={`btn-${props.variant}`}>{props.name}</button>
    )
}

export default Button

