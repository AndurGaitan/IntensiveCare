import React from "react";
import { Activity, Heart, Thermometer, Wind, BicepsFlexed } from "lucide-react";

export const PatientCard = ({ patient }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Stable":
        return "bg-green-100 text-green-700";
      case "Critical":
        return "bg-red-100 text-red-700";
      case "Recovering":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold">{patient.name}</h3>
          <p className="text-sm text-gray-600">Room {patient.roomNumber}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(patient.status)}`}>
          {patient.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{patient.diagnosis}</p>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Heart className="w-4 h-4 text-red-500" />
          <span className="text-gray-600">Heart Rate:</span>
          <span className="font-medium">{patient.vitalSigns.heartRate} bpm</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Activity className="w-4 h-4 text-blue-500" />
          <span className="text-gray-600">BP:</span>
          <span className="font-medium">{patient.vitalSigns.bloodPressure}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="w-4 h-4 text-orange-500" />
          <span className="text-gray-600">Temp:</span>
          <span className="font-medium">{patient.vitalSigns.temperature}°C</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Wind className="w-4 h-4 text-purple-500" />
          <span className="text-gray-600">O₂ Level:</span>
          <span className="font-medium">{patient.vitalSigns.oxygenLevel}%</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <BicepsFlexed className="w-4 h-4 text-orange-500" />
          <span className="text-gray-600">MRC:</span>
          <span className="font-medium">{patient.vitalSigns.oxygenLevel}</span>
        </div>
      </div>
    </div>
  );
};
