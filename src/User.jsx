import React from 'react'

function User({uname,userAge,userEmail,userPhone}) {
  return (
    <div className='text-center text-primary'>
      <div>
        <h1>Name : {uname}</h1>
        <h1>Age :{userAge}</h1>
        <h1>Email :{userEmail}</h1>
        <h1>Phone :{userPhone}</h1>
      </div>
    </div>
  )
}

export default User
