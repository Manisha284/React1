import React, { Component } from 'react'
import Children from './Children.js'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:'parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`i'm ${this.state.parentname}`)
    }
    
    render() {
        return (
            <div>
                <Children clickHandler={this.greetParent} />
            </div>
        )
    }
}

export default Parent
