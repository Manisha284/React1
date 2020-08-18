import React, { Component } from 'react'

class Updating2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Manisha'
        }
    }
    shouldComponentUpdate(){
        return true
    }
    changeMessage(){
        this.setState({
           message:'Thank you'
        })
    }
   
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>click</button>
            </div>
        )
    }
}

export default Updating2
