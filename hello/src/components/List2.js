import React from 'react'

function List2({persons}) {
    return (
        <div>
            <h1>my name is {persons.name} my id is {persons.id} im good at {persons.skill}</h1>
        </div>
    )
}

export default List2
