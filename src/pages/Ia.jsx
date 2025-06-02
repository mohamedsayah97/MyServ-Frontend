import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrashAlt, FaPlus, FaFileAlt, FaEllipsisH } from 'react-icons/fa';

const AdminDb = () => {
  const [candidates, setCandidates] = useState([
  {
    id: 1,
    nom: "John",
    prenom: "Doe",
    dateEntretien: "2023-10-01",
    heureEntretien: "10:00",
    feedback: "Excellent communication skills.",
    commentaireRh: "Strong candidate with relevant experience.",
    Recruteur: "Jane Smith",
    lienCompteRendu: "http://example.com/compte-rendu-1"
  },
  {
    id: 2,
    nom: "Jony",
    prenom: "Doer",
    dateEntretien: "2023-09-01",
    heureEntretien: "10:00",
    feedback: "Excellent communication skills.",
    commentaireRh: "Strong candidate with relevant experience.",
    Recruteur: "test test",
    lienCompteRendu: "http://example.com/compte-rendu-2"
  },
  {
    id: 3,
    nom: "test",
    prenom: "test",
    dateEntretien: "2023-09-01",
    heureEntretien: "10:00",
    feedback: "Excellent communication skills.",
    commentaireRh: "Strong candidate with relevant experience.",
    Recruteur: "test test",
    lienCompteRendu: "http://example.com/compte-rendu-3"
  }
]);
  useEffect(() => {
    fetch('http://localhost:5173/candidate')
    .then((res) => res.json())
    .then((data) => 
      setCandidates(data)).catch((err)=>
      console.log(err.message))
    
  }, [])
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Administrateur Base de Données</h2>
        <Link 
          to="/dashboard/create_candidat" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          <FaPlus className="text-sm" /> Ajouter Candidat
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Entretien</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commentaire RH</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recruteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compte Rendu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plus</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
   {//start mapping candidates
            candidates && candidates.map((item) => (
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{item.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.prenom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.dateEntretien}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.heureEntretien}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.feedback}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.commentaireRh}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Recruteur}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link 
                    to="https://example.com/cr1" 
                    target="_blank"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <FaFileAlt className="text-blue-500" /> {item.lienCompteRendu}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Link 
                      to="/dashboard/view_candidat/1" 
                      className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      title="Voir détails"
                    >
                      <FaEye size={16} />
                    </Link>
                    <Link 
                      to="/dashboard/edit_candidat/1" 
                      className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                      title="Modifier"
                    >
                      <FaEdit size={16} />
                    </Link>
                    <button 
                      className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition-colors"
                      title="Supprimer"
                    >
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <FaEllipsisH size={16} />
                  </button>
                </td>
              </tr>
            ))
              
} 
           
                 
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDb;