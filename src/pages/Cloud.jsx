import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaPlus,
  FaFileAlt,
  FaEllipsisH,
  FaTimes,
  FaDownload,
  FaUpload,
  FaSearch,
} from "react-icons/fa";
import { instance } from "../../config/axios";
const Cloud = () => {
  const [candidates, setCandidates] = useState([]);
  const [recruteurs, setRecruteurs] = useState([]);

  const feedbackOptions = [
    "En attente",
    "Validé RH",
    "Non validé RH",
    "Validé technique",
    "Non validé technique",
    "Recruté",
  ];

  const [ editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nom: "",
    prenom: "",
    dateEntretien: "",
    heureEntretien: "",
    feedback: "En attente",
    commentaireRh: "",
    Recruteur: "",
    lienCV: "",
    lien_compteRendu: "",
  });

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [compteRenduFileName, setCompteRenduFileName] = useState("");
  const [loadingList, setLoadingList] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    nom: "",
    prenom: "",
    dateEntretien: "",
    heureEntretien: "",
    feedback: "En attente",
    commentaireRh: "",
    Recruteur: "",
    lienCV: "",
    lien_compteRendu: "",
    compteRenduFile: null,
    cvFile: null,
    specialite: "Cloud",
  });
  const [callBack, setCallBack] = useState(false);

  const [fileName, setFileName] = useState("");

  // Fonction de recherche
  const filteredCandidates = candidates.filter((candidate) => {
    const searchLower = searchTerm?.toLowerCase();
    return (
      candidate.nom?.toLowerCase().includes(searchLower) ||
      candidate.prenom?.toLowerCase().includes(searchLower) ||
      candidate?.Recruteur?.toLowerCase().includes(searchLower) ||
      candidate.feedback?.toLowerCase().includes(searchLower) ||
      candidate.commentaireRh?.toLowerCase().includes(searchLower) ||
      candidate.dateEntretien?.includes(searchTerm) ||
      candidate.heureEntretien?.includes(searchTerm) ||
      candidate.id?.toString()?.includes(searchTerm)||
      candidate.specialite?.toLowerCase().includes(searchLower)
    );
  });

  const handleCompteRenduFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompteRenduFileName(file.name);
      setNewCandidate({
        ...newCandidate,
        compteRenduFile: file,
        lien_compteRendu: URL.createObjectURL(file),
      });
    }
   };
   // recupérer la liste des candidats depuis l'API
   useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
        setLoadingList(true);
        const response = await instance.get("/candidates/list", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        setCandidates(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des candidats:", error);
      } finally {
        setLoadingList(false);
      }
    };
    fetchCandidates();
    const fetchRecruteurs = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
        const response = await instance.get("/users/list", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecruteurs(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des recruteurs:", error);
      }
    };
    fetchRecruteurs();

    return () => {};
  }, [callBack]);

  const formatTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  };

  // const handleDelete = async (id) => {
  //   // axios part

  //     const updatedCandidates = candidates.filter(
  //       (candidate) => candidate.id !== id
  //     );
  //     setCandidates(updatedCandidates);

  // };
  const handleDelete = async (id) => {
    try {
      const res = await instance.delete(`/candidates/${id}`, {
        // Modifié ici
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      console.log("Candidate deleted:", res.data);
      setCandidates((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error(
        "Erreur suppression:",
        error.res?.data?.message || error.message
      );
      // Affichez un message d'erreur à l'utilisateur si nécessaire
    }
  };
  //   const handleDelete = async (id) => {
  //   if (!id) {
  //     console.error("ID manquant. Données complètes :", { candidates });
  //     return;
  //   }

  //   try {
  //     await instance.delete(`/candidates/delete/${id}`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  //     });
  //     setCandidates(candidates.filter(c => c._id !== id)); // Filtre adapté
  //   } catch (error) {
  //     console.error("Erreur :", error.response?.data);
  //   }
  // };
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
      compteRenduUrl: candidate.compteRenduUrl,
      cvUrl: candidate.cvUrl
    });
  };

  const handleViewClick = async (candidate) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await instance.get(`/candidates/${candidate._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Vérification des données reçues
      if (!response.data || !response.data.data) {
        throw new Error("Réponse invalide de l'API");
      }

      // Mise à jour de l'état avec les nouvelles données
      setSelectedCandidate(response.data.data);
      setShowModal(true);

      // Optionnel : Mise à jour locale dans la liste
      setCandidates((prev) =>
        prev.map((c) => (c._id === candidate._id ? response.data.data : c))
      );
    } catch (error) {
      console.error("Erreur détaillée:", {
        message: error.message,
        response: error.response?.data,
        config: error.config,
      });

      // Fallback : afficher les données en cache si la requête échoue
      setSelectedCandidate(candidate);
      setShowModal(true);

      alert(`Détails partiels (hors ligne) : ${error.message}`);
    }
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // axios part
    try {
      const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
      const res = instance.put(`/candidates/${editingId}`, editFormData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Candidate updated:", res.data);
      setCallBack(!callBack); // Trigger a re-fetch of candidates
    } catch (error) {
      console.log(error);
    }
    const updatedCandidates = candidates.map((candidate) => {
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
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setNewCandidate({
        ...newCandidate,
        cvFile: file,
        lienCV: URL.createObjectURL(file),
      });
    }
  };

  const handleAddCandidate = async (e) => {
    e.preventDefault();
    // axios part
    try {
      const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
      const res = await instance.post(
        "/candidates/create",
        {
          ...newCandidate,
          lienCV: fileName
            ? newCandidate.lienCV
            : "CV_" + newCandidate.nom + "_" + newCandidate.prenom + ".pdf",
          lien_compteRendu: compteRenduFileName
            ? newCandidate.lien_compteRendu
            : "Compte_Rendu_" +
              newCandidate.nom +
              "_" +
              newCandidate.prenom +
              ".pdf",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Candidate added:", res.data);
      setCallBack(!callBack); // Trigger a re-fetch of candidates
    } catch (error) {
      console.log(error);
    }
    const newId =
      candidates.length > 0 ? Math.max(...candidates.map((c) => c.id)) + 1 : 1;

    const candidateToAdd = {
      id: newId,
      ...newCandidate,
      lienCV: fileName
        ? newCandidate.lienCV
        : "CV_" + newCandidate.nom + "_" + newCandidate.prenom + ".pdf",
      lien_compteRendu: compteRenduFileName
        ? newCandidate.lien_compteRendu
        : "Compte_Rendu_" +
          newCandidate.nom +
          "_" +
          newCandidate.prenom +
          ".pdf",
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
      lien_compteRendu: "",
      cvFile: null,
      // test
      specialite: "Cloud",
    });
    setFileName("");
    setShowAddForm(false);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  console.log(recruteurs);
  //Bonus: Add a function to handle the search input change
  if (loadingList) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader">
          <h1>Loading....</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Modal pour afficher les détails */}
      {showModal && selectedCandidate && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Détails du candidat: {selectedCandidate.nom}{" "}
                {selectedCandidate.prenom}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ID
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.id}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.nom}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.prenom}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Entretien
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {formatTimestampToDate(selectedCandidate.dateEntretien)}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Heure Entretien
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.heureEntretien}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recruteur
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.Recruteur}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Statut
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.feedback}
                  </div>
                </div>
                <div className="mb-4 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Commentaire RH
                  </label>
                  <div className="p-2 bg-gray-100 rounded min-h-[80px]">
                    {selectedCandidate.commentaireRh}
                  </div>
                </div>
                {/* <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specialité
                  </label>
                  <div className="p-2 bg-gray-100 rounded">
                    {selectedCandidate.specialite}
                  </div>
                </div> */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CV
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Compte Rendu
                  </label>
                  <a
                    href={selectedCandidate.lien_compteRendu}
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

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="w-full md:w-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Ingénieur Systéme & Cloud
          </h2>
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
          {/* Barre de recherche */}
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={toggleAddForm}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
          >
            <FaPlus className="text-sm" />{" "}
            {showAddForm ? "Annuler" : "Ajouter Candidat"}
          </button>
        </div>
      </div>

      {/* Formulaire d'ajout */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Ajouter un nouveau candidat
          </h3>
          <form onSubmit={handleAddCandidate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom*
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom*
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Entretien*
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Heure Entretien*
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recruteur*
                </label>
                <select
                  className="w-full border rounded px-3 py-2"
                  onChange={handleAddFormChange}
                  name="recruteur"
                  required
                >
                  <option value="" disabled defaultValue>
                    Sélectionner un recruteur
                  </option>
                  {recruteurs.map((candidate) => (
                    <option key={candidate._id} value={candidate._id}>
                      {candidate.nom}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <select
                  name="feedback"
                  value={newCandidate.feedback}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                >
                  {feedbackOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CV*
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Compte Rendu (PDF)
                </label>
                <div className="flex items-center gap-2">
                  <label className="flex-1 flex flex-col items-center px-4 py-2 bg-white rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                      <FaDownload className="text-blue-500" />
                      <span className="text-sm text-blue-600 font-medium">
                        {compteRenduFileName || "Choisir un fichier PDF"}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleCompteRenduFileChange}
                      className="hidden"
                    />
                  </label>
                  {compteRenduFileName && (
                    <span className="text-sm text-gray-500 truncate max-w-xs">
                      {compteRenduFileName}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Commentaire RH
                </label>
                <textarea
                  name="commentaireRh"
                  value={newCandidate.commentaireRh}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                />
              </div>
              
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Spécialité
                </label>
                <input
                  type="text"
                  name="specialité"
                  value={newCandidate.specialite}
                  onChange={handleAddFormChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div> */}
              
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prénom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Entretien
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commentaire RH
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recruteur
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spécialité
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CV
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compte Rendu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plus
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCandidates &&
                filteredCandidates.map((item, index) => (
                  <tr
                    className="hover:bg-gray-50 transition-colors duration-150"
                    key={index}
                  >
                    {editingId === item.id ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="nom"
                            value={item.nom}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          />
                          {/*ici*/}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="prenom"
                            value={item.prenom}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="date"
                            name="dateEntretien"
                            value={formatTimestampToDate(item.dateEntretien)}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="time"
                            name="heureEntretien"
                            value={item.heureEntretien}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            name="feedback"
                            value={item.feedback}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          >
                            {feedbackOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <textarea
                            name="commentaireRh"
                            value={item.commentaireRh}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                            rows="2"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="Recruteur"
                            value={item.Recruteur}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {/* Simplifié pour l'édition de lien CV existant, pas d'upload ici */}
                          <input
                            type="text" // Change to text for direct URL input during edit, or provide a separate file input
                            name="lienCV"
                            value={item.lienCV}
                            onChange={handleEditFormChange}
                            className="border rounded px-2 py-1 w-full"
                            placeholder="Lien CV"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="file"
                            name="compteRendu"
                            onChange={handleCompteRenduFileChange}
                            className="border rounded px-2 py-1 w-full"
                            accept=".pdf"
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
                            to="/dashboard/compte_rendu_cloud"
                            className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <FaEllipsisH size={16} />
                          </Link>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {item.nom}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.prenom}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatTimestampToDate(item.dateEntretien)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.heureEntretien}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.feedback}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.commentaireRh}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.specialite ? item.specialite : "Cloud"}
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.Recruteur}
                        </td>
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
                            href={item.lien_compteRendu}
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
                              onClick={() => {
                                console.log("Item cliqué :", item); // Debug
                                handleDelete(item._id); // Adaptez à votre clé
                              }}
                              className="text-red-600 hover:text-red-900..."
                            >
                              Supprimer
                              <FaTrashAlt size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            to="/dashboard/compte_rendu_cloud"
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

export default Cloud;
