import React, { useState } from "react";

const CompteCS = () => {
 


  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState(null);
  const [reponse, setReponse] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChangeReponse = (index, value) => {
    setReponse((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Compte-Rendu Analyste en Cybersécurité</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg">
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
                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image du candidat</label>
              <input
                type="file"
                name="imageCandidat"
                accept="image/*"
                value={formData.imageCandidat}
                onChange={fileChangeHandler}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                
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
              value={reponse[0]}
               onChange={(e) => handleChangeReponse(0, e.target.value)}
               textarea
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
              Pourquoi faut-il avoir des Analystes en Cybersécurité dans une entreprise ?
            </label>
            <textarea
              name="whySecurityAnalysts"
              value={formData.whySecurityAnalysts}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 7 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels outils et techniques utilisez-vous pour détecter et prévenir les incidents de sécurité ?
            </label>
            <textarea
              name="securityTools"
              value={formData.securityTools}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 8 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Parlez-moi d'une situation où vous avez géré avec succès une attaque de sécurité ?
            </label>
            <textarea
              name="attackSituation"
              value={formData.attackSituation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Question 9 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Comment vous assurez-vous de rester en conformité avec les normes et réglementations en matière de cybersécurité ?
            </label>
            <textarea
              name="compliance"
              value={formData.compliance}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 10 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre IDS et IPS ?
            </label>
            <textarea
              name="idsIpsDiff"
              value={formData.idsIpsDiff}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 11 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Qu'est-ce qu'un VPN ? SSL ? IPSEC ?
            </label>
            <textarea
              name="vpnSslIpsec"
              value={formData.vpnSslIpsec}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 12 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les scanners de vulnérabilités que vous maîtrisez ?
            </label>
            <textarea
              name="vulnerabilityScanners"
              value={formData.vulnerabilityScanners}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 13 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les logiciels antivirus que vous maîtrisez ?
            </label>
            <textarea
              name="antivirus"
              value={formData.antivirus}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 14 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les solutions de sécurité que vous maîtrisez ? Est-ce que vous maîtrisez Splunk ?
            </label>
            <textarea
              name="securitySolutions"
              value={formData.securitySolutions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 15 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Avez-vous fait du support technique ? Quel niveau ? N2/N3 ?
            </label>
            <textarea
              name="technicalSupport"
              value={formData.technicalSupport}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 16 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Est-ce que vous avez travaillé avec des clients internationaux ?
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
      </form>
    </div>
  );
};

export default CompteCS;