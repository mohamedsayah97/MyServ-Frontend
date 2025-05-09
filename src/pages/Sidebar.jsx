import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="bg-sky-500/100 text-white p-4 h-screen">
        <h2>Menu</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul>
          <li>
            <Link to="/dashboard/addrh">*Ajouter RH</Link>
          </li>
          <br />
       
          <li>
            <Link to="/dashboard/suivientretien">*Suivi Entretien</Link>
          </li>
          <br />
      
          <li>
            <Link to="/dashboard/suivirecruteur">*Suivi Recruteur</Link>
          </li>
          <br />
       
          <li>
            <Link to="/dashboard/ajoutcandidat">*Ajouter Candidat</Link>
            
          </li>
          
          <br />
      
          <li>
            <Link to="/dashboard">*Dashboard</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
