import React, { useState } from 'react';

const Dashboard = () => {
  const [tables, setTables] = useState([
    {
      id: 1,
      name: "Ali Bouait",
      date: "2023-07-06",
      feedback: "Non validé RH",
      comment: "Profil moyen, nul en anglais",
      recruiter: "Ali Bouait",
      status: "rejected"
    },
    {
      id: 2,
      name: "Ali Bouait",
      date: "2023-08-06",
      feedback: "Non validé tech",
      comment: "Profil moyen, timide un peu, problème de communication",
      recruiter: "Ali Bouait",
      status: "rejected"
    },
    {
      id: 3,
      name: "Ali Bouait",
      date: "0007-02-13",
      feedback: "Non validé RH",
      comment: "dégégd",
      recruiter: "Ali Bouait",
      status: "rejected"
    },
    {
      id: 4,
      name: "bouait ali",
      date: "2023-08-10",
      feedback: "En cours",
      comment: "",
      recruiter: "",
      status: "in-progress"
    }
  ]);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [poste, setPoste] = useState("");
  const [feedback, setFeedback] = useState("Feedback par défaut");
  const [comment, setComment] = useState("");
  const [cv, setCv] = useState(null);
  const [recruiter, setRecruiter] = useState("Admin Recruteur");
  const [successMessage, setSuccessMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingFeedback, setEditingFeedback] = useState("");
  const [editingComment, setEditingComment] = useState("");

  // Fonction pour gérer l'édition
  const handleEdit = (id, currentFeedback, currentComment) => {
    setEditingId(id);
    setEditingFeedback(currentFeedback);
    setEditingComment(currentComment);
  };

  // Fonction pour sauvegarder les modifications
  const handleSave = (id) => {
    setTables(tables.map(item => 
      item.id === id 
        ? { 
            ...item, 
            feedback: editingFeedback,
            comment: editingComment,
            status: editingFeedback.includes("Non validé") ? "rejected" : 
                   editingFeedback === "En cours" ? "in-progress" : 
                   editingFeedback === "Recruté" ? "hired" : "pending"
          } 
        : item
    ));
    setEditingId(null);
  };

  // Fonction pour annuler l'édition
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Fonction pour ajouter un nouveau candidat
  const handleAddUser = (e) => {
    e.preventDefault();
    if (name && lastname && date && time && poste && cv) {
      const newCandidate = {
        id: Date.now(),
        name: `${name} ${lastname}`,
        date: `${date} ${time}`,
        feedback,
        comment,
        recruiter,
        status: feedback.includes("Non validé") ? "rejected" : 
               feedback === "En cours" ? "in-progress" : 
               feedback === "Recruté" ? "hired" : "pending"
      };
      
      setTables([...tables, newCandidate]);
      // Réinitialiser les champs du formulaire
      setName("");
      setLastname("");
      setDate("");
      setTime("");
      setPoste("");
      setFeedback("Feedback par défaut");
      setComment("");
      setCv(null);
      setSuccessMessage("Candidat ajouté avec succès !");
      
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      alert("Veuillez remplir tous les champs obligatoires");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Suivi des entretiens</h1>
      
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Réseau & Sécurité</h2>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Nom & Prénom</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Date d'entretien</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Feedback</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Commentaire RH</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Recruteur</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (    
              <tr key={table.id}>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{table.name}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{table.date}</td>
                
                {/* Cellule Feedback - Modifiable */}
                <td className={`px-4 py-2 border-b text-sm ${
                  table.status === 'rejected' ? 'bg-red-50' : 
                  table.status === 'hired' ? 'bg-green-50' : 
                  'bg-blue-50'
                }`}>
                  {editingId === table.id ? (
                    <select
                      value={editingFeedback}
                      onChange={(e) => setEditingFeedback(e.target.value)}
                      className="border border-gray-300 rounded p-1 w-full"
                    >
                      <option value="Feedback par défaut">Feedback par défaut</option>
                      <option value="Validé RH">Validé RH</option>
                      <option value="Non validé RH">Non validé RH</option>
                      <option value="Validé technique">Validé technique</option>
                      <option value="Non validé technique">Non validé technique</option>
                      <option value="Recruté">Recruté</option>
                    </select>
                  ) : (
                    <span className={`${
                      table.status === 'rejected' ? 'text-red-700' : 
                      table.status === 'hired' ? 'text-green-700' : 
                      'text-blue-700'
                    }`}>
                      {table.feedback}
                    </span>
                  )}
                </td>
                
                {/* Cellule Commentaire - Modifiable */}
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {editingId === table.id ? (
                    <textarea
                      value={editingComment}
                      onChange={(e) => setEditingComment(e.target.value)}
                      className="border border-gray-300 rounded p-1 w-full"
                      rows="2"
                    />
                  ) : (
                    table.comment
                  )}
                </td>
                
                <td className="px-4 py-2 border-b text-sm text-gray-700">{table.recruiter}</td>
                
                {/* Cellule Actions */}
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {editingId === table.id ? (
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleSave(table.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        Sauvegarder
                      </button>
                      <button 
                        onClick={handleCancelEdit}
                        className="text-red-600 hover:text-red-800"
                      >
                        Annuler
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleEdit(table.id, table.feedback, table.comment)}
                      className="text-blue-500 hover:underline"
                    >
                      Modifier
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Formulaire d'ajout */}
        <form onSubmit={handleAddUser} className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Ajouter un nouveau candidat</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type='text'
                value={name}
                placeholder='Nom'
                onChange={(e) => setName(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-full'
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                type='text'
                value={lastname}
                placeholder='Prénom'
                onChange={(e) => setLastname(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-full'
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date d'entretien</label>
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-full'
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
              <input
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-full'
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Poste</label>
            <select
              value={poste}
              className='border border-gray-300 rounded-md p-2 w-full'
              onChange={(e) => setPoste(e.target.value)}
              required
            >
              <option value="">Choisissez le poste</option>
              <option value="Développeur">Développeur</option>
              <option value="Designer">Designer</option>
              <option value="Chef de projet">Chef de projet</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Feedback initial</label>
              <select
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-full'
              >
                <option value="Feedback par défaut">Feedback par défaut</option>
                <option value="Validé RH">Validé RH</option>
                <option value="Non validé RH">Non validé RH</option>
                <option value="Validé technique">Validé technique</option>
                <option value="Non validé technique">Non validé technique</option>
                <option value="Recruté">Recruté</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recruteur</label>
              <input
                type='text'
                value={recruiter}
                readOnly
                className='border border-gray-300 rounded-md p-2 w-full bg-gray-100'
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire initial</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className='border border-gray-300 rounded-md p-2 w-full'
              rows="3"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">CV (PDF, DOC)</label>
            <input
              type='file'
              onChange={(e) => setCv(e.target.files[0])}
              className='border border-gray-300 rounded-md p-2 w-full'
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {successMessage}
            </div>
          )}
          
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Ajouter Candidat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;