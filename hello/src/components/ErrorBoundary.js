import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Error:false
        }
    }
    

    static getDerivedStateFromError(error){
        return{
            Error:true
        }
    }
    render() {
       if(this.state.Error){
           return <h1>Something went wrong</h1>
       }
       return this.props.children
    }
}

export default ErrorBoundary
