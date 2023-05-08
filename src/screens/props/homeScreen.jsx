import React, { Fragment } from 'react'

function HomeScreen({ user, handleResetUser }) {
  return (
    <Fragment>
      <h1>{user?.name ?? "Guest User"}</h1>
      <h1>{user?.age ?? "Age"}</h1>
      <button className='btn btn-sm btn-danger' onClick={e => handleResetUser()}>Reset Name</button>
    </Fragment>
  )
}

export default HomeScreen