import React from "react";

const CompteErp = () => {
  // Données du candidat par défaut
  const defaultCandidate = {
    recruiter: "",
    fullName: "Thomas Martin",
    address: "789 Rue des ERP, 31000 Toulouse, France",
    email: "thomas.martin@example.com",
    phone: "+33 6 45 67 89 01",
    drivingLicense: "B",
    age: "35",
    status: "Disponible sous 2 semaines",
    diploma: "Master en Systèmes d'Information",
    experience: "",
    whyListening: "",
    qualitiesDefects: "",
    idealCandidate: "",
    careerVision: "",
    softSkills: "",
    conflictManagement: "",
    stressManagement: "",
    positionInterest: "",
    moneyVsWork: "",
    previousEmployer: "",
    marketListening: "",
    clientSituation: "",
    whySapConsultant: "",
    isSapActData: "",
    sapConsultantMissions: "",
    sapModules: "",
    sapCrm: "",
    sapChallenge: "",
    clientNeeds: "",
    dataSecurity: "",
    sapVersion: "",
    sapIntegration: "",
    internationalClients: ""
  };

  const [formData, setFormData] = React.useState(defaultCandidate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Compte-Rendu Consultant SAP</h1>
      
      <div className="space-y-6">
        {/* Informations de base */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recruteur</label>
              <input
                type="text"
                name="recruiter"
                value={formData.recruiter}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom & Prénom</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse mail</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Numero Tel</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permis de Conduire</label>
              <input
                type="text"
                name="drivingLicense"
                value={formData.drivingLicense}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diplome</label>
              <input
                type="text"
                name="diploma"
                value={formData.diploma}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Section Questions */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-sm font-medium text-gray-700 mb-1">Année d'expérience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Question 2 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi vous êtes à l'écoute :
            </label>
            <textarea
              name="whyListening"
              value={formData.whyListening}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 3 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont vos Qualités / Défauts ? (défauts: pistes d'amélioration actuelles)
            </label>
            <textarea
              name="qualitiesDefects"
              value={formData.qualitiesDefects}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 4 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi êtes-vous le candidat idéal pour ce poste ?
            </label>
            <textarea
              name="idealCandidate"
              value={formData.idealCandidate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 5 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment envisagez-vous votre carrière ? (Où vous voyez-vous dans cinq ans ?)
            </label>
            <textarea
              name="careerVision"
              value={formData.careerVision}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 6 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Selon vous, quelles sont les compétences non techniques nécessaires dans le monde professionnel ? (soft skills/ facteurs humains)
            </label>
            <textarea
              name="softSkills"
              value={formData.softSkills}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 7 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment gérez-vous un conflit au travail ?
            </label>
            <textarea
              name="conflictManagement"
              value={formData.conflictManagement}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 8 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment gérez-vous une situation de stress ?
            </label>
            <textarea
              name="stressManagement"
              value={formData.stressManagement}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 9 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              En quoi ce poste vous intéresse-t-il ? Qu'est-ce que vous attendez de ce poste ?
            </label>
            <textarea
              name="positionInterest"
              value={formData.positionInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 10 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Entre l'argent et le travail lequel vous semble le plus important ?
            </label>
            <textarea
              name="moneyVsWork"
              value={formData.moneyVsWork}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 11 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Parlez-moi de votre ancien employeur ? (emploi actuel)
            </label>
            <textarea
              name="previousEmployer"
              value={formData.previousEmployer}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 12 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi êtes-vous à l'écoute du marché ? Pourquoi en France exactement ?
            </label>
            <textarea
              name="marketListening"
              value={formData.marketListening}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 13 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Si vous êtes face à une situation où un client vous demande un travail dans une courte période et vous savez que c'est impossible de faire délivrer le travail à la date prédéfinie comment gérez-vous la situation ?
            </label>
            <textarea
              name="clientSituation"
              value={formData.clientSituation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 14 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi avez-vous choisi d'être un consultant technico fonctionnel SAP ?
            </label>
            <textarea
              name="whySapConsultant"
              value={formData.whySapConsultant}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 15 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Est-ce que SAP Act est une donnée ?
            </label>
            <textarea
              name="isSapActData"
              value={formData.isSapActData}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 16 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les missions d'un consultant technico fonctionnel SAP dans une entreprise ?
            </label>
            <textarea
              name="sapConsultantMissions"
              value={formData.sapConsultantMissions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 17 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les différents modules de SAP ?
            </label>
            <textarea
              name="sapModules"
              value={formData.sapModules}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 18 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Que représente le CRM pour SAP ?
            </label>
            <textarea
              name="sapCrm"
              value={formData.sapCrm}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 19 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pouvez-vous me parler d'un défi majeur lié à SAP que vous avez résolu ?
            </label>
            <textarea
              name="sapChallenge"
              value={formData.sapChallenge}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 20 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment déterminez-vous les besoins des clients afin d'apporter des solutions adaptées ?
            </label>
            <textarea
              name="clientNeeds"
              value={formData.clientNeeds}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 21 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment assurez-vous la sécurité des données intégrées dans un système SAP ? (firewall/ Stormshield/ palo alto)
            </label>
            <textarea
              name="dataSecurity"
              value={formData.dataSecurity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 22 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Avec quelle version de SAP avez-vous le plus d'expérience de travail ?
            </label>
            <textarea
              name="sapVersion"
              value={formData.sapVersion}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 23 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pouvez-vous expliquer les méthodes que vous appliquez pour assurer une intégration SAP fluide ?
            </label>
            <textarea
              name="sapIntegration"
              value={formData.sapIntegration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 24 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Avez-vous une expérience de travail avec des clients internationaux ?
            </label>
            <textarea
              name="internationalClients"
              value={formData.internationalClients}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompteErp;