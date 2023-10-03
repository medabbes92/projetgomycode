import React from 'react'
import NavebarAdmin from '../../component/Navebar/NavebarAdmin'

const Admin = () => {

const Logout = ()=> {
    localStorage.removeItem("token")
    window.location.reload()
}

  return (
    <div>

<NavebarAdmin/>
        

        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <h1>Admin</h1>
        <button onClick={Logout}>Log Out</button>
   </div>
  )
}

export default Admin