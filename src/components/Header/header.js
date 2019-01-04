import React from 'react'
import {Component } from 'react'

import logo from '../../images/howneighborly-logo.png'

class header extends Component{

    constructor(props){
        super(props);

    }
    render(){
        return(
            <img src={logo} alt="how neighborly" />
        )
    }
}

export default header

