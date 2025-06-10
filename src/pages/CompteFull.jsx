import { useState } from "react";
import React  from "react";


const CompteFull = () => {
  // Données du candidat par défaut
  const defaultCandidate = {
    recruiter: "",
    fullName: "Jean Dupont",
    address: "123 Rue de Paris, 75001 Paris, France",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    drivingLicense: "B",
    age: "32",
    status: "Disponible immédiatement",
    diploma: "Master en Informatique",
    experience: "",
    desiredSalary: "",
    noticePeriod: "",
    visa: "",
    mobility: "",
    otherCompany: "",
    languageLevel: "",
    interestReason: "",
    qualitiesDefects: "",
    idealCandidate: "",
    softSkills: "",
    conflictManagement: "",
    stressManagement: "",
    positionInterest: "",
    careerVision: "",
    moneyVsWork: "",
    previousEmployer: "",
    clientSituation: "",
    fullStackMissions: "",
    frontBackTech: "",
    responsiveAdaptive: "",
    webMobileDiff: "",
    technicalProblems: "",
    workMethods: "",
    databases: "",
    operatingSystems: "",
    reactCreator: "",
    reactFeatures: "",
    scratchProject: "",
    usedTechnologies: "",
    teamSize: "",
    projectMethods: "",
    unitFunctionalTest: "",
    internationalClients: ""
  };

  const [formData, setFormData] = useState(defaultCandidate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Compte-Rendu Développeur Full-Stack</h1>
      
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
          </div>
          
          <div className="space-y-4">
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
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Année d'expérience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Section Questions */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Why are you interresed in our job offer :
            </label>
            <textarea
              name="interestReason"
              value={formData.interestReason}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 2 */}
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

          {/* Question 3 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi etes-vous le candidat idéal pour ce poste ?
            </label>
            <textarea
              name="idealCandidate"
              value={formData.idealCandidate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 4 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Selon vous, quelles sont les compétences non techniques nécessaires
              dans le monde professionnel ? (Soft skills/ facteurs humains)
            </label>
            <textarea
              name="softSkills"
              value={formData.softSkills}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 5 */}
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

          {/* Question 6 */}
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

          {/* Question 7 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              En quoi ce poste vous intéresse t-il ? Qu'est-ce que vous attendez de
              ce poste ? Pourquoi etes-vous a l'écoute du marché? Pourquoi en France
              exactement ?
            </label>
            <textarea
              name="positionInterest"
              value={formData.positionInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 8 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment envisagez-vous votre carrière? (Ou vous voyez-vous dans cinq ans?)
            </label>
            <textarea
              name="careerVision"
              value={formData.careerVision}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 9 */}
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

          {/* Question 10 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Parlez-moi de votre ancien employeur? (emploi actuel)
            </label>
            <textarea
              name="previousEmployer"
              value={formData.previousEmployer}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 11 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Si vous etes face à une situation ou un client vous demande un travail
              dans une courte période et vous savez que c'est impossible de faire
              délivrer le travail à la date prédéfinie comment gérer vous la
              situation ?
            </label>
            <textarea
              name="clientSituation"
              value={formData.clientSituation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 12 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les missions principales d'un développeur web full stack
            </label>
            <textarea
              name="fullStackMissions"
              value={formData.fullStackMissions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 13 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les technologies de developpeur front et back ? 
              1. Quels outils utilisez-vous pour le développement front-end ? 
              2. Quels outils utilisez-vous pour le développement back-end ?
            </label>
            <textarea
              name="frontBackTech"
              value={formData.frontBackTech}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 14 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quel est la différence entre : Un Responsive design Et Un Adaptive design
            </label>
            <textarea
              name="responsiveAdaptive"
              value={formData.responsiveAdaptive}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 15 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les principales différences entre le développement Web et Mobile ?
            </label>
            <textarea
              name="webMobileDiff"
              value={formData.webMobileDiff}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 16 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels étaient les problèmes techniques les plus difficiles que vous rencontrés ?
            </label>
            <textarea
              name="technicalProblems"
              value={formData.technicalProblems}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 17 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont méthodes de travail que vous connaissez ?
            </label>
            <textarea
              name="workMethods"
              value={formData.workMethods}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 18 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Les bases de données maitrisées dans l'IT ?
            </label>
            <textarea
              name="databases"
              value={formData.databases}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 19 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les systèmes d'exploitation que vous avez travaillé sur ?
            </label>
            <textarea
              name="operatingSystems"
              value={formData.operatingSystems}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 20 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Qui a développé React.js ? (React.js est un framework JavaScript open
              source développé par Facebook)
            </label>
            <textarea
              name="reactCreator"
              value={formData.reactCreator}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 21 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les fonctionnalités de React ?
            </label>
            <textarea
              name="reactFeatures"
              value={formData.reactFeatures}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 22 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Est ce que vous avez travaillé sur un projet from scratch 
              (un projet qui a commencé de 0) : Pouvez-vous me donner plus de détails sur ce projet ?
            </label>
            <textarea
              name="scratchProject"
              value={formData.scratchProject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 23 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les technologies que vous avez utilisées ?
            </label>
            <textarea
              name="usedTechnologies"
              value={formData.usedTechnologies}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 24 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Vous étiez une équipe de combien de personnes ?
            </label>
            <textarea
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 25 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles méthodes de travail avez-vous utilisées ?
            </label>
            <textarea
              name="projectMethods"
              value={formData.projectMethods}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 26 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre un test unitaire et un test fonctionnel ?
            </label>
            <textarea
              name="unitFunctionalTest"
              value={formData.unitFunctionalTest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 27 */}
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

export default CompteFull;