import React, { useState } from 'react';

const CompteIa = () => {
  // État initial pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    // Section 1: Informations personnelles
    recruiter: '',
    fullName: '',
    address: '',
    email: '',
    phone: '',
    drivingLicense: '',
    age: '',
    status: '',
    diploma: '',
    experienceYears: '',

    // Section 2: Questions motivationnelles
    jobInterest: '',
    qualitiesDefects: '',
    idealCandidate: '',
    softSkills: '',
    conflictManagement: '',
    stressManagement: '',
    positionInterest: '',
    careerPlan: '',
    moneyVsWork: '',
    previousEmployer: '',
    clientSituation: '',
    
    // Section 3: Formation et compétences
    whyDataEngineering: '',
    commonProblems: '',
    scratchProject: '',
    dataModeling: '',
    structuredVsUnstructured: '',
    bigDataDeployment: '',
    hadoopFeatures: '',
    dataVizTools: '',
    etlTools: '',
    nosqlVsRelational: '',
    dataMiningVsAnalysis: '',
    eda: '',
    knnImputation: '',
    modelIndicators: '',
    descriptiveAnalysis: '',
    predictiveAnalysis: '',
    prescriptiveAnalysis: '',
    dataValidation: '',
    rVsPython: '',
    analystTools: '',
    workedDatabases: '',
    workedOs: ''
  });

  // Gestionnaire de changement pour tous les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pourriez ajouter la logique pour envoyer les données à un serveur
    alert('Formulaire soumis avec succès!');
  };

  return (
    <div className="compte-rendu-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Compte-Rendu Ingénieur en Intelligence Artificielle</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Section 1: Informations personnelles */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Informations Personnelles</legend>
          
          <FormField 
            label="Recruteur"
            name="recruiter"
            value={formData.recruiter}
            onChange={handleChange}
          />
          
          <FormField 
            label="Nom & Prénom"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          
          <FormField 
            label="Adresse"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          
          <FormField 
            label="Adresse mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          
          <FormField 
            label="Numero Tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
          />
          
          <FormField 
            label="Permis de Conduire"
            name="drivingLicense"
            value={formData.drivingLicense}
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
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
          
          <FormField 
            label="Diplome"
            name="diploma"
            value={formData.diploma}
            onChange={handleChange}
          />
          
          <FormField 
            label="Année d'expérience"
            name="experienceYears"
            value={formData.experienceYears}
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
            value={formData.jobInterest}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quels sont vos Qualités / Défauts ? (défauts: pistes d'amélioration actuelles)"
            name="qualitiesDefects"
            value={formData.qualitiesDefects}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Pourquoi êtes-vous le candidat idéal pour ce poste ?"
            name="idealCandidate"
            value={formData.idealCandidate}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Selon vous, quelles sont les compétences non techniques nécessaires dans le monde professionnel ? (Soft skills/ facteurs humains)"
            name="softSkills"
            value={formData.softSkills}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Comment gérez-vous un conflit au travail ?"
            name="conflictManagement"
            value={formData.conflictManagement}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Comment gérez-vous une situation de stress ?"
            name="stressManagement"
            value={formData.stressManagement}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="En quoi ce poste vous intéresse-t-il ? Qu'attendez-vous de ce poste ? Pourquoi êtes-vous à l'écoute du marché? Pourquoi en France exactement ?"
            name="positionInterest"
            value={formData.positionInterest}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Comment envisagez-vous votre carrière? (Où vous voyez-vous dans cinq ans?)"
            name="careerPlan"
            value={formData.careerPlan}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Entre l'argent et le travail lequel vous semble le plus important ?"
            name="moneyVsWork"
            value={formData.moneyVsWork}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Parlez-moi de votre ancien employeur? (emploi actuel)"
            name="previousEmployer"
            value={formData.previousEmployer}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Si vous êtes face à une situation où un client vous demande un travail dans une courte période et vous savez que c'est impossible de faire délivrer le travail à la date prédéfinie, comment gérez-vous la situation ?"
            name="clientSituation"
            value={formData.clientSituation}
            onChange={handleChange}
            textarea
          />
        </fieldset>

        {/* Section 3: Compétences techniques */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Compétences Techniques</legend>
          
          <FormField 
            label="Pourquoi avez-vous étudié l'ingénierie des données ?"
            name="whyDataEngineering"
            value={formData.whyDataEngineering}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quels sont les problèmes courants auxquels vous avez été confrontés en tant qu'ingénieur de données ?"
            name="commonProblems"
            value={formData.commonProblems}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Avez-vous travaillé sur un projet from scratch (un projet qui a commencé de 0) ? Détails sur ce projet, technologies utilisées, taille d'équipe, méthodes de travail ?"
            name="scratchProject"
            value={formData.scratchProject}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que la modélisation des données ?"
            name="dataModeling"
            value={formData.dataModeling}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="La différence entre les données structurées et les données non structurées ?"
            name="structuredVsUnstructured"
            value={formData.structuredVsUnstructured}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Lors du déploiement d'une solution Big Data, quelles étapes devez-vous suivre ?"
            name="bigDataDeployment"
            value={formData.bigDataDeployment}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quelle est la différence entre NAS et DAS dans le cluster Hadoop ? Fonctionnalités importantes de Hadoop ?"
            name="hadoopFeatures"
            value={formData.hadoopFeatures}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Maitrisez-vous au moins un outil de Data Visualisation ?"
            name="dataVizTools"
            value={formData.dataVizTools}
            onChange={handleChange}
          />
          
          <FormField 
            label="Avec quels outils ETL avez-vous travaillé ? Quelle est votre préférée, et pourquoi ?"
            name="etlTools"
            value={formData.etlTools}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="La construction d'une base de données NoSQL est-elle meilleure que la construction d'une base de données relationnelle ?"
            name="nosqlVsRelational"
            value={formData.nosqlVsRelational}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quelle est la différence entre le data mining et data analysis ?"
            name="dataMiningVsAnalysis"
            value={formData.dataMiningVsAnalysis}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Exploratory Data Analysis (EDA) - Qu'est-ce que c'est ?"
            name="eda"
            value={formData.eda}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Expliquer la méthode d'imputation KNN (nearest neighbor imputation)"
            name="knnImputation"
            value={formData.knnImputation}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Citer quelques indicateurs qui assurent que le modèle de données est bon ?"
            name="modelIndicators"
            value={formData.modelIndicators}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse descriptive ?"
            name="descriptiveAnalysis"
            value={formData.descriptiveAnalysis}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse prédictive ?"
            name="predictiveAnalysis"
            value={formData.predictiveAnalysis}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Qu'est-ce que l'analyse prescriptive ?"
            name="prescriptiveAnalysis"
            value={formData.prescriptiveAnalysis}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quelles sont les principales étapes de validation des données ?"
            name="dataValidation"
            value={formData.dataValidation}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Entre R et Python, lequel choisiriez-vous pour l'analyse de texte ? (Python)"
            name="rVsPython"
            value={formData.rVsPython}
            onChange={handleChange}
          />
          
          <FormField 
            label="De façon générale, quels sont les outils que vous maitrisez comme un data analyst ?"
            name="analystTools"
            value={formData.analystTools}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quelles sont les bases de données que vous avez utilisées ?"
            name="workedDatabases"
            value={formData.workedDatabases}
            onChange={handleChange}
          />
          
          <FormField 
            label="Quels sont les systèmes d'exploitation que vous avez utilisés ?"
            name="workedOs"
            value={formData.workedOs}
            onChange={handleChange}
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