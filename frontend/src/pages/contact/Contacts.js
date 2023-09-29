import React from 'react'
import ContactSucc from '../../component/ContactSucc/ContactSucc'
import './Contact.css'
import Facebook from '../../component/Facebook/Facebook'
import Login from '../../component/ContactSucc/Login'
const Contacts = () => {
  return (
    <div className='contact'>
      <div className='facebook'>
      <Facebook/>

      </div>
      
<div className='succersale'>
      <ContactSucc />
      </div>
      <Login/>
    </div>
  )
}

export default Contacts