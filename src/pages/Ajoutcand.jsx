// import React, { useEffect, useState } from 'react'
// import { instance } from '../../config/axios'
// import axios from 'axios'

// const Ajoutcand = () => {
//   const [formData, setFormData] = useState({
//     nom: '',
//     prenom: '',
//     dateEntretien: '',
//     heureEntretien: '',
//     recruteur: '',
//     Spéciality: '', // Nouveau champ pour la spécialité
//     feedback: 'En attente',
//     lienCV: '',
//     lien_compteRendu: '',
//     commentaireRh: ''
//   })

//   const [cvFile, setCvFile] = useState()
//   const [compteRenduFile, setCompteRenduFile] = useState()
//   const [rh,setRh] = useState(null)
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }
  
 
//   const handleCvChange = (e) => {
//     const file = e.target.files[0]
//     if (file && (file.type === 'application/pdf' || 
//                 file.type === 'application/msword' || 
//                 file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
//       setCvFile(file)
//     } else {
//       alert('Veuillez sélectionner un fichier PDF ou Word pour le CV')
//       e.target.value = null
//     }
//   }

//   const handleCompteRenduChange = (e) => {
//     const file = e.target.files[0]
//     if (file && file.type === 'application/pdf') {
//       setCompteRenduFile(file)
//     } else {
//       alert('Veuillez sélectionner un fichier PDF pour le compte rendu')
//       e.target.value = null
//     }
//   }
//   const getRh = async() => {
    
//     const res = await instance.get('/users/list')
//     setRh(res.data.data)
//     console.log(res.data.data)
    
//   }
//   useEffect(() => {
//     getRh()
//   }, [])
//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     try {
//     const token = localStorage.getItem("accessToken"); // Assuming you have a token stored in localStorage
//     const res = await instance.post(
//             "/candidates/create",
//              {
//                 ...formData,
//                 lienCV: cvFile ? cvFile.name : null, // Assuming you want to send the file name
//                 lien_compteRendu: compteRenduFile ? compteRenduFile.name : null // Assuming you want to send the file name
              
//             },
//               {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//            console.log("Candidate added:", res.data);
//           switch (formData.Spéciality) {
//   case 'IA':
//     window.location.href = '/dashboard/inteligence_artificiel';
//     break;
//   case 'Consultant SAP':
//     window.location.href = '/dashboard/erp';
//     break;
//   case 'Développeur fullstack':
//     window.location.href = '/dashboard/full_stack';
//     break;
//   case 'AdminDB':
//     window.location.href = '/dashboard/admindb';
//     break;
//   case 'Analyste cybersécurité':
//     window.location.href = '/dashboard/analyste_cyber_securite';
//     break;
//   case 'Réseau et Sécurité':
//     window.location.href = '/dashboard/reseau';
//     break;
//   case 'Cloud':
//     window.location.href = '/dashboard/cloud';
//     break;
//           }
//           alert('Candidat ajouté avec succès')
//           setFormData({
//             nom: '',
//             prenom: '',
//             dateEntretien: '',
//             heureEntretien: '',
//             recruteur: '',
//             Spéciality: '',
//             feedback: 'En attente',
//             lienCV: '',
//             lien_compteRendu: '',
//             commentaireRh: ''
//           })
//           setCvFile(null)
//           setCompteRenduFile(null)

//    } catch (error) {
//      console.error('Erreur lors de l\'ajout du candidat:', error)
   
//    }
//     if (!formData.Spéciality) {
//       alert('Veuillez sélectionner une spécialité')
//       return
//     }
    
//     // Créer un FormData pour l'envoi au backend
//     const formDataToSend = new FormData()
    
//     // Ajouter les données du formulaire
//     Object.keys(formData).forEach(key => {
//       formDataToSend.append(key, formData[key])
//     })
    
//     // Ajouter les fichiers s'ils existent
//     if (cvFile) formDataToSend.append('cv', cvFile)
//     if (compteRenduFile) formDataToSend.append('compteRendu', compteRenduFile)
    
//     // Ici vous ajouterez la logique pour envoyer les données au backend
//     console.log('Données du formulaire:', formDataToSend)
//   }

