import React, { useEffect, useState } from 'react'
import { instance } from '../../config/axios'
const Ia = () => {
  const [candidate, setCandidate] = useState([])
  useEffect(() => {
      const fetchCandidate = async () => {
        try {
          const res = await instance.get('/candidates/list')
          setCandidate(res.data.data)
          // console.log(res.data)

        } catch (error) {
          console.error("Error fetching candidate:", error)
        }
      }
      fetchCandidate()
    }, [])
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <button className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300">
        Ajout Candidat
      </button> */}
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b font-semibold text-left">Nom</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Prénom</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Date Entretien</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Heure</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Statut</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Commentaire RH</th>
              {/* <th className="py-3 px-4 border-b font-semibold text-left">Recruteur</th> */}
              <th className="py-3 px-4 border-b font-semibold text-left">CV</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Compte Rendu</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Action</th>
              <th className="py-3 px-4 border-b font-semibold text-left">Plus</th>
            </tr>
          </thead>
          <tbody>
            {candidate.map((cand, index) => {
              return(
               <tr key={index} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">{cand.nom}</td>
              <td className="py-3 px-4 border-b">{cand.prenom}</td>
              <td className="py-3 px-4 border-b">{cand.dateEntretien}</td>
              <td className="py-3 px-4 border-b">{cand.heureEntretien}</td>
              <td className="py-3 px-4 border-b">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {cand.feedback}
                </span>
              </td>
              <td className="py-3 px-4 border-b">{cand.commentaireRh}</td>
              {/* <td className="py-3 px-4 border-b">{cand.recruteur}</td> */}
              <td className="py-3 px-4 border-b">
                <a href="#" className="text-blue-600 hover:underline">Voir CV</a>
              </td>
              <td className="py-3 px-4 border-b">
                <a href="#" className="text-blue-600 hover:underline">Voir Compte Rendu</a>
              </td>
              <td className="py-3 px-4 border-b space-x-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-sm">
                  Modifier
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm">
                  Supprimer
                </button>  
              </td>
              <td className="py-3 px-4 border-b">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded text-sm">
                  Plus
                </button>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ia