import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Line } from "react-chartjs-2"
//importing data from JSON files
import sourceData from "../data/sourceData.json"
import revueData from "../data/revueData.json"

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 h-screen">
      {/* Container Chart 1 - Agrandi */}
      <div className="chart1 bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Talent Par Spécialité</h2>
        <div className="flex-grow">
          <Bar 
            data={{
              //mapping labels and data from sourceData
              labels: sourceData.map((item) => item.label),
              datasets: [
                {
                  label: 'Talent Par Spécialité',
                  //mapping data from sourceData
                  data: sourceData.map((item) => item.value),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
      </div>
      
      {/* Container Chart 2 - Agrandi */}
      <div className="chart2 bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Entretien Par Mois</h2>
        <div className="flex-grow">
          <Line 
            data={{
              //mapping labels and data from revueData
              labels: revueData.map((item) => item.label),
              datasets: [
                {
                  label: 'Entretien Par Mois',
                  //mapping data from revueData
                  data: revueData.map((item) => item.nb),
                  backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard