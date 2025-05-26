// import React, { useState } from 'react'
// import { instance } from '../../config/axios';
// // import { useNavigate } from 'react-router-dom';


// const Addrh = () => {
//   const [nom, setNom] = useState('');
//   const [prenom, setPrenom] = useState('');
//   const [mail, setMail] = useState('');
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState([]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [deleteMessage, setDeleteMessage] = useState('');
//   const [updateMessage, setUpdateMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   // const navigate = useNavigate();
//   const handleNomChange = (e) => {
//     setNom(e.target.value);
//   }

//   const handlePrenomChange = (e) => {
//     setPrenom(e.target.value);
//   }

//   const handleEmailChange = (e) => {
//     setMail(e.target.value);
//     setErrorMessage(''); // Efface le message d'erreur quand l'utilisateur modifie l'email
//   }

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   }

//   const isEmailExists = (email, currentUserId = null) => {
//     return users.some(user => user.mail === email && user.id !== currentUserId);
//   }

//   const handleAddUser = () => {
//     if (nom && prenom && mail && password) {
//       if (isEmailExists(mail)) {
//         setErrorMessage('Cet email existe déjà !');
//         setTimeout(() => {
//           setErrorMessage('');
//         }, 3000);
//         return;
//       }

//       const newUser = { 
//         id: Date.now(),
//         nom,
//         prenom,
//         mail, 
//         password: password.replace(/./g, '•')
//       };
//       setUsers([...users, newUser]);
//       setNom('');
//       setPrenom('');
//       setMail('');
//       setPassword('');
      
//       setSuccessMessage('Utilisateur ajouté avec succès !');
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 3000);
//     }
//   }

//   const handleDeleteUser = (userId) => {
//     const updatedUsers = users.filter(user => user.id !== userId);
//     setUsers(updatedUsers);
//     setDeleteMessage('Utilisateur supprimé avec succès !');
//     setTimeout(() => {
//       setDeleteMessage('');
//     }, 3000);
//   }

//   const handleStartEditing = (user) => {
//     setEditingUserId(user.id);
//     setNom(user.nom);
//     setPrenom(user.prenom);
//     setMail(user.mail);
//     setPassword('');
//   }

//   const handleUpdateUser = () => {
//     if (nom && prenom && mail && editingUserId) {
//       if (isEmailExists(mail, editingUserId)) {
//         setErrorMessage('Cet email existe déjà !');
//         setTimeout(() => {
//           setErrorMessage('');
//         }, 3000);
//         return;
//       }

//       const updatedUsers = users.map(user => {
//         if (user.id === editingUserId) {
//           return { 
//             ...user, 
//             nom,
//             prenom,
//             mail,
//             password: password ? password.replace(/./g, '•') : user.password
//           };
//         }
//         return user;
//       });
      
//       setUsers(updatedUsers);
//       setEditingUserId(null);
//       setNom('');
//       setPrenom('');
//       setMail('');
//       setPassword('');
      
//       setUpdateMessage('Utilisateur modifié avec succès !');
//       setTimeout(() => {
//         setUpdateMessage('');
//       }, 3000);
//     }
//   }

//   const handleCancelEditing = () => {
//     setEditingUserId(null);
//     setNom('');
//     setPrenom('');
//     setMail('');
//     setPassword('');
//     setErrorMessage('');
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await instance.post('/users/create', { 
//         nom,
//         prenom,
//         mail,
//         password},
//     //     {
//     //   withCredentials: true
//     // }
//   );
//          localStorage.setItem('createToken', res.data.createToken);

//       window.location.href='/dashboard/addrh';
//       //  navigate('/dashboard/addrh');
//     } catch (error) {
//       console.log(error);
      
//     }
//     // setErrorMessage(''); // Efface les erreurs précédentes
//     // if (editingUserId) {
//     //   handleUpdateUser();
//     // } else {
//     //   handleAddUser();
//     // }
//   }

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit}>
//         <input 
//           type='text' 
//           placeholder='Nom' 
//           className='border border-gray-300 rounded-md p-2' 
//           value={nom}
//           onChange={handleNomChange}
//           required
//         />
//         <br />
//         <br />
//         <input 
//           type='text' 
//           placeholder='Prénom' 
//           className='border border-gray-300 rounded-md p-2' 
//           value={prenom}
//           onChange={handlePrenomChange}
//           required
//         />
//         <br />
//         <br />
//         <input 
//           type='email' 
//           placeholder='email' 
//           className='border border-gray-300 rounded-md p-2' 
//           value={mail}
//           onChange={handleEmailChange}
//           required
//         />
//         <br />
//         <br />
//         <input 
//           type='password' 
//           placeholder={editingUserId ? 'Nouveau mot de passe (laisser vide pour ne pas changer)' : 'password'} 
//           className='border border-gray-300 rounded-md p-2'
//           value={password}
//           onChange={handlePasswordChange}
//           required={!editingUserId}
//         />
//         <br />
//         <br />
//         <button 
//           type="submit"
//           className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 mr-2'
//         >
//           {editingUserId ? 'Mettre à jour' : 'Ajouter'}
//         </button>
        
//         {editingUserId && (
//           <button
//             type="button"
//             onClick={handleCancelEditing}
//             className='bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600'
//           >
//             Annuler
//           </button>
//         )}
//       </form>

//       {/* Messages d'erreur */}
//       {errorMessage && (
//         <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
//           {errorMessage}
//         </div>
//       )}

//       {/* Messages de succès */}
//       {successMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//           {successMessage}
//         </div>
//       )}
//       {deleteMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//           {deleteMessage}
//         </div>
//       )}
//       {updateMessage && (
//         <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
//           {updateMessage}
//         </div>
//       )}

//       {users.length > 0 && (
//         <div className="mt-4">
//           <h3 className="font-bold">Liste des utilisateurs :</h3>
//           <ul className="space-y-2">
//             {users.map((user) => (
//               <li key={user.id} className="mt-2 p-3 bg-gray-100 rounded-md">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p>Nom: {user.nom}</p>
//                     <p>Prénom: {user.prenom}</p>
//                     <p>Email: {user.mail}</p>
//                     <p>Mot de passe: {user.password}</p>
//                   </div>
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => handleStartEditing(user)}
//                       className='bg-yellow-500 text-white rounded-md p-1 hover:bg-yellow-600'
//                     >
//                       Modifier
//                     </button>
//                     <button
//                       onClick={() => handleDeleteUser(user.id)}
//                       className='bg-red-500 text-white rounded-md p-1 hover:bg-red-600'
//                     >
//                       Supprimer
//                     </button>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Addrh


