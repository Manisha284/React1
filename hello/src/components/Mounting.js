import React, { Component } from 'react'

class Mounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Manisha'
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            message:props.name
        }
        
    }
    
    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Mounting
