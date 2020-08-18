import React from 'react'

function List() {
    const names=['manisha','mani','sam']
    const name=names.map(nam=><h1>{nam}</h1>)
    return (
        <div>
            {name}
        </div>
    )
}

export default List

