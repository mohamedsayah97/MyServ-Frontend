// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { instance } from "../../config/axios";

// // const Sidebar = () => {
// //   const navigate = useNavigate();

// // const logoutUser =  () => {
		
		  
// // 			localStorage.clear();
// // 			window.location.href = '/login';
		
// // 	};


// //   return (
// //     <aside>
// //       <div className="bg-sky-500/100 text-white p-4 h-screen flex flex-col">
// //         <h2>Menu</h2>
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <ul className="flex-grow">
// //           <li>
// //             <Link to="/dashboard/addrh">*Ajouter RH</Link>
// //           </li>
// //           <br />
       
// //           <li>
// //             <Link to="/dashboard/suivientretien">*Suivi Entretien</Link>
// //           </li>
// //           <br />
      
// //           <li>
// //             <Link to="/dashboard/suivirecruteur">*Suivi Recruteur</Link>
// //           </li>
// //           <br />
       
// //           <li>
// //             <Link to="/dashboard/ajoutcandidat">*Ajouter Candidat</Link>
// //           </li>
          
// //           <br />
      
// //           <li>
// //             <Link to="/dashboard">*Dashboard</Link>
// //           </li>
// //         </ul>

// //         {/* Bouton de déconnexion */}
// //         <button 
// //           onClick={logoutUser}
// //           className="mt-auto p-2 bg-red-500 hover:bg-red-600 rounded text-white"
// //         >
// //           Déconnexion
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // };

// // export default Sidebar;






// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   FiHome, 
//   FiUsers, 
//   FiUserPlus, 
//   FiBarChart2, 
//   FiLogOut, 
//   FiChevronDown, 
//   FiChevronUp,
//   FiDatabase,
//   FiShield,
//   FiBox,
//   FiCode,
//   FiCpu,
//   FiGlobe,
//   FiCloud
// } from "react-icons/fi";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [showTechDropdown, setShowTechDropdown] = useState(false);
//   const [activeItem, setActiveItem] = useState("");

//   const techOptions = [
//     { value: "admin_db", label: "Administrateur de base de données", icon: <FiDatabase className="text-rose-500" /> },
//     { value: "analyste_cyber", label: "Analyste CyberSécurité", icon: <FiShield className="text-rose-500" /> },
//     { value: "consultant_sap", label: "Consultant SAP", icon: <FiBox className="text-rose-500" /> },
//     { value: "dev_fullstack", label: "Développeur Full Stack", icon: <FiCode className="text-rose-500" /> },
//     { value: "ingenieur_ia", label: "Ingénieur en Intelligence Artificielle", icon: <FiCpu className="text-rose-500" /> },
//     { value: "ingenieur_reseau", label: "Ingénieur Réseau & Sécurité", icon: <FiGlobe className="text-rose-500" /> },
//     { value: "ingenieur_cloud", label: "Ingénieur Système & Cloud", icon: <FiCloud className="text-rose-500" /> }
//   ];

//   const handleNavigation = (path) => {
//     setActiveItem(path);
//     navigate(`/dashboard/${path}`);
//   };

//   const logoutUser = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <aside className="w-64 h-screen bg-gradient-to-b from-rose-50 to-rose-100 border-r border-rose-200 shadow-sm">
//       <div className="p-5 flex flex-col h-full">
//         {/* Logo/Titre */}
//         <div className="mb-10 px-4 py-3 bg-white/50 rounded-xl shadow-inner">
//           <h1 className="text-xl font-light text-rose-800 text-center">Talents<span className="font-medium">Finder</span></h1>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 space-y-2">
//           <button
//             onClick={() => handleNavigation("")}
//             className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
//           >
//             <FiHome className="mr-3 text-lg" />
//             <span>Tableau de bord</span>
//           </button>

//           <button
//             onClick={() => handleNavigation("addrh")}
//             className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "addrh" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
//           >
//             <FiUserPlus className="mr-3 text-lg" />
//             <span>Ajouter RH</span>
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => setShowTechDropdown(!showTechDropdown)}
//               className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeItem.includes("suivi") ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
//             >
//               <div className="flex items-center">
//                 <FiUsers className="mr-3 text-lg" />
//                 <span>Suivi Entretien</span>
//               </div>
//               {showTechDropdown ? <FiChevronUp /> : <FiChevronDown />}
//             </button>

//             {showTechDropdown && (
//               <div className="ml-8 mt-1 space-y-1 animate-fadeIn">
//                 {techOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     onClick={() => handleNavigation(option.value)}
//                     className={`w-full flex items-center p-2 pl-4 rounded-lg transition-all ${activeItem === option.value ? "bg-rose-300/30 text-rose-800 font-medium" : "hover:bg-rose-100/30 text-rose-600"}`}
//                   >
//                     <span className="mr-3">{option.icon}</span>
//                     <span className="text-left">{option.label}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => handleNavigation("suivirecruteur")}
//             className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "suivirecruteur" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
//           >
//             <FiUsers className="mr-3 text-lg" />
//             <span>Suivi Recruteur</span>
//           </button>

//           <button
//             onClick={() => handleNavigation("ajoutcandidat")}
//             className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "ajoutcandidat" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
//           >
//             <FiUserPlus className="mr-3 text-lg" />
//             <span>Ajouter Candidat</span>
//           </button>
//         </nav>

//         {/* Déconnexion */}
//         <button
//           onClick={logoutUser}
//           className="mt-auto flex items-center p-3 rounded-xl text-rose-600 hover:bg-rose-100/50 transition-all group"
//         >
//           <FiLogOut className="mr-3 text-lg group-hover:rotate-180 transition-transform" />
//           <span>Déconnexion</span>
//         </button>
//       </div>

