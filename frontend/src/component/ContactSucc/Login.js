import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../../redux/action';

const Login = () => {
  const { loading, admin } = useSelector((state) => state.AdminReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Vérifiez s'il y a une session d'administrateur dans le stockage local lors du chargement du composant
  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    if (storedAdmin) {
      dispatch(loginAdmin(storedAdmin));
    }
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminData = { email, password };

    // Dispatchez l'action pour vous connecter en tant qu'administrateur
    dispatch(loginAdmin(adminData));

    // Stockez les informations de connexion dans le stockage local
    localStorage.setItem('admin', JSON.stringify(adminData));

    // Fermez le modal
    handleClose();
  };

  return (
    <div>
      {admin ? (
        // Si l'utilisateur est connecté en tant qu'admin, affichez un message de bienvenue.
        <div>
          <h1>Bienvenue, {admin.name}!</h1>
          {/* Ajoutez ici le contenu que vous souhaitez afficher pour l'admin connecté */}
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté en tant qu'admin, affichez le bouton de connexion.
        <div>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <Button variant="primary" onClick={handleShow}>
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="**********"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="primary" type="submit">
                        Connexion
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;

