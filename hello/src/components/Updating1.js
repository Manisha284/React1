import React, { Component } from 'react'

class Updating1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            message:props.name
        }
    }
    changeOnClick(){
        this.setState({
            message:'Thank You'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeOnClick()}>change</button>
            </div>
        )
    }
}

export default Updating1
