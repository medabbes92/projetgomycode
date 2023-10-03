
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acceuil from './pages/acceuil/Acceuil';
import Contacts from './pages/contact/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/Product/ProductList';
import EtudeHydraulique from './pages/EtudeHydraulique/EtudeHydraulique';
import Projets from './pages/Projets/Projets';
import Machinisme from './pages/Machinisme/Machinisme';
import Assistance from './pages/Assistance/Assistance';
import Engrais from './pages/Engrais/Engrais';
import Irrigation from './pages/Irrigation/Irrigation';

import Admin from './pages/PageAdmin/Admin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
  <Route path="/" element={<Acceuil />} />
  <Route path="/contact" element={<Contacts />} />
  <Route path="/produit" element={<ProductList />} />
  <Route path="/Irrigation" element={<Irrigation />} />
  <Route path="/Engrais" element={<Engrais />} />
  <Route path="/Machinisme" element={<Machinisme />} />
  <Route path="/EtudeHydraulique" element={<EtudeHydraulique />} />
  <Route path="/Projets" element={<Projets/>} />
  <Route path="/Assistance" element={<Assistance />} />
  <Route path="/PageAdmin" element={<Admin/>} />
 


</Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
