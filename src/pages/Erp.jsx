import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt, FaPlus, FaFileAlt, FaEllipsisH, FaTimes, FaDownload, FaUpload } from 'react-icons/fa';

const Erp = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      dateEntretien: "2023-10-01",
      heureEntretien: "10:00",
      feedback: "En attente",
      commentaireRh: "Aucun",
      Recruteur: "Recruteur 1",
      lienCV: "/cv/1",
      lienCompteRendu: "https://www.compte_rendu.com/1"
    }
  ]);

  const feedbackOptions = [
    "En attente",
    "Validé RH",
    "Non validé RH",
    "Validé technique",
    "Non validé technique",
    "Recruté"
  ];

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nom: "",
    prenom: "",
    dateEntretien: "",
    heureEntretien: "",
    feedback: "En attente",
    commentaireRh: "",
    Recruteur: "",
    lienCV: "",
    lienCompteRendu: ""
  });

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newCandidate, setNewCandidate] = useState({
    nom: "",
    prenom: "",
    dateEntretien: "",
    heureEntretien: "",
    feedback: "En attente",
    commentaireRh: "",
    Recruteur: "",
    lienCV: "",
    lienCompteRendu: "",
    cvFile: null
  });

  const [fileName, setFileName] = useState("");

  const handleDelete = (id) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(updatedCandidates);
  };

  const handleEditClick = (candidate) => {
    setEditingId(candidate.id);
    setEditFormData({
      nom: candidate.nom,
      prenom: candidate.prenom,
      dateEntretien: candidate.dateEntretien,
      heureEntretien: candidate.heureEntretien,
      feedback: candidate.feedback,
      commentaireRh: candidate.commentaireRh,
      Recruteur: candidate.Recruteur,
      lienCV: candidate.lienCV,
      lienCompteRendu: candidate.lienCompteRendu
    });
  };

  const handleViewClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.id === editingId) {
        return { ...candidate, ...editFormData };
      }
      return candidate;
    });
    setCandidates(updatedCandidates);
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCandidate(null);
  };

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate({
      ...newCandidate,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setNewCandidate({
        ...newCandidate,
        cvFile: file,
        lienCV: URL.createObjectURL(file) // Crée un lien temporaire pour prévisualisation
      });
    }
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    const newId = candidates.length > 0 ? Math.max(...candidates.map(c => c.id)) + 1 : 1;
    
    // Ici vous devrez implémenter la logique pour uploader le fichier vers votre serveur
    // Pour l'exemple, nous utilisons juste le nom du fichier
    const candidateToAdd = {
      id: newId,
      ...newCandidate,
      lienCV: fileName || "CV_" + newCandidate.nom + "_" + newCandidate.prenom + ".pdf"
    };
    
    setCandidates([...candidates, candidateToAdd]);
    setNewCandidate({
      nom: "",
      prenom: "",
      dateEntretien: "",
      heureEntretien: "",
      feedback: "En attente",
      commentaireRh: "",
      Recruteur: "",
      lienCV: "",
      lienCompteRendu: "",
      cvFile: null
    });
    setFileName("");
    setShowAddForm(false);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Modal pour afficher les détails */}
      {showModal && selectedCandidate && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Détails du candidat: {selectedCandidate.nom} {selectedCandidate.prenom}
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.id}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.nom}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.prenom}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Entretien</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.dateEntretien}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Heure Entretien</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.heureEntretien}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recruteur</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.Recruteur}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                  <div className="p-2 bg-gray-100 rounded">{selectedCandidate.feedback}</div>
                </div>
                <div className="mb-4 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire RH</label>
                  <div className="p-2 bg-gray-100 rounded min-h-[80px]">{selectedCandidate.commentaireRh}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CV</label>
                  <a 
                    href={selectedCandidate.lienCV} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 p-2 bg-gray-100 rounded"
                  >
                    <FaDownload className="text-blue-500" /> 
                    <span>Télécharger</span>
                  </a>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Compte Rendu</label>
                  <a 
                    href={selectedCandidate.lienCompteRendu} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 p-2 bg-gray-100 rounded"
                  >
                    <FaFileAlt className="text-blue-500" /> 
                    <span>Voir</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-end border-t px-6 py-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Consultant SAP</h2>
        <button
          onClick={toggleAddForm}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          <FaPlus className="text-sm" /> {showAddForm ? 'Annuler' : 'Ajouter Candidat'}
        </button>
      </div>

      {/* Formulaire d'ajout */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ajouter un nouveau candidat</h3>
          <form onSubmit={handleAddCandidate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom*</label>
                <input
                  type="text"
                  name="nom"
                  value={newCandidate.nom}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom*</label>
                <input
                  type="text"
                  name="prenom"
                  value={newCandidate.prenom}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Entretien*</label>
                <input
                  type="date"
                  name="dateEntretien"
                  value={newCandidate.dateEntretien}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Heure Entretien*</label>
                <input
                  type="time"
                  name="heureEntretien"
                  value={newCandidate.heureEntretien}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recruteur*</label>
                <input
                  type="text"
                  name="Recruteur"
                  value={newCandidate.Recruteur}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select
                  name="feedback"
                  value={newCandidate.feedback}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                >
                  {feedbackOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CV*</label>
                <div className="flex items-center gap-2">
                  <label className="flex-1 flex flex-col items-center px-4 py-2 bg-white rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                      <FaUpload className="text-blue-500" />
                      <span className="text-sm text-blue-600 font-medium">
                        {fileName || "Choisir un fichier"}
                      </span>
                    </div>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </label>
                  {fileName && (
                    <span className="text-sm text-gray-500 truncate max-w-xs">
                      {fileName}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lien Compte Rendu</label>
                <input
                  type="url"
                  name="lienCompteRendu"
                  value={newCandidate.lienCompteRendu}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire RH</label>
                <textarea
                  name="commentaireRh"
                  value={newCandidate.commentaireRh}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={toggleAddForm}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      )}

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commentaire RH</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recruteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CV</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compte Rendu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plus</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {candidates && candidates.map((item) => (
                <tr className="hover:bg-gray-50 transition-colors duration-150" key={item.id}>
                  {editingId === item.id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="nom"
                          value={editFormData.nom}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="prenom"
                          value={editFormData.prenom}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="date"
                          name="dateEntretien"
                          value={editFormData.dateEntretien}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="time"
                          name="heureEntretien"
                          value={editFormData.heureEntretien}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          name="feedback"
                          value={editFormData.feedback}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        >
                          {feedbackOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <textarea
                          name="commentaireRh"
                          value={editFormData.commentaireRh}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                          rows="2"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="Recruteur"
                          value={editFormData.Recruteur}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="file"
                          name="lienCV"
                          onChange={handleFileChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="lienCompteRendu"
                          value={editFormData.lienCompteRendu}
                          onChange={handleEditFormChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={handleEditFormSubmit}
                            className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                            title="Enregistrer"
                          >
                            ✓
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition-colors"
                            title="Annuler"
                          >
                            ✗
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          to="/dashboard/compte_rendu_erp" 
                          className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FaEllipsisH size={16} />
                        </Link>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{item.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.prenom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.dateEntretien}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.heureEntretien}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.feedback}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.commentaireRh}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Recruteur}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a 
                          href={item.lienCV} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <FaDownload className="text-blue-500" /> 
                          <span>Télécharger</span>
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a 
                          href={item.lienCompteRendu} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <FaFileAlt className="text-blue-500" /> 
                          <span>Voir</span>
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleViewClick(item)}
                            className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                            title="Voir détails"
                          >
                            <FaEye size={16} />
                          </button>
                          <button
                            onClick={() => handleEditClick(item)}
                            className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                            title="Modifier"
                          >
                            <FaEdit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition-colors"
                            title="Supprimer"
                          >
                            <FaTrashAlt size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          to="/dashboard/compte_rendu_erp" 
                          className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FaEllipsisH size={16} />
                        </Link>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Erp;