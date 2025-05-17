
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <aside>
//       <div className="bg-sky-500/100 text-white p-4 h-screen">
//         <h2>Menu</h2>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <ul>
//           <li>
//             <Link to="/dashboard/addrh">*Ajouter RH</Link>
//           </li>
//           <br />
       
//           <li>
//             <Link to="/dashboard/suivientretien">*Suivi Entretien</Link>
//           </li>
//           <br />
      
//           <li>
//             <Link to="/dashboard/suivirecruteur">*Suivi Recruteur</Link>
//           </li>
//           <br />
       
//           <li>
//             <Link to="/dashboard/ajoutcandidat">*Ajouter Candidat</Link>
            
//           </li>
          
//           <br />
      
//           <li>
//             <Link to="/dashboard">*Dashboard</Link>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;





import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../../config/axios";

const Sidebar = () => {
  const navigate = useNavigate();

const logoutUser =  () => {
		
		  
			localStorage.clear();
			window.location.href = '/login';
		
	};


  // const handleLogout = () => {
  //   // Ici vous pouvez ajouter toute logique de déconnexion nécessaire
  //   // comme effacer le token d'authentification, etc.
    
  //   // Redirection vers la page de login
  //   navigate("/login");
  // };

  return (
    <aside>
      <div className="bg-sky-500/100 text-white p-4 h-screen flex flex-col">
        <h2>Menu</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul className="flex-grow">
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

        {/* Bouton de déconnexion */}
        <button 
          onClick={logoutUser}
          className="mt-auto p-2 bg-red-500 hover:bg-red-600 rounded text-white"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;