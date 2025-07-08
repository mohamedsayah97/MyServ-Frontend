import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { instance } from "../../config/axios";
const CompteIa = () => {
  const { id } = useParams();
  // État initial pour tous les champs du formulaire
  const [formData, setFormData] = useState({});
  const [reponse, setReponse] = useState({});
  const [fileData, setFileData] = useState(null);
  // Gestionnaire de changement pour tous les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Gestionnaire pour le téléchargement d'image
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData(prev => ({
  //       ...prev,
  //       profileImage: file
  //     }));
  //   }
  // };
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };
   const handleChangeReponse = (index, value) => {
    setReponse((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', fileData())
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    })
    .then((result) => {
      console.log("file sent successfully", result);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });

    // console.log('Formulaire soumis:', formData);
    // // Ici vous pourriez ajouter la logique pour envoyer les données à un serveur
    // alert('Formulaire soumis avec succès!');
  };

   const getCandidat = async () => {
    try {
      const response = await instance.get(`/candidates/${id}`);
      console.log(response.data.data);
      console.log(response.data);
      setFormData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCandidat();
  }, []);

  return (
    <div className="compte-rendu-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Compte-Rendu Ingénieur en Intelligence Artificielle</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Section 1: Informations personnelles */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Informations Personnelles</legend>
          
          <FormField 
            label="Recruteur"
            name="recruteur"
            value={formData.recruteur ? (formData.recruteur.nom || '') + ' ' + (formData.recruteur.prenom || '') : ''}
            onChange={handleChange}
            readOnly            
          />
          
          <FormField 
            label="Nom & Prénom"
            name="fullName"
            value={formData.nom + ' ' + formData.prenom}
            onChange={handleChange}
            readOnly            
          />
          
          <FormField 
            label="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
          />
          
          <FormField 
            label="Adresse mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            type="email"
          />
          <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Photo de profil</label>
              <input
                type="file"
                accept="image/*"
                onChange={fileChangeHandler}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
             </div>
          
          
          <FormField 
            label="Numero Tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            type="tel"
          />
          
          <FormField 
            label="Permis de Conduire"
            name="permis_conduire"
            value={formData.permis_conduire}
            onChange={handleChange}
          />
          
          <FormField 
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
          />
          
          <FormField 
            label="Statut"
            name="statut"
            value={formData.statut}
            onChange={handleChange}
          />
          
          <FormField 
            label="Diplome"
            name="diplome"
            value={formData.diplome}
            onChange={handleChange}
          />
          
          <FormField 
            label="Année d'expérience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            type="number"
          />
        </fieldset>

        {/* Section 2: Questions motivationnelles */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Questions Motivationnelles</legend>
          
          <FormField 
            label="Why are you interested in our job offer:"
            name="jobInterest"
            value={reponse[0]}
            onChange={(e) => handleChangeReponse(0, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quels sont vos Qualités / Défauts ? (défauts: pistes d'amélioration actuelles)"
            name="qualitiesDefects"
            value={reponse[1]}
            onChange={(e) => handleChangeReponse(1, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Pourquoi êtes-vous le candidat idéal pour ce poste ?"
            name="idealCandidate"
            value={reponse[2]}
            onChange={(e) => handleChangeReponse(2, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Selon vous, quelles sont les compétences non techniques nécessaires dans le monde professionnel ? (Soft skills/ facteurs humains)"
            name="softSkills"
            value={reponse[3]}
            onChange={(e) => handleChangeReponse(3, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Comment gérez-vous un conflit au travail ?"
            name="conflictManagement"
            value={reponse[4]}
            onChange={(e) => handleChangeReponse(4, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Comment gérez-vous une situation de stress ?"
            name="stressManagement"
            value={reponse[5]}
            onChange={(e) => handleChangeReponse(5, e.target.value)}
            textarea
          />
          
          <FormField 
            label="En quoi ce poste vous intéresse-t-il ? Qu'attendez-vous de ce poste ? Pourquoi êtes-vous à l'écoute du marché? Pourquoi en France exactement ?"
            name="positionInterest"
            value={reponse[6]}
            onChange={(e) => handleChangeReponse(6, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Comment envisagez-vous votre carrière? (Où vous voyez-vous dans cinq ans?)"
            name="careerPlan"
            value={reponse[7]}
            onChange={(e) => handleChangeReponse(7, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Entre l'argent et le travail lequel vous semble le plus important ?"
            name="moneyVsWork"
            value={reponse[8]}
            onChange={(e) => handleChangeReponse(8, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Parlez-moi de votre ancien employeur? (emploi actuel)"
            name="previousEmployer"
            value={reponse[9]}
            onChange={(e) => handleChangeReponse(9, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Si vous êtes face à une situation où un client vous demande un travail dans une courte période et vous savez que c'est impossible de faire délivrer le travail à la date prédéfinie, comment gérez-vous la situation ?"
            name="clientSituation"
            value={reponse[10]}
            onChange={(e) => handleChangeReponse(10, e.target.value)}
            textarea
          />
        </fieldset>

        {/* Section 3: Compétences techniques */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Compétences Techniques</legend>
          
          <FormField 
            label="Pourquoi avez-vous étudié l'ingénierie des données ?"
            name="whyDataEngineering"
            value={reponse[11]}
            onChange={(e) => handleChangeReponse(11, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quels sont les problèmes courants auxquels vous avez été confrontés en tant qu'ingénieur de données ?"
            name="commonProblems"
            value={reponse[12]}
            onChange={(e) => handleChangeReponse(12, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Avez-vous travaillé sur un projet from scratch (un projet qui a commencé de 0) ? Détails sur ce projet, technologies utilisées, taille d'équipe, méthodes de travail ?"
            name="scratchProject"
            value={reponse[13]}
            onChange={(e) => handleChangeReponse(13, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que la modélisation des données ?"
            name="dataModeling"
            value={reponse[14]}
            onChange={(e) => handleChangeReponse(14, e.target.value)}
            textarea
          />
          
          <FormField 
            label="La différence entre les données structurées et les données non structurées ?"
            name="structuredVsUnstructured"
            value={reponse[15]}
            onChange={(e) => handleChangeReponse(15, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Lors du déploiement d'une solution Big Data, quelles étapes devez-vous suivre ?"
            name="bigDataDeployment"
            value={reponse[16]}
            onChange={(e) => handleChangeReponse(16, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quelle est la différence entre NAS et DAS dans le cluster Hadoop ? Fonctionnalités importantes de Hadoop ?"
            name="hadoopFeatures"
            value={reponse[17]}
            onChange={(e) => handleChangeReponse(17, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Maitrisez-vous au moins un outil de Data Visualisation ?"
            name="dataVizTools"
            value={reponse[18]}
            onChange={(e) => handleChangeReponse(18, e.target.value)}
          />
          
          <FormField 
            label="Avec quels outils ETL avez-vous travaillé ? Quelle est votre préférée, et pourquoi ?"
            name="etlTools"
            value={reponse[19]}
            onChange={(e) => handleChangeReponse(19, e.target.value)}
            textarea
          />
          
          <FormField 
            label="La construction d'une base de données NoSQL est-elle meilleure que la construction d'une base de données relationnelle ?"
            name="nosqlVsRelational"
            value={reponse[20]}
            onChange={(e) => handleChangeReponse(20, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quelle est la différence entre le data mining et data analysis ?"
            name="dataMiningVsAnalysis"
            value={reponse[21]}
            onChange={(e) => handleChangeReponse(21, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Exploratory Data Analysis (EDA) - Qu'est-ce que c'est ?"
            name="eda"
            value={reponse[22]}
            onChange={(e) => handleChangeReponse(22, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Expliquer la méthode d'imputation KNN (nearest neighbor imputation)"
            name="knnImputation"
            value={reponse[23]}
            onChange={(e) => handleChangeReponse(23, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Citer quelques indicateurs qui assurent que le modèle de données est bon ?"
            name="modelIndicators"
            value={reponse[24]}
            onChange={(e) => handleChangeReponse(24, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse descriptive ?"
            name="descriptiveAnalysis"
            value={reponse[25]}
            onChange={(e) => handleChangeReponse(25, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse prédictive ?"
            name="predictiveAnalysis"
            value={reponse[26]}
            onChange={(e) => handleChangeReponse(26, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse prescriptive ?"
            name="prescriptiveAnalysis"
            value={reponse[27]}
            onChange={(e) => handleChangeReponse(27, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quelles sont les principales étapes de validation des données ?"
            name="dataValidation"
            value={reponse[28]}
            onChange={(e) => handleChangeReponse(28, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Entre R et Python, lequel choisiriez-vous pour l'analyse de texte ? (Python)"
            name="rVsPython"
            value={reponse[29]}
            onChange={(e) => handleChangeReponse(29, e.target.value)}
          />
          
          <FormField 
            label="De façon générale, quels sont les outils que vous maitrisez comme un data analyst ?"
            name="analystTools"
            value={reponse[30]}
            onChange={(e) => handleChangeReponse(30, e.target.value)}
            textarea
          />
          
          <FormField 
            label="Quelles sont les bases de données que vous avez utilisées ?"
            name="workedDatabases"
            value={reponse[31]}
            onChange={(e) => handleChangeReponse(31, e.target.value)}
          />
          
          <FormField 
            label="Quels sont les systèmes d'exploitation que vous avez utilisés ?"
            name="workedOs"
            value={reponse[32]}
            onChange={(e) => handleChangeReponse(32, e.target.value)}
          />
        </fieldset>

        <button 
          type="submit" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px'
          }}
        >
          Soumettre le formulaire
        </button>
      </form>
    </div>
  );
};

// Composant réutilisable pour les champs de formulaire
const FormField = ({ label, name, value, onChange, type = 'text', textarea = false }) => (
  <div style={{ marginBottom: '15px' }}>
    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>{label}</label>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          minHeight: '80px'
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    )}
  </div>
);

export default CompteIa;