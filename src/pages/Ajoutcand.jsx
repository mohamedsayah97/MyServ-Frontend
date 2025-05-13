import React, { useState } from 'react'

const Ajoutcand = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [poste, setPoste] = useState('');
  const [cv, setCv] = useState(null); // Changed to null for file input
  const [candidates, setCandidates] = useState([]); // Added to store candidates
  const [successMessage, setSuccessMessage] = useState('');

  const handleNomChange = (e) => {
    setName(e.target.value);
  }

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handlePostChange = (e) => { // Fixed typo in function name
    setPoste(e.target.value);
  }

  const handleCvChange = (e) => {
    setCv(e.target.files[0]); // For file input, we need to access files[0]
  }

  const handleAddUser = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    if (name && lastname && date && time && poste && cv) {
      const newCandidate = {
        id: Date.now(), // Fixed: Date.now() not date.now()
        name,
        lastname,
        date,
        time,
        poste,
        cvName: cv.name // Store the file name
      };
      
      setCandidates([...candidates, newCandidate]);
      setName('');
      setLastname('');
      setDate('');
      setTime('');
      setPoste('');
      setCv(null);
      
      setSuccessMessage('Candidat ajouté avec succès !');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ajout candidat</h2>
      <p className="mb-4">Données du candidat</p>
      
      <form onSubmit={handleAddUser}> {/* Use onSubmit on form instead of button click */}
        <input 
          type='text' 
          value={name}
          placeholder='Nom' 
          onChange={handleNomChange}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          required
        />
        
        <input 
          type='text'
          value={lastname} 
          placeholder='Prénom' 
          onChange={handleLastnameChange}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          required
        />
        
        <input 
          type='date'
          value={date} 
          onChange={handleDateChange}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          required
        />
        
        <input 
          type='time' 
          value={time}
          onChange={handleTimeChange}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          required
        />
        
        <select
          value={poste}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          onChange={handlePostChange}
          required
        >
          <option value="">Choisissez le poste</option>
          <option value="Développeur">Développeur</option>
          <option value="Designer">Designer</option>
          <option value="Chef de projet">Chef de projet</option>
        </select>
        
        <input 
          type='file' 
          onChange={handleCvChange}
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
          accept=".pdf,.doc,.docx" // Specify accepted file types
          required
        />
        
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}
        
        <button
          type="submit"
          className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
        >
          Ajouter
        </button>
      </form>

      {/* Display list of candidates */}
      {candidates.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold mb-2">Liste des candidats :</h3>
          <ul className="space-y-4">
            {candidates.map((candidate) => (
              <li key={candidate.id} className="p-4 border rounded-md">
                <p><strong>Nom et prénom :</strong> {candidate.name} {candidate.lastname}</p>
                <p><strong>Date :</strong> {candidate.date} à {candidate.time}</p>
                <p><strong>Poste :</strong> {candidate.poste}</p>
                <p><strong>CV :</strong> {candidate.cvName}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Ajoutcand