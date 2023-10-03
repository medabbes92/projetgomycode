import React from 'react'
import ContactSucc from '../../component/ContactSucc/ContactSucc'
import './Contact.css'
import Facebook from '../../component/Facebook/Facebook'
import Login from '../../component/ContactSucc/Login'
import Navebar from '../../component/Navebar/Navebar'
import MapContainer from '../../component/mapContainer/mapContainer'
import Email from '../../component/Email/Email'

const Contacts = () => {
  return (
    <div className='contact'>
      <Navebar />
      <div className='facebook'>
      <Facebook/>


      </div>  
      <Email/>
      
<div className='succersale'>
      <ContactSucc />
      </div>
      <Login/>
      <MapContainer/>
    </div>
  )
}

export default Contacts