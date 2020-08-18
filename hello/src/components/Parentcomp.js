import React, { Component } from 'react'
import Regularcomp from './Regularcomp.js'
import Purecomp from './Purecomp.js'

class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:'Manisha'
            })
        },1000)
    }
    
    render() {
        console.log('*********Parent component**********')
        return (
            <div>
                Parent Component 
                <Regularcomp name={this.state.name}/>
                <Purecomp name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcomp
