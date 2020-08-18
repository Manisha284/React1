import React, { Component } from 'react'

class Updating5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                message:'Thank you'
            })
        },2000)
    }
    componentDidUpdate(){
         document.getElementById("mydiv").innerHTML="The updated message is "+this.state.message
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div id="mydiv"></div>
            </div>
        )
    }
}

export default Updating5
