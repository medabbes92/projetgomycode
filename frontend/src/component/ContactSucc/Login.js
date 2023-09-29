import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../../redux/action';
import { Navigate } from 'react-router-dom';



const Login = () => {

    const { loading} = useSelector(state => state.AdminReducer);
   

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //-------------------------------------------------

const dispatch=useDispatch()
 const [email, setEmail] = useState("")
 
 const [password, setPassword] = useState("")

 const handleSubmit=(e)=>{
    e.preventDefault()
    const admin = {email,password} 
    dispatch(loginAdmin(admin))
    
 }

  return (
    <div>
        
 {
      loading ? <h1>Loading</h1> : localStorage.getItem("token") ? <Navigate to={"/contact"}/> : 
      
      
      <div>   <Button variant="primary" onClick={handleShow}>
        Connexion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="**********"
                autoFocus
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
          <Button variant="primary" onClick={handleClose}
          type='submit'>
           Connexion
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal> 
      </div>
}
    </div>
  )
}

export default Login