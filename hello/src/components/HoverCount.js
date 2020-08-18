import React, { Component } from 'react'

class HoverCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    clickHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
               <h1 onMouseOver={this.clickHandler}>Hover {this.state.count} times</h1> 
            </div>
        )
    }
}

export default HoverCount
