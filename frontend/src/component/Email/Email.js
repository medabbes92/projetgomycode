import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Email.css"
const Email = () => {
  return (
    <div className='email
    '>

<Form>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="number" placeholder="Entrer votre numéro de téléphone" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre email" />
        </Form.Group>
      </Row>
      



      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Objet</Form.Label>
          <Form.Control type="text" placeholder="objet"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Zone</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Gouvernorat</option>
            <option>Ariana</option> <option>Beja</option> <option>Ben Arous</option> <option>Bizerte</option> <option>Gabes</option>
            <option>Gafsa</option> <option>Gasserine </option> <option>Guebeli</option> <option>Jendouba</option> <option>Kairaouan</option> 
            <option>Kef</option> <option>Mahdia</option><option>Manouba</option> <option>Medenine</option>
             <option>Monastire</option> <option>Nabeul</option> <option>Sfax</option><option>Sidi Bouzid</option> <option>Siliana</option>
             <option>Sousse</option> <option>Tataouine</option> <option>Tozeur</option><option>Tunis</option> <option>Zaghouan</option>
          </Form.Select>
        </Form.Group>

       
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label >Message</Form.Label>
        <Form.Control style={{height:"180px"}} placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Email




