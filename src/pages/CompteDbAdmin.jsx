import React, { useState } from 'react';

const CompteDbAdmin = () => {
  // État initial pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    // Section 1: Informations personnelles
    recruiter: '',
    fullName: 'test',
    address: 'test',
    email: 'test@test.com',
    phone: '',
    drivingLicense: '',
    age: '28',
    status: 'célibataire',
    
    // Section 2: Formation et expérience
    diploma: 'test',
    experienceYears: '',
    desiredSalary: '',
    noticePeriod: '',
    
    // Section 3: Mobilité et langues
    visa: '',
    mobility: '',
    otherCompanies: '',
    languageLevel: '',
    
    // Section 4: Questions motivationnelles
    jobInterest: '',
    qualitiesDefects: '',
    idealCandidate: '',
    softSkills: '',
    listeningSkills: '',
    careerPlan: '',
    
    // Section 5: Compétences techniques
    cloudDbExperience: '',
    skillsToImprove: '',
    sqlExplanation: '',
    oracleExplanation: '',
    osSkills: '',
    dbSkills: '',
    scriptingKnowledge: '',
    techSupportLevel: '',
    internationalClients: ''
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
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Compte-Rendu DataBase Admin</h1>
      
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
        </fieldset>

        {/* Section 2: Formation et expérience */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Formation et Expérience</legend>
          
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
          
          <FormField 
            label="Salaire Souhaité annuel Brut"
            name="desiredSalary"
            value={formData.desiredSalary}
            onChange={handleChange}
          />
          
          <FormField 
            label="Préavis"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
          />
        </fieldset>

        {/* Section 3: Mobilité et langues */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Mobilité et Langues</legend>
          
          <FormField 
            label="VISA"
            name="visa"
            value={formData.visa}
            onChange={handleChange}
          />
          
          <FormField 
            label="Mobilité (Pour les résidents en France)"
            name="mobility"
            value={formData.mobility}
            onChange={handleChange}
          />
          
          <FormField 
            label="Autre boite"
            name="otherCompanies"
            value={formData.otherCompanies}
            onChange={handleChange}
          />
          
          <FormField 
            label="Niveau Francais & Anglais"
            name="languageLevel"
            value={formData.languageLevel}
            onChange={handleChange}
          />
        </fieldset>

        {/* Section 4: Questions motivationnelles */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Questions Motivationnelles</legend>
          
          <FormField 
            label="Why are you interresed in our job offer :"
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
            label="Pourquoi etes-vous le candidat idéal pour ce poste ?"
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
            label="Pourquoi vous etes à l'écoute ?"
            name="listeningSkills"
            value={formData.listeningSkills}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Comment envisagez-vous votre carrière ? (Ou vous voyez-vous dans cinq ans ?)"
            name="careerPlan"
            value={formData.careerPlan}
            onChange={handleChange}
            textarea
          />
        </fieldset>

        {/* Section 5: Compétences techniques */}
        <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Compétences Techniques</legend>
          
          <FormField 
            label="Décrivez votre expérience des bases de données en cloud"
            name="cloudDbExperience"
            value={formData.cloudDbExperience}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quelles sont les compétences DBA que vous devez améliorer ?"
            name="skillsToImprove"
            value={formData.skillsToImprove}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Expliquez ce qu'est SQL"
            name="sqlExplanation"
            value={formData.sqlExplanation}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Expliquez ce qu'est Oracle"
            name="oracleExplanation"
            value={formData.oracleExplanation}
            onChange={handleChange}
            textarea
          />
          
          <FormField 
            label="Quels sont les systèmes d'exploitation que vous maitrisez ?"
            name="osSkills"
            value={formData.osSkills}
            onChange={handleChange}
          />
          
          <FormField 
            label="Quelles sont les bases de données que vous maitrisez ?"
            name="dbSkills"
            value={formData.dbSkills}
            onChange={handleChange}
          />
          
          <FormField 
            label="Est ce que vous connaissez le scripting ?"
            name="scriptingKnowledge"
            value={formData.scriptingKnowledge}
            onChange={handleChange}
          />
          
          <FormField 
            label="Avez vous fait du support techniques ? Quel niveau ? N2/N3"
            name="techSupportLevel"
            value={formData.techSupportLevel}
            onChange={handleChange}
          />
          
          <FormField 
            label="Est-ce que vous avez travailler avec des clients internationaux ?"
            name="internationalClients"
            value={formData.internationalClients}
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

export default CompteDbAdmin;