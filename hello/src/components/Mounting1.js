import React, { Component } from 'react'

class Mounting1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
               message:'Bye Manisha' 
            })
        },5000)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Mounting1
