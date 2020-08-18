import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
            <h1>portal Demo</h1>,
           document.getElementById('portalsroot')
    )
}
export default Portal
