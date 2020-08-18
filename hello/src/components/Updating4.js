import React, { Component } from 'react'

class Updating4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Welcome'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                message:'Thank you'
            })
        },2000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("mydiv1").innerHTML=
         "The before Message is "+prevState.message
    }
    componentDidUpdate(){
        document.getElementById("mydiv2").innerHTML=
        "The Updated message is "+this.state.message
    }
    
    render() {
        return (
            <div>
               <h1>{this.state.message}</h1> 
               <div id="mydiv1"></div>
               <div id="mydiv2"></div>
            </div>
        )
    }
}

export default Updating4
