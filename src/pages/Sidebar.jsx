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
        <ul>
          <li>
            <Link to="/dashboard/addrh">*Ajouter RH</Link>
          </li>
          <li>
            <Link to="/dashboard/suivirecruteur">*Suivi Entretien</Link>
          </li>
          <li>
            <Link to="/dashboard/suivirecruteur">*Suivi Recruteur</Link>
          </li>
          <li>
            <Link to="/dashboard/ajoutcandidat">*Ajouter Candidat</Link>
          </li>
          <li>
            <Link to="/dashboard">*Dashboard</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
