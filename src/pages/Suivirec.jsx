// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { instance } from '../../config/axios';

// const Suivirec = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await instance.get('/users/list');
//         setUsers(response.data.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const deleteUser = async (userId) => {
//     try {
//       await instance.delete(`/users/${userId}`);
//       setUsers(users.filter(user => user.id !== userId));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   }
//   const updateUser = async (userId, updatedData) => {
//     try { 
//       await instance.put(`/users/${userId}`, updatedData);
//       setUsers(users.map(user => (user.id === userId ? { ...user, ...updatedData } : user)));
//     } catch (error) {
//       console.error('Error updating user:', error); 
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Suivi Recruteur</h1>
//           <Link to="/dashboard/addrh" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
//             Ajouter Un Utilisateur
//           </button>
//           </Link>
//         </div>

//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mot de passe</th>
//                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {users.map((user,index) => (
//                 <tr key={index} className="hover:bg-gray-50 transition duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nom}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.prenom}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.mail}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">*******</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button onClick={() => updateUser(user._id, { nom: user.nom, prenom: user.prenom, mail: user.mail })}
//                     className="text-blue-600 hover:text-blue-900 font-medium cursor-pointer">Modifier</button>
//                     <button 
//                     onClick={() => deleteUser(user._id)}
//                     className="text-red-600 hover:text-red-900 font-medium ml-4 cursor-pointer">Supprimer</button>
//                   </td>
//                 </tr>
//                 ))}
                
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Suivirec;




import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { instance } from '../../config/axios';

const Suivirec = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get('/users/list');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await instance.delete(`/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  const startEditing = (userId) => {
    setEditingUserId(userId);
    setNewPassword('');
  }

  const cancelEditing = () => {
    setEditingUserId(null);
    setNewPassword('');
  }

  const updatePassword = async (userId) => {
    if (!newPassword) {
      alert('Veuillez entrer un nouveau mot de passe');
      return;
    }

    try {
      await instance.put(`/users/${userId}`, { password: newPassword });
      setUsers(users.map(user => 
        user.id === userId ? { ...user, password: newPassword } : user
      ));
      cancelEditing();
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Suivi Recruteur</h1>
          <Link to="/dashboard/addrh" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
              Ajouter Un Utilisateur
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mot de passe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.prenom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.mail}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {editingUserId === user._id ? (
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Nouveau mot de passe"
                          className="border rounded px-2 py-1 text-sm"
                        />
                      ) : (
                        '*******'
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                      {editingUserId === user._id ? (
                        <>
                          <button
                            onClick={() => updatePassword(user._id)}
                            className="text-green-600 hover:text-green-800 font-medium cursor-pointer mr-2"
                          >
                            Enregistrer
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="text-gray-600 hover:text-gray-800 font-medium cursor-pointer"
                          >
                            Annuler
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEditing(user._id)}
                            className="text-blue-600 hover:text-blue-900 font-medium cursor-pointer"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => deleteUser(user._id)}
                            className="text-red-600 hover:text-red-900 font-medium ml-4 cursor-pointer"
                          >
                            Supprimer
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suivirec;











 {/* Pagination (optionnel) */}
        {/* <div className="flex justify-between items-center mt-4 px-4 py-3 bg-white border-t border-gray-200 sm:px-6 rounded-b-lg">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Affichage de <span className="font-medium">1</span> à <span className="font-medium">2</span> sur <span className="font-medium">2</span> résultats
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  &larr;
                </a>
                <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  &rarr;
                </a>
              </nav>
            </div>
          </div>
        </div> */}