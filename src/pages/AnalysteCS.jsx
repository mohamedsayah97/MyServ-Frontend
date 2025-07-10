import React, { useEffect, useState } from 'react'
import { instance } from '../../config/axios'
import { FaSearch, FaSave, FaTimes, FaSpinner } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AnalysteCS = () => {
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    nom: '',
    prenom: '',
    dateEntretien: '',
    heureEntretien: '',
    feedback: 'En attente',
    commentaireRh: ''
  })
  // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7; // Number of rows per page

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await instance.get('/candidates/list')
        setCandidates(res.data.data || [])
      } catch (err) {
        setError(err.message || 'Erreur lors du chargement des candidats')
        console.error("Error fetching candidates:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchCandidates()
  }, [])

  const deleteCandidate = async (id) => {
    try {
      await instance.delete(`/candidates/${id}`)
      setCandidates(candidates.filter(cand => cand._id !== id))
      // Reset to first page if current page becomes empty after deletion
      if (filteredCandidates.length % rowsPerPage === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
    } catch (err) {
      setError(err.message || 'Erreur lors de la suppression')
      console.error("Error deleting candidate:", err)
    }
  }

  const handleEditClick = (cand) => {
    setEditingId(cand._id)
    setEditFormData({
      nom: cand.nom || '',
      prenom: cand.prenom || '',
      dateEntretien: cand.dateEntretien || '',
      heureEntretien: cand.heureEntretien || '',
      feedback: cand.feedback || 'En attente',
      commentaireRh: cand.commentaireRh || ''
    })
  }

  const handleEditFormChange = (e) => {
    const { name, value } = e.target
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCancelClick = () => {
    setEditingId(null)
  }

  const updateCandidate = async (id) => {
    try {
      const res = await instance.put(`/candidates/${id}`, editFormData)
      setCandidates(candidates.map(cand => 
        cand._id === id ? { ...cand, ...res.data.data } : cand
      ))
      setEditingId(null)
    } catch (err) {
      setError(err.message || 'Erreur lors de la mise à jour')
      console.error("Error updating candidate:", err)
    }
  }

  const filteredCandidates = candidates.filter(cand => {
    const isCS = cand.Spéciality === 'Analyste cybersécurité' // Vérifie la spécialité IA
    const matchesSearch = 
      (cand.nom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (cand.prenom || '').toLowerCase().includes(searchTerm.toLowerCase())
    
    return isCS && matchesSearch
  })
  // Get current candidates for the table
  const indexOfLastCandidate = currentPage * rowsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - rowsPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);
  // Calculate total pages
  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link to="/dashboard/ajoutcandidat" className="text-blue-500 hover:text-blue-600 font-medium">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300">
         Ajout Candidat
        </button>
        </Link>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un candidat..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b font-semibold text-left">Nom</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Prénom</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Date Entretien</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Heure</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Statut</th>
              {/* <th className="py-3 px-4 border-b font-semibold text-left">CV</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Compte Rendu</th> */}
              <th className="py-3 px-4 border-b font-semibold text-left">Commentaire RH</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Actions</th>
              <th className='py-3 px-4 border-b font-semibold text-left'>Question</th>
            </tr>
          </thead>
          <tbody>

             {currentCandidates.length > 0 ? (
                       currentCandidates.map((cand) => {
                         const isEditing = editingId === cand._id;
                         return (
                           <tr key={cand._id} className="hover:bg-gray-50">
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <input
                                   type="text"
                                   name="nom"
                                   value={editFormData.nom}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                 />
                               ) : cand.nom || '-'}
                             </td>
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <input
                                   type="text"
                                   name="prenom"
                                   value={editFormData.prenom}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                 />
                               ) : cand.prenom || '-'}
                             </td>
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <input
                                   type="date"
                                   name="dateEntretien"
                                   value={editFormData.dateEntretien}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                 />
                               ) : cand.dateEntretien ? new Date(cand.dateEntretien).toLocaleDateString() : '-'}
                             </td>
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <input
                                   type="time"
                                   name="heureEntretien"
                                   value={editFormData.heureEntretien}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                 />
                               ) : cand.heureEntretien || '-'}
                             </td>
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <select
                                   name="feedback"
                                   value={editFormData.feedback}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                 >
                                   <option value="En attente">En attente</option>
                                   <option value="Accepté">Accepté</option>
                                   <option value="Refusé">Refusé</option>
                                    <option value="validérh">validérh</option>
                                     <option value="validé tecknique">validé tecknique</option>
                                      <option value="validéRh">validéRh</option>
                                 </select>
                               ) : (
                                 <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                                   cand.feedback === 'Accepté' ? 'bg-green-100 text-green-800' :
                                   cand.feedback === 'Refusé' ? 'bg-red-100 text-red-800' :
                                   'bg-yellow-100 text-yellow-800'
                                 }`}>
                                   {cand.feedback || 'Non défini'}
                                 </span>
                               )}
                             </td>
                             <td className="py-3 px-4 border-b">
                               {isEditing ? (
                                 <textarea
                                   name="commentaireRh"
                                   value={editFormData.commentaireRh}
                                   onChange={handleEditFormChange}
                                   className="border rounded px-2 py-1 w-full"
                                   rows="2"
                                 />
                               ) : cand.commentaireRh || '-'}
                             </td>
                             <td className="py-3 px-4 border-b space-x-2">
                               {isEditing ? (
                                 <>
                                   <button
                                     onClick={() => updateCandidate(cand._id)}
                                     className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm flex items-center"
                                   >
                                     <FaSave className="mr-1" /> Enregistrer
                                   </button>
                                   <button
                                     onClick={handleCancelClick}
                                     className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded text-sm flex items-center"
                                   >
                                     <FaTimes className="mr-1" /> Annuler
                                   </button>
                                 </>
                               ) : (
                                 <>
                                   <button
                                     onClick={() => handleEditClick(cand)}
                                     className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-sm"
                                   >
                                     Modifier
                                   </button>
                                   <button
                                     onClick={() => deleteCandidate(cand._id)}
                                     className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                                   >
                                     Supprimer
                                   </button>
                                 </>
                               )}
                             </td>
                             <td className="py-3 px-4 border-b">
                               <Link to={`/dashboard/compte_rendu_analyste_cs/${cand._id}`}>Click</Link>
                             </td>
                           </tr>
                         );
                       })
                      ) : (
                       <tr>
                         <td colSpan="8" className="py-4 text-center text-gray-500">
                           Aucun candidat trouvé
                         </td>
                       </tr>
                     )}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
          >
            Précédent
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  )
}

export default AnalysteCS