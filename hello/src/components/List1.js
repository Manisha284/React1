import React from 'react'
import List2 from './List2.js'

function List1() {
    const persons=[
        {
            name:'mani',
            id:523,
            skill:'react'
        },
        {
            name:'sam',
            id:555,
            skill:'vue'
        },
        {
            name:'manu',
            id:564,
            skill:'java'
        },
    ]
const personList=persons.map(persons=><List2 key={persons.name} persons={persons} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default List1
