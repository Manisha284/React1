import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
    render() {
        console.log('pure component')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default Purecomp
