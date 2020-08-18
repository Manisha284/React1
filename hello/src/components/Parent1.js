import React, { Component } from 'react'
import Memo from './Memo.js'

class Parent1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                message:'Manisha'
            })
        },2000)
    }
    
    render() {
        console.log('parent component')
        return (
            <div>
                Parent component
                <Memo name={this.state.message} />
            </div>
        )
    }
}

export default Parent1
