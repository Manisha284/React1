import React, { Component } from 'react'

class Regular extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                message:'sam'
            })
        },2000)
    }
    
    render() {
        console.log("Regular")
        return (
            <div>
                Regular {this.state.message}
            </div>
        )
    }
}

export default Regular
