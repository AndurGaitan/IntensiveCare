import { AlertCircle, Mic, Search, UserPlus } from "lucide-react";

const DashboardHome = () => {
  const patients = [{
    id:1,
    name:"Pedro",
    location:"UCI",
    cama:2,
    fc: 90,
    presion:120,
    oxigenacion:100
  },
  { 
    id:2,
    name:"Sandro",
    location:"UCI",
    cama:3,
    fc: 100,
    presion:200,
    oxigenacion:97
  },
  {
    id:3,
    name:"Quique",
    location:"UCI",
    cama:5,
    fc: 80,
    presion:120,
    oxigenacion:95
  },
]
  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search patients, records, or medical protocols..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A89FB]" />
        </div>
        <button className="px-4 py-2 bg-[#0A89FB] text-white rounded-lg flex items-center space-x-2 hover:bg-[#0A89FB]/90">
          <Mic className="h-5 w-5" />
          <span>Voice Input</span>
        </button>
        <button className="px-4 py-2 bg-[#DCFCE7] text-black rounded-lg flex items-center space-x-2 hover:bg-[#9FF5BD]/90">
          <UserPlus className="h-5 w-5"/>
          <span>Add Patient</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patients) => (
          <div key={patients.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">Patient {patients.name}</h3>
                <p className="text-sm text-gray-600">Room {patients.cama}</p>
              </div>
              {/* <span className={`px-2 py-1 rounded-full text-xs ${i % 2 === 0 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {i % 2 === 0 ? "Stable" : "Monitoring"}
              </span> */}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Heart Rate</span>
                <span>85 bpm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Blood Pressure</span>
                <span>120/80</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Oxygen Level</span>
                <span>98%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-red-700 mb-2">
          <AlertCircle className="h-5 w-5" />
          <h3 className="font-semibold">Critical Alerts</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white p-3 rounded border border-red-100">
            <div>
              <p className="font-medium">Room 204 - John Doe</p>
              <p className="text-sm text-gray-600">Abnormal vital signs detected</p>
            </div>
            <button className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome