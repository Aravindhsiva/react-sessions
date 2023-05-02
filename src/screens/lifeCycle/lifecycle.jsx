import React, { Fragment, useEffect, useState } from 'react'

function LifeCycleComp() {

    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((res) => {
                setList(res)
            })
    }, [])

    return (
        <>
            <div>LifeCycleComp</div>
            {list.map(l => {
                return <Fragment key={l.id}>
                    <h1>{l.title}</h1>
                    <com />
                </Fragment>
            })}
        </>
    )
}

const com = () => {
    return <><p>{l.body}</p>
        <p>{l.body}</p></>
}


/*
Screen :
    get list of values
    [] [] [] [] []
    [] [] [] [] []
    [] [] [] [] []
    [] [] [] [] []

*/

export default LifeCycleComp