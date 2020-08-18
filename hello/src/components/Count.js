import React, { Component } from 'react'

class Count extends Component {
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
                <button onClick={this.clickHandler}>click {this.state.count} times</button>
            </div>
        )
    }
}

export default Count
