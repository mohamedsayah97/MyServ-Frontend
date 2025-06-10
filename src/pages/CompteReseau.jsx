import React from "react";

const CompteReseau = () => {
  // Données du candidat par défaut
  const defaultCandidate = {
    recruiter: "",
    fullName: "Alexandre Dubois",
    address: "101 Boulevard de la Sécurité, 75015 Paris, France",
    email: "alexandre.dubois@example.com",
    phone: "+33 6 23 45 67 89",
    drivingLicense: "B",
    age: "30",
    status: "Disponible immédiatement",
    diploma: "Master en Réseaux et Sécurité",
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
    failureExperience: "",
    whyNetworkEngineers: "",
    networkAttackImpacts: "",
    securitySolutions: "",
    routerVsSwitch: "",
    routingProtocols: "",
    switchingTypes: "",
    hardwarePrecautions: "",
    vpnUsage: "",
    vpnTypes: "",
    firewallRole: "",
    activeDirectory: "",
    ripVsOspf: "",
    stpVsRstp: "",
    migrationProjects: "",
    technicalSupport: "",
    sslVsSsh: "",
    authenticationMethods: "",
    httpsVsSsl: "",
    linuxSecurity: "",
    proxyVsFirewall: "",
    wifiSecurity: "",
    voipSecurity: "",
    databases: "",
    operatingSystems: "",
    workMethods: "",
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
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Compte-Rendu Réseau & Sécurité</h1>
      
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
              Parlez-moi d'un moment où vous avez échoué. Comment avez-vous surmonté cette expérience ?
            </label>
            <textarea
              name="failureExperience"
              value={formData.failureExperience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 15 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Pourquoi faut-il avoir des Ingénieurs Réseaux et sécurité dans une entreprise ?
            </label>
            <textarea
              name="whyNetworkEngineers"
              value={formData.whyNetworkEngineers}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 16 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les impacts d'une attaque en réseau informatique ?
            </label>
            <textarea
              name="networkAttackImpacts"
              value={formData.networkAttackImpacts}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 17 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les solutions de sécurité réseau qui protègent les entreprises contre les attaques informatiques ?
            </label>
            <textarea
              name="securitySolutions"
              value={formData.securitySolutions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 18 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre un Routeur et un Switch ?
            </label>
            <textarea
              name="routerVsSwitch"
              value={formData.routerVsSwitch}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 19 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les protocoles de routage que vous maîtrisez ?
            </label>
            <textarea
              name="routingProtocols"
              value={formData.routingProtocols}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 20 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quels sont les types de Switching que vous maîtrisez ?
            </label>
            <textarea
              name="switchingTypes"
              value={formData.switchingTypes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 21 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles précautions prendrez-vous avant de remplacer un disque dur ou une carte réseau ?
            </label>
            <textarea
              name="hardwarePrecautions"
              value={formData.hardwarePrecautions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 22 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Qu'est-ce qu'un VPN ? Son utilisation ?
            </label>
            <textarea
              name="vpnUsage"
              value={formData.vpnUsage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 23 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Citez les différentes variétés de VPN (VPN site à site, VPN client à site)
            </label>
            <textarea
              name="vpnTypes"
              value={formData.vpnTypes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 24 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quel est le rôle d'un firewall ?
            </label>
            <textarea
              name="firewallRole"
              value={formData.firewallRole}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 25 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              C'est quoi l'Active Directory ?
            </label>
            <textarea
              name="activeDirectory"
              value={formData.activeDirectory}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 26 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre RIP et OSPF ?
            </label>
            <textarea
              name="ripVsOspf"
              value={formData.ripVsOspf}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 27 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre STP et RSTP ?
            </label>
            <textarea
              name="stpVsRstp"
              value={formData.stpVsRstp}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 28 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Avez-vous travaillé sur des projets de migration d'infrastructures ? Parlez-moi de ces projets
            </label>
            <textarea
              name="migrationProjects"
              value={formData.migrationProjects}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 29 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Avez-vous fait du support technique ? Quel niveau ? N2/N3
            </label>
            <textarea
              name="technicalSupport"
              value={formData.technicalSupport}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 30 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelle est la différence entre le SSL et SSH ? (SSL:Secure Sockets Layer, SSH:Secure Shell)
            </label>
            <textarea
              name="sslVsSsh"
              value={formData.sslVsSsh}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 31 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les méthodes d'authentification des utilisateurs les plus sûres ?
            </label>
            <textarea
              name="authenticationMethods"
              value={formData.authenticationMethods}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 32 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              En termes de sécurité, HTTPS ou SSL lequel est le plus efficace ?
            </label>
            <textarea
              name="httpsVsSsl"
              value={formData.httpsVsSsl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 33 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Quelles sont les trois actions clés que vous devez effectuer pour protéger un serveur Linux ?
            </label>
            <textarea
              name="linuxSecurity"
              value={formData.linuxSecurity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 34 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Qu'est-ce qui distingue un serveur proxy d'un pare-feu ?
            </label>
            <textarea
              name="proxyVsFirewall"
              value={formData.proxyVsFirewall}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 35 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Et pour le WIFI ?
            </label>
            <textarea
              name="wifiSecurity"
              value={formData.wifiSecurity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 36 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Et pour la partie VoIP ?
            </label>
            <textarea
              name="voipSecurity"
              value={formData.voipSecurity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 37 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Les bases de données que vous maîtrisez
            </label>
            <textarea
              name="databases"
              value={formData.databases}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 38 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Les systèmes d'exploitation que vous avez travaillé sur ?
            </label>
            <textarea
              name="operatingSystems"
              value={formData.operatingSystems}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 39 */}
          <div className="p-6 bg-white rounded-lg shadow">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Les méthodes de travail que vous avez utilisées ?
            </label>
            <textarea
              name="workMethods"
              value={formData.workMethods}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Question 40 */}
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

export default CompteReseau;