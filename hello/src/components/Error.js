import React from 'react'

function Error({pername}) {
    if(pername==="Book")
    throw new Error("Not a name")
    return (
        <div>
            {pername}
        </div>
    )
}

export default Error