//       {/* Style global */}
//       <style>{`
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiHome, 
  FiUsers, 
  FiUserPlus, 
  FiBarChart2, 
  FiLogOut, 
  FiChevronDown, 
  FiChevronUp,
  FiDatabase,
  FiShield,
  FiBox,
  FiCode,
  FiCpu,
  FiGlobe,
  FiCloud
} from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const techOptions = [
    { value: "admindb", label: "Administrateur de base de données", icon: <FiDatabase className="text-rose-500" /> },
    { value: "analyste_cyber_securite", label: "Analyste CyberSécurité", icon: <FiShield className="text-rose-500" /> },
    { value: "erp", label: "Consultant SAP", icon: <FiBox className="text-rose-500" /> },
    { value: "full_stack", label: "Développeur Full Stack", icon: <FiCode className="text-rose-500" /> },
    { value: "inteligence_artificiel", label: "Ingénieur en Intelligence Artificielle", icon: <FiCpu className="text-rose-500" /> },
    { value: "reseau", label: "Ingénieur Réseau & Sécurité", icon: <FiGlobe className="text-rose-500" /> },
    { value: "cloud", label: "Ingénieur Système & Cloud", icon: <FiCloud className="text-rose-500" /> }
  ];

  // const userRole = localStorage.getItem("userRole") || "RH";

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(`/dashboard/${path}`);
  };

  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside 
      className={`h-screen bg-gradient-to-b from-rose-50 to-rose-100 border-r border-rose-200 shadow-sm transition-all duration-300 ease-in-out ${isExpanded ? "w-72" : "w-20"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-5 flex flex-col h-full overflow-hidden">
        {/* Logo/Titre - Seul élément qui change complètement */}
        <div className={`mb-10 px-4 py-3 bg-white/50 rounded-xl shadow-inner transition-all ${isExpanded ? "opacity-100" : "opacity-0 w-0 h-0 p-0"}`}>
          <h1 className="text-xl font-light text-rose-800 text-center">Talents<span className="font-medium">Finder</span></h1>
        </div>

        {/* Version réduite du logo */}
        {!isExpanded && (
          <div className="mb-10 flex justify-center">
            <div className="w-10 h-10 bg-white/50 rounded-xl shadow-inner flex items-center justify-center">
              <span className="text-rose-800 font-medium">TF</span>
            </div>
          </div>
        )}

        {/* Menu */}
        <nav className="flex-1 space-y-2">
          <button
            onClick={() => handleNavigation("")}
            className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
          >
            <FiHome className={`text-lg ${isExpanded ? "mr-3" : "mx-auto"}`} />
            {isExpanded && <span>Tableau de bord</span>}
          </button>
          {/* Seulement visible pour les admins */}
        {/* {userRole === "admin" && ( */}
          <button
            onClick={() => handleNavigation("addrh")}
            className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "addrh" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
          >
            <FiUserPlus className={`text-lg ${isExpanded ? "mr-3" : "mx-auto"}`} />
            {isExpanded && <span>Ajouter RH</span>}
          </button>
        {/* )} */}
          <div className="relative">
            <button
              onClick={() => setShowTechDropdown(!showTechDropdown)}
              className={`w-full flex items-center ${isExpanded ? "justify-between" : "justify-center"} p-3 rounded-xl transition-all ${activeItem.includes("suivi") ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
            >
              <div className="flex items-center">
                <FiUsers className={`text-lg ${isExpanded ? "mr-3" : ""}`} />
                {isExpanded && <span>Suivi Entretien</span>}
              </div>
              {isExpanded && (showTechDropdown ? <FiChevronUp /> : <FiChevronDown />)}
            </button>

            {showTechDropdown && isExpanded && (
              <div className="ml-8 mt-1 space-y-1 animate-fadeIn">
                {techOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleNavigation(option.value)}
                    className={`w-full flex items-center p-2 pl-4 rounded-lg transition-all ${activeItem === option.value ? "bg-rose-300/30 text-rose-800 font-medium" : "hover:bg-rose-100/30 text-rose-600"}`}
                  >
                    <span className="mr-3">{option.icon}</span>
                    <span className="text-left">{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
            {/* Seulement visible pour les admins */}
         {/* {userRole === "admin" && ( */}
          <button
            onClick={() => handleNavigation("suivirecruteur")}
            className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "suivirecruteur" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
          >
            <FiUsers className={`text-lg ${isExpanded ? "mr-3" : "mx-auto"}`} />
            {isExpanded && <span>Suivi Recruteur</span>}
          </button>
         {/* )} */}
          <button
            onClick={() => handleNavigation("ajoutcandidat")}
            className={`w-full flex items-center p-3 rounded-xl transition-all ${activeItem === "ajoutcandidat" ? "bg-rose-200/70 text-rose-800" : "hover:bg-rose-100/50 text-rose-600"}`}
          >
            <FiUserPlus className={`text-lg ${isExpanded ? "mr-3" : "mx-auto"}`} />
            {isExpanded && <span>Ajouter Candidat</span>}
          </button>
        </nav>

        {/* Déconnexion */}
        <button
          onClick={logoutUser}
          className="mt-auto flex items-center p-3 rounded-xl text-rose-600 hover:bg-rose-100/50 transition-all group"
        >
          <FiLogOut className={`text-lg ${isExpanded ? "mr-3" : "mx-auto"} group-hover:rotate-180 transition-transform`} />
          {isExpanded && <span>Déconnexion</span>}
        </button>
      </div>

      {/* Style global */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;