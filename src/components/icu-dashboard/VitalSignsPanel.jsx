import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Heart, Activity, Thermometer } from "lucide-react";

const mockVitalData = [
  { time: "08:00", hr: 82, bp: 128, rr: 16, temp: 37.2, spo2: 98 },
  { time: "09:00", hr: 78, bp: 125, rr: 18, temp: 37.1, spo2: 97 },
  { time: "10:00", hr: 80, bp: 130, rr: 16, temp: 37.3, spo2: 98 },
  { time: "11:00", hr: 85, bp: 132, rr: 17, temp: 37.2, spo2: 99 },
  { time: "12:00", hr: 79, bp: 127, rr: 15, temp: 37.1, spo2: 98 },
];

const VitalSignsPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Monitorizacion de Signos Vitales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-medium">Frecuencia Cardiaca</span>
          </div>
          <div className="text-2xl font-bold">
            82 <span className="text-sm font-normal text-gray-600">lpm</span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Presion Arterial</span>
          </div>
          <div className="text-2xl font-bold">
            128/85 <span className="text-sm font-normal text-gray-600">mmHg</span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Frecuencia Respiratoria</span>
          </div>
          <div className="text-2xl font-bold">
            16 <span className="text-sm font-normal text-gray-600">rpm</span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Temperatura</span>
          </div>
          <div className="text-2xl font-bold">
            37.2 <span className="text-sm font-normal text-gray-600">°C</span>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockVitalData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hr" stroke="#ef4444" name="Frecuencia Cardiaca" />
            <Line type="monotone" dataKey="bp" stroke="#3b82f6" name="Presion Arterial" />
            <Line type="monotone" dataKey="rr" stroke="#8b5cf6" name="Frecuencia Respiratoria" />
            <Line type="monotone" dataKey="temp" stroke="#f97316" name="Temperatura" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VitalSignsPanel