//   // const upload = async () => {
//   //   const formData = new FormData();
//   //   formData.append('file', cvFile);
//   //   axios.post('http://localhost:5000/uploadfiles', formData, {
//   //     headers: {
//   //       'Content-Type': 'multipart/form-data',
//   //     },
//   //   })
//   //     .then(response => {
//   //       console.log('Fichier téléchargé avec succès:', response.data);
//   //     }
//   //     )
//   //     .catch(error => {
//   //       console.error('Erreur lors du téléchargement du fichier:', error);
//   //     }
//   //   );
//   // }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un candidat</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Nom</label>
//           <input
//             type="text"
//             name="nom"
//             value={formData.nom}
//             onChange={handleChange}
//             placeholder="Nom du candidat"
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Prénom</label>
//           <input
//             type="text"
//             name="prenom"
//             value={formData.prenom}
//             onChange={handleChange}
//             placeholder="Prénom du candidat"
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Date de l'entretien</label>
//           <input
//             type="date"
//             name="dateEntretien"
//             value={formData.dateEntretien}
//             onChange={handleChange}
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Heure de l'entretien</label>
//           <input
//             type="time"
//             name="heureEntretien"
//             value={formData.heureEntretien}
//             onChange={handleChange}
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Recruteur</label>
//           {
//             rh && (
//               <select
//                 name="recruteur"
//                 value={formData.recruteur}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Sélectionnez un recruteur</option>
//                 {rh.map((recruteur) => (
//                   <option key={recruteur._id} value={recruteur._id}>
//                     {recruteur.nom} {recruteur.prenom}
//                   </option>
//                 ))}
//               </select>
//             )
//           }
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Spécialité <span className="text-red-500">*</span></label>
//           <select
//             name="Spéciality"
//             value={formData.Spéciality}
//             onChange={handleChange}
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Sélectionnez une spécialité</option>
//             <option value="AdminDB">AdminDB</option>
//             <option value="Analyste cybersécurité">Analyste cybersécurité</option>
//             <option value="Consultant SAP">Consultant SAP</option>
//             <option value="Développeur fullstack">Développeur fullStack</option>
//             <option value="IA">IA</option>
//             <option value="Réseau et Sécurité">Réseau et sécurité</option>
//             <option value="Cloud">Cloud</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Statut</label>
//           <select
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="En attente">En attente</option>
//             <option value="Recruté">Recruté</option>
//             <option value="Validé technique">Validé technique</option>
//             <option value="Non validé technique">Non validé technique</option>
//             <option value="Validé RH">Validé RH</option>
//             <option value="Non validé RH">Non validé RH</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Commentaire</label>
//           <textarea
//             name="commentaireRh"
//             value={formData.commentaireRh}
//             onChange={handleChange}
//             placeholder="Commentaires sur le candidat"
//             className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">CV (PDF ou Word)</label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={handleCvChange}
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//           />

//           {cvFile && <p className="mt-1 text-sm text-gray-600">Fichier sélectionné: {cvFile.name}</p>}
//           {/* <button type="button" onClick={upload}>Upload</button> */}
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Compte rendu (PDF uniquement)</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleCompteRenduChange}
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//           />
//           {compteRenduFile && <p className="mt-1 text-sm text-gray-600">Fichier sélectionné: {compteRenduFile.name}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Ajouter le candidat
//         </button>
//       </form>
//     </div>
//   )
// }


// export default Ajoutcand



import React, { useEffect, useState } from 'react';
import { instance } from '../../config/axios';
import axios from 'axios';

