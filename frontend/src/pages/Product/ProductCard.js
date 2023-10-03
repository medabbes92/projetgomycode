import React from "react";
import { Button, Card } from "react-bootstrap";

import { useState } from 'react';


import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { handleDelete } from "../../redux/action";
import { useDispatch, useSelector } from 'react-redux';



const ProductCard = ({ el, del }) => {
  
  const { admin} = useSelector(state => state.AdminReducer);
  const dispatch = useDispatch();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div style={{marginTop : "100px"}}>


      <Card style={{ width: "18rem", height: "600px", margin: "40px" }}>
        <Card.Img
          variant="top"
          src={el.img}
          style={{ height: "300px", border: "solid black 1px" }}
        />
        <Card.Body>
          <Card.Title>Nom :{el.nom}</Card.Title>

          <Card.Text style={{ height :"30px"}}>Size : {el.size}</Card.Text>
          <Card.Text style={{ height :"30px"}}>Puissance :{el.puissance}</Card.Text>
          <Card.Text style={{ height :"30px"}}>Categorie : {el.categorie}</Card.Text>
          <div style={{ marginLeft: "85px", marginBottom: "30px" }}>
          
          

        
          <Button style={{marginLeft:"-13px"}} variant="primary" onClick={handleShow}>
        Description
      </Button>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{el.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

           
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
              <Form.Control as="textarea" rows={8} value={el.description} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
          </div>
        </Card.Body>
        {/* {admin && ( */}
            <Button variant="danger" onClick={() => dispatch(handleDelete(el._id))}>
              Supprimer la carte
            </Button>
          {/* )} */}
      </Card>
    </div>
  );
};

export default ProductCard;