import React from 'react'
import Nav from 'react-bootstrap/Nav';



import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navebar.css'

const Navebar = () => {
  return (
    <div>

<div className='nvbar'>
       
<img className='nvlogo' src='/images/logo.jpg' alt='logo'/>

       <div>

          <Nav className="me-auto">
          <Nav.Link href="/">Acceuil</Nav.Link>

           
            <NavDropdown title="Produits" id="basic-nav-dropdown">


            <Nav.Link href="/produit"> 
            Produits
            </Nav.Link>


            <Nav.Link href="/Irrigation"> 
            Irrigation
            </Nav.Link>
            <Nav.Link href="/Engrais"> 
            Engrais&Pesticides
            </Nav.Link>
            <Nav.Link href="/Machinisme"> 
            Machinisme
            </Nav.Link>
              
            </NavDropdown>


            <NavDropdown title="Services" id="basic-nav-dropdown">
              

              <Nav.Link href="/EtudeHydraulique"> 
            Etude Hydraulique
            </Nav.Link>

            <Nav.Link href="/Projets"> 
            Installation Projets GAG
            </Nav.Link>
            <Nav.Link href="/Assistance"> 
            Assistance Agronomique
            </Nav.Link>
              
            </NavDropdown>

            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
  
        </div>
        </div>
    </div>
  )
}

export default Navebar