import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'manisha'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                message:'manisha'
            })
        },2000)
    }
    render() {
        console.log("Pure")
        return (
            <div>
                 Pure {this.state.message}
            </div>
        )
    }
}

export default Pure