const Ajoutcand = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateEntretien: '',
    heureEntretien: '',
    recruteur: '',
    Spéciality: '',
    feedback: 'En attente',
    lienCV: '',
    lien_compteRendu: '',
    commentaireRh: '',
    niveau: '',
    experience: '',
    diplome: '',
    telephone: '',
    email: ''
  });

  const [cvFile, setCvFile] = useState(null);
  const [compteRenduFile, setCompteRenduFile] = useState(null);
  const [rh, setRh] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || 
                file.type === 'application/msword' || 
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setCvFile(file);
    } else {
      alert('Veuillez sélectionner un fichier PDF ou Word pour le CV');
      e.target.value = null;
    }
  };

  const handleCompteRenduChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCompteRenduFile(file);
    } else {
      alert('Veuillez sélectionner un fichier PDF pour le compte rendu');
      e.target.value = null;
    }
  };

  const getRh = async () => {
    try {
      const res = await instance.get('/users/list');
      setRh(res.data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des recruteurs:', error);
    }
  };

  useEffect(() => { getRh(); }, []);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post('http://localhost:5000/uploadfiles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.path;
    } catch (error) {
      console.error('Erreur lors de l\'upload du fichier:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.Spéciality) {
      alert('Veuillez sélectionner une spécialité');
      setIsSubmitting(false);
      return;
    }

    try {
      // Upload des fichiers en parallèle
      const uploadPromises = [];
      if (cvFile) uploadPromises.push(uploadFile(cvFile));
      if (compteRenduFile) uploadPromises.push(uploadFile(compteRenduFile));

      const [cvPath, compteRenduPath] = await Promise.all(uploadPromises);

      // Création du candidat
      const token = localStorage.getItem("accessToken");
      await instance.post(
        "/candidates/create",
        {
          ...formData,
          lienCV: cvPath || '',
          lien_compteRendu: compteRenduPath || ''
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Redirection
      const redirectPaths = {
        'IA': '/dashboard/inteligence_artificiel',
        'Consultant SAP': '/dashboard/erp',
        'Développeur fullstack': '/dashboard/full_stack',
        'AdminDB': '/dashboard/admindb',
        'Analyste cybersécurité': '/dashboard/analyste_cyber_securite',
        'Réseau et Sécurité': '/dashboard/reseau',
        'Cloud': '/dashboard/cloud'
      };

      if (redirectPaths[formData.Spéciality]) {
        window.location.href = redirectPaths[formData.Spéciality];
      }

      alert('Candidat ajouté avec succès');
      resetForm();
    } catch (error) {
      console.error('Erreur:', error.response?.data?.message || error.message);
      alert('Erreur lors de l\'ajout du candidat');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      nom: '',
      prenom: '',
      dateEntretien: '',
      heureEntretien: '',
      recruteur: '',
      Spéciality: '',
      feedback: 'En attente',
      lienCV: '',
      lien_compteRendu: '',
      commentaireRh: '',
      niveau: '',
      experience: '',
      diplome: '',
      telephone: '',
      email: ''
    });
    setCvFile(null);
    setCompteRenduFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Ajouter un candidat</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Colonne 1 */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nom*</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Prénom*</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Niveau</label>
            <select
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="">Sélectionnez</option>
              <option value="Junior">Junior</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Expérience (années)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Diplôme</label>
            <input
              type="text"
              name="diplome"
              value={formData.diplome}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Date entretien*</label>
            <input
              type="date"
              name="dateEntretien"
              value={formData.dateEntretien}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Heure entretien*</label>
            <input
              type="time"
              name="heureEntretien"
              value={formData.heureEntretien}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Recruteur*</label>
            <select
              name="recruteur"
              value={formData.recruteur}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            >
              <option value="">Sélectionnez</option>
              {rh?.map((r) => (
                <option key={r._id} value={r._id}>
                  {r.nom} {r.prenom}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Spécialité*</label>
            <select
              name="Spéciality"
              value={formData.Spéciality}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            >
              <option value="">Sélectionnez</option>
              <option value="IA">IA</option>
              <option value="Consultant SAP">Consultant SAP</option>
              <option value="Développeur fullstack">Développeur fullstack</option>
              <option value="AdminDB">AdminDB</option>
              <option value="Analyste cybersécurité">Analyste cybersécurité</option>
              <option value="Réseau et Sécurité">Réseau et Sécurité</option>
              <option value="Cloud">Cloud</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Statut</label>
            <select
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="En attente">En attente</option>
              <option value="Recruté">Recruté</option>
              <option value="Validé technique">Validé technique</option>
              <option value="Non validé technique">Non validé technique</option>
              <option value="Validé RH">Validé RH</option>
              <option value="Non validé RH">Non validé RH</option>
            </select>
          </div>
        </div>

        {/* Full width fields */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Commentaire RH</label>
            <textarea
              name="commentaireRh"
              value={formData.commentaireRh}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">CV (PDF ou Word)*</label>
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
              required
            />
            {cvFile && <p className="mt-1 text-sm text-gray-600">{cvFile.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Compte rendu (PDF)</label>
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
            {compteRenduFile && <p className="mt-1 text-sm text-gray-600">{compteRenduFile.name}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded 
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {isSubmitting ? 'Enregistrement en cours...' : 'Ajouter le candidat'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ajoutcand;