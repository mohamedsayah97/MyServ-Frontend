import React, { useEffect, useState } from 'react'
import { instance } from '../../config/axios'

const Ajoutcand = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateEntretien: '',
    heureEntretien: '',
    recruteur: '',
    Spéciality: '', // Nouveau champ pour la spécialité
    feedback: 'En attente',
    lienCV: '',
    lien_compteRendu: '',
    commentaireRh: ''
  })

  const [cvFile, setCvFile] = useState(null)
  const [compteRenduFile, setCompteRenduFile] = useState(null)
  const [rh,setRh] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
 
  const handleCvChange = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === 'application/pdf' || 
                file.type === 'application/msword' || 
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setCvFile(file)
    } else {
      alert('Veuillez sélectionner un fichier PDF ou Word pour le CV')
      e.target.value = null
    }
  }

  const handleCompteRenduChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setCompteRenduFile(file)
    } else {
      alert('Veuillez sélectionner un fichier PDF pour le compte rendu')
      e.target.value = null
    }
  }
  const getRh = async() => {
    
    const res = await instance.get('/users/list')
    setRh(res.data.data)
    console.log(res.data.data)
    
  }
  useEffect(() => {
    getRh()
  }, [])
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
    const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
    const res = await instance.post(
            "/candidates/create",
             {
                ...formData,
                lienCV: cvFile ? cvFile.name : null, // Assuming you want to send the file name
                lien_compteRendu: compteRenduFile ? compteRenduFile.name : null // Assuming you want to send the file name
              
            },
              {
          headers: { Authorization: `Bearer ${token}` },
        });
           console.log("Candidate added:", res.data);
          if (formData.Spéciality=== 'IA') {
            window.location.href = '/dashboard/inteligence_artificiel';
          }
          

   } catch (error) {
     console.error('Erreur lors de l\'ajout du candidat:', error)
   
   }
    if (!formData.Spéciality) {
      alert('Veuillez sélectionner une spécialité')
      return
    }
    
    // Créer un FormData pour l'envoi au backend
    const formDataToSend = new FormData()
    
    // Ajouter les données du formulaire
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key])
    })
    
    // Ajouter les fichiers s'ils existent
    if (cvFile) formDataToSend.append('cv', cvFile)
    if (compteRenduFile) formDataToSend.append('compteRendu', compteRenduFile)
    
    // Ici vous ajouterez la logique pour envoyer les données au backend
    console.log('Données du formulaire:', formDataToSend)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un candidat</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom du candidat"
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Prénom</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom du candidat"
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date de l'entretien</label>
          <input
            type="date"
            name="dateEntretien"
            value={formData.dateEntretien}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Heure de l'entretien</label>
          <input
            type="time"
            name="heureEntretien"
            value={formData.heureEntretien}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recruteur</label>
          {
            rh && (
              <select
                name="recruteur"
                value={formData.recruteur}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionnez un recruteur</option>
                {rh.map((recruteur) => (
                  <option key={recruteur._id} value={recruteur._id}>
                    {recruteur.nom} {recruteur.prenom}
                  </option>
                ))}
              </select>
            )
          }
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Spécialité <span className="text-red-500">*</span></label>
          <select
            name="Spéciality"
            value={formData.Spéciality}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez une spécialité</option>
            <option value="AdminDB">AdminDB</option>
            <option value="Analyste cybersécurité">Analyste cybersécurité</option>
            <option value="Consultant SAP">Consultant SAP</option>
            <option value="Développeur fullStack">Développeur fullStack</option>
            <option value="IA">IA</option>
            <option value="Réseau et sécurité">Réseau et sécurité</option>
            <option value="Cloud">Cloud</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Statut</label>
          <select
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="En attente">En attente</option>
            <option value="Recruté">Recruté</option>
            <option value="Validé technique">Validé technique</option>
            <option value="Non validé technique">Non validé technique</option>
            <option value="Validé RH">Validé RH</option>
            <option value="Non validé RH">Non validé RH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Commentaire</label>
          <textarea
            name="commentaire"
            value={formData.commentaire}
            onChange={handleChange}
            placeholder="Commentaires sur le candidat"
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">CV (PDF ou Word)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleCvChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {cvFile && <p className="mt-1 text-sm text-gray-600">Fichier sélectionné: {cvFile.name}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Compte rendu (PDF uniquement)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleCompteRenduChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {compteRenduFile && <p className="mt-1 text-sm text-gray-600">Fichier sélectionné: {compteRenduFile.name}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ajouter le candidat
        </button>
      </form>
    </div>
  )
}


export default Ajoutcand



