import React, { Fragment, useState } from 'react'

// Parent
function StateLifting() {
    const [val, setValue] = useState("New Value");
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div>StateLifting</div>
            <button onClick={e=>setToggle(!toggle)}>toggle</button>
            {toggle?<Child val={val} />:null}
        </>
    )
}


const Child = ({val}) => {

    return <h1>Child is {val}</h1>
}

export default StateLifting