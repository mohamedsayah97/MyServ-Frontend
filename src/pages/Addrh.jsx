import React, { useState } from 'react'

const Addrh = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [addedUser, setAddedUser] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleAddUser = () => {
    if (mail && password) {
      const newUser = { 
        id: Date.now(),
        mail, 
        password: password.replace(/./g, '•')
      };
      setUsers([...users, newUser]);
      setAddedUser(newUser);
      setMail('');
      setPassword('');
      
      setSuccessMessage('Utilisateur ajouté avec succès !');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  }

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setDeleteMessage('Utilisateur supprimé avec succès !');
    setTimeout(() => {
      setDeleteMessage('');
    }, 3000);
  }

  const handleStartEditing = (user) => {
    setEditingUserId(user.id);
    setMail(user.mail);
    setPassword(''); // On vide le mot de passe pour la modification
  }

  const handleUpdateUser = () => {
    if (mail && editingUserId) {
      const updatedUsers = users.map(user => {
        if (user.id === editingUserId) {
          return { 
            ...user, 
            mail,
            password: password ? password.replace(/./g, '•') : user.password
          };
        }
        return user;
      });
      
      setUsers(updatedUsers);
      setEditingUserId(null);
      setMail('');
      setPassword('');
      
      setUpdateMessage('Utilisateur modifié avec succès !');
      setTimeout(() => {
        setUpdateMessage('');
      }, 3000);
    }
  }

  const handleCancelEditing = () => {
    setEditingUserId(null);
    setMail('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleUpdateUser();
    } else {
      handleAddUser();
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input 
          type='email' 
          placeholder='email' 
          className='border border-gray-300 rounded-md p-2' 
          value={mail}
          onChange={handleEmailChange}
          required
        />
        <br />
        <br />
        <input 
          type='password' 
          placeholder={editingUserId ? 'Nouveau mot de passe (laisser vide pour ne pas changer)' : 'password'} 
          className='border border-gray-300 rounded-md p-2'
          value={password}
          onChange={handlePasswordChange}
          required={!editingUserId}
        />
        <br />
        <br />
        <button 
          type="submit"
          className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 mr-2'
        >
          {editingUserId ? 'Mettre à jour' : 'Ajouter'}
        </button>
        
        {editingUserId && (
          <button
            type="button"
            onClick={handleCancelEditing}
            className='bg-gray-500 text-white rounded-md p-2 hover:bg-gray-600'
          >
            Annuler
          </button>
        )}
      </form>

      {/* Messages de statut */}
      {successMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      {deleteMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {deleteMessage}
        </div>
      )}
      {updateMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {updateMessage}
        </div>
      )}

      {addedUser && !editingUserId && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-bold">Dernier utilisateur ajouté :</h3>
          <p>Email: {addedUser.mail}</p>
          <p>Mot de passe: {addedUser.password}</p>
        </div>
      )}

      {users.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Liste des utilisateurs :</h3>
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="mt-2 p-3 bg-gray-100 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p>Email: {user.mail}</p>
                    <p>Mot de passe: {user.password}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStartEditing(user)}
                      className='bg-yellow-500 text-white rounded-md p-1 hover:bg-yellow-600'
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className='bg-red-500 text-white rounded-md p-1 hover:bg-red-600'
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Addrh