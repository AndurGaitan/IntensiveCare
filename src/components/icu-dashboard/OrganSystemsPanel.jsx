import React from "react";
import { Heart, Brain, Activity, Droplets, Thermometer, Wind } from "lucide-react";

const OrganSystemsPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Estado de los Sistemas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cardiovascular System */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-medium">Cardiovascular</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Presion Arterial</span>
              <span className="font-medium">128/85 mmHg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frecuencia Cardiaca</span>
              <span className="font-medium">82 bpm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">MAP</span>
              <span className="font-medium">95 mmHg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CVP</span>
              <span className="font-medium">8 mmHg</span>
            </div>
          </div>
        </div>
        {/* Respiratory System */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Wind className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Respiratorio</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">SpO2</span>
              <span className="font-medium">98%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frecuencia Respiratoria</span>
              <span className="font-medium">16 bpm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FiO2</span>
              <span className="font-medium">40%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">PEEP</span>
              <span className="font-medium">5 cmH2O</span>
            </div>
          </div>
        </div>
        {/* Neurological System */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Neurologico</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">GCS</span>
              <span className="font-medium">13 (E4V4M5)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Respuesta Pupilar</span>
              <span className="font-medium">Reactive</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sedation</span>
              <span className="font-medium">RASS -1</span>
            </div>
          </div>
        </div>
        {/* Renal System */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Renal</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Urine Output</span>
              <span className="font-medium">0.8 mL/kg/h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fluid Balance</span>
              <span className="font-medium">+500 mL/24h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Creatinine</span>
              <span className="font-medium">1.1 mg/dL</span>
            </div>
          </div>
        </div>
        {/* Metabolic Status */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-green-500" />
            <span className="font-medium">Metabolico</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Blood Glucose</span>
              <span className="font-medium">110 mg/dL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lactate</span>
              <span className="font-medium">2.5 mmol/L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">pH</span>
              <span className="font-medium">7.35</span>
            </div>
          </div>
        </div>
        {/* Temperature/Infection */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Thermometer className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Temperature/Infection</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature</span>
              <span className="font-medium">37.2°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">WBC</span>
              <span className="font-medium">11.2 x10⁹/L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CRP</span>
              <span className="font-medium">85 mg/L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganSystemsPanel;
