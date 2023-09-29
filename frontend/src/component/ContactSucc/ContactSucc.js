import React from 'react';
import Table from 'react-bootstrap/Table';

const ContactSucc = () => {
  const succursales = [
    {
      nom: 'Siege',
      telephone: '74 669 222',
      adresse: 'Route Gremda Km 8.5',
      gouvernorat: 'Sfax',
    },
    {
      nom: 'Succersale Matar',
      telephone: '74 685 000',
      adresse: 'Route Matar Km 10',
      gouvernorat: 'Sfax',
    },
    {
      nom: 'Succursale Regueb',
      telephone: '39 351 766',
      adresse: 'Route Mezouna km 8',
      gouvernorat: 'Sidi Bouzid',
    },
    {
      nom: 'Succursale Moknine',
      telephone: '73 438 222',
      adresse: '987 Rue de la Succursale Moknine',
      gouvernorat: 'Monastir',
    },
  ];

  return (
    <div>
      <h2>Nos Points de Vente </h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Gouvernorat</th>
          </tr>
        </thead>
        <tbody>
          {succursales.map((succursale, index) => (
            <tr key={index}>
              <td>{succursale.nom}</td>
              <td>{succursale.telephone}</td>
              <td>{succursale.adresse}</td>
              <td>{succursale.gouvernorat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactSucc;