import React, { useState } from 'react';
import { instance } from '../../config/axios';

const Addrh = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNomChange = (e) => setNom(e.target.value);
  const handlePrenomChange = (e) => setPrenom(e.target.value);
  const handleEmailChange = (e) => {
    setMail(e.target.value);
    setErrorMessage('');
  };
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isEmailExists = (email, currentUserId = null) =>
    users.some(user => user.mail === email && user.id !== currentUserId);

  const handleAddUser = () => {
    if (nom && prenom && mail && password) {
      if (isEmailExists(mail)) {
        setErrorMessage('Cet email existe déjà !');
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }

      const newUser = {
        id: Date.now(),
        nom,
        prenom,
        mail,
        password: password.replace(/./g, '•')
      };

      setUsers([...users, newUser]);
      setNom('');
      setPrenom('');
      setMail('');
      setPassword('');
      setSuccessMessage('Utilisateur ajouté avec succès !');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setDeleteMessage('Utilisateur supprimé avec succès !');
    setTimeout(() => setDeleteMessage(''), 3000);
  };

  const handleStartEditing = (user) => {
    setEditingUserId(user.id);
    setNom(user.nom);
    setPrenom(user.prenom);
    setMail(user.mail);
    setPassword('');
  };

  const handleUpdateUser = () => {
    if (nom && prenom && mail && editingUserId) {
      if (isEmailExists(mail, editingUserId)) {
        setErrorMessage('Cet email existe déjà !');
        setTimeout(() => setErrorMessage(''), 3000);
        return;
      }

      const updatedUsers = users.map(user =>
        user.id === editingUserId
          ? {
              ...user,
              nom,
              prenom,
              mail,
              password: password ? password.replace(/./g, '•') : user.password
            }
          : user
      );

      setUsers(updatedUsers);
      setEditingUserId(null);
      setNom('');
      setPrenom('');
      setMail('');
      setPassword('');
      setUpdateMessage('Utilisateur modifié avec succès !');
      setTimeout(() => setUpdateMessage(''), 3000);
    }
  };

  const handleCancelEditing = () => {
    setEditingUserId(null);
    setNom('');
    setPrenom('');
    setMail('');
    setPassword('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post('/users/create', {
        nom,
        prenom,
        mail,
        password
      });

      localStorage.setItem('createToken', res.data.createToken);
      window.location.href = '/dashboard/addrh';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          {editingUserId ? 'Modifier un utilisateur' : 'Ajouter un utilisateur'}
        </h2>

        <input
          type="text"
          placeholder="Nom"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={nom}
          onChange={handleNomChange}
          required
        />

        <input
          type="text"
          placeholder="Prénom"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={prenom}
          onChange={handlePrenomChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={mail}
          onChange={handleEmailChange}
          required
        />

        <input
          type="password"
          placeholder={
            editingUserId
              ? 'Nouveau mot de passe (laisser vide pour ne pas changer)'
              : 'Mot de passe'
          }
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={handlePasswordChange}
          required={!editingUserId}
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            {editingUserId ? 'Mettre à jour' : 'Ajouter'}
          </button>
          {editingUserId && (
            <button
              type="button"
              onClick={handleCancelEditing}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Annuler
            </button>
          )}
        </div>
      </form>

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md shadow">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md shadow">
          {successMessage}
        </div>
      )}
      {deleteMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md shadow">
          {deleteMessage}
        </div>
      )}
      {updateMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md shadow">
          {updateMessage}
        </div>
      )}

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Liste des utilisateurs</h3>
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-100 rounded-md shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">Nom: {user.nom}</p>
                  <p>Prénom: {user.prenom}</p>
                  <p>Email: {user.mail}</p>
                  <p>Mot de passe: {user.password}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStartEditing(user)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Addrh;
