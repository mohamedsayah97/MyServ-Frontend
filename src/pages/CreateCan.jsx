import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUpload } from 'react-icons/fa';

const CreateCan = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   nom: '',
  //   prenom: '',
  //   dateEntretien: '',
  //   heureEntretien: '',
  //   poste: '',
  //   feedback: 'Feedback par défaut',
  //   recruiter: '',
  //   commentaireRh: '',
  //   cv: null,
  //   lienCompteRendu: ''
  // });
  const [nom, setNom] = useState("");
  const [prenom, setPreom] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-rose-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to="/dashboard/admindb" 
                className="text-rose-100 hover:text-white flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Retour
              </Link>
              <h2 className="text-2xl font-bold text-white">Ajouter un Candidat</h2>
              <div className="w-6"></div> {/* Pour l'alignement */}
            </div>
            <p className="mt-1 text-rose-100">Remplissez les informations du nouveau candidat</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-6 mt-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={nom}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={prenom}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Détails de l'entretien</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateEntretien" className="block text-sm font-medium text-gray-700 mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateEntretien"
                    name="dateEntretien"
                    value={formData.dateEntretien}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="heureEntretien" className="block text-sm font-medium text-gray-700 mb-1">
                    Heure <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="heureEntretien"
                    name="heureEntretien"
                    value={formData.heureEntretien}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="poste" className="block text-sm font-medium text-gray-700 mb-1">
                    Poste <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="poste"
                    name="poste"
                    value={formData.poste}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  >
                    <option value="">Sélectionnez un poste</option>
                    <option value="Développeur">Développeur</option>
                    <option value="Designer">Designer</option>
                    <option value="Chef de projet">Chef de projet</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="recruiter" className="block text-sm font-medium text-gray-700 mb-1">
                    Recruteur <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="recruiter"
                    name="recruiter"
                    value={formData.recruiter}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Évaluation</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                    Feedback initial
                  </label>
                  <select
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
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
                  <label htmlFor="commentaireRh" className="block text-sm font-medium text-gray-700 mb-1">
                    Commentaire RH
                  </label>
                  <textarea
                    id="commentaireRh"
                    name="commentaireRh"
                    value={formData.commentaireRh}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    rows="3"
                    placeholder="Notes sur le candidat..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Documents</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                    CV (PDF, DOC) <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="cv"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-rose-600 hover:text-rose-500 focus-within:outline-none flex items-center"
                        >
                          <FaUpload className="mr-2" /> Uploader un fichier
                          <input
                            id="cv"
                            name="cv"
                            type="file"
                            onChange={handleChange}
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        {formData.cv ? formData.cv.name : "Aucun fichier sélectionné"}
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX jusqu'à 10MB</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="lienCompteRendu" className="block text-sm font-medium text-gray-700 mb-1">
                    Lien Compte Rendu
                  </label>
                  <input
                    type="url"
                    id="lienCompteRendu"
                    name="lienCompteRendu"
                    value={formData.lienCompteRendu}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <button
                type="button"
                onClick={() => navigate('/dashboard/admindb')}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enregistrement...' : 'Ajouter Candidat'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
}
export default CreateCan;