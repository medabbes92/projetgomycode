import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Print";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Icône de localisation
import "./Facebook.css"; // Assurez-vous d'ajouter le fichier CSS approprié pour le style

const Facebook = () => {
  const email = "espacebioeco.commercial@gmail.com"; // Votre adresse e-mail
  const phoneNumber = "74 669 222	"; // Numéro de téléphone
  const faxNumber = "74 685 000"; // Numéro de fax
  const address = "Route Gremda Km 8.5 Sfax,Tunisie"; // Adresse de la société

  return (
    <div className="contact-bar">
      <div className="icon">
        <LocationOnIcon
          className="location-icon"
          style={{ fontSize: "30px" }}
        />
        <span>{address}</span>
      </div>
      <a href="https://www.facebook.com/profile.php?id=100031704746916" target="_blank" rel="noopener noreferrer">
        <div className="icon">
          <FacebookIcon
            className="facebook-icon"
            style={{ fontSize: "30px", transition: "color 0.3s ease" }}
          />
        </div>
      </a>
      <div className="icon">
        <EmailIcon />
        <span>{email}</span>
      </div>
      <div className="icon">
        <PhoneIcon />
        <span>{phoneNumber}</span>
      </div>
      <div className="icon">
        <FaxIcon />
        <span>{faxNumber}</span>
      </div>
    </div>
  );
};

export default Facebook;



