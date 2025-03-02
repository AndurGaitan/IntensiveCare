import React from "react";
import { Activity, AlertCircle, TrendingUp, Brain } from "lucide-react";

const ClinicalScoresPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Scores</h2>
      <div className="space-y-4">
        {/* SOFA Score */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="font-medium">SOFA Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">8</span>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                Alert
              </span>
            </div>
          </div>
          <div className="text-sm space-y-1 text-gray-600">
            <div className="flex justify-between">
              <span>Respiratory: 2</span>
              <span>Coagulation: 1</span>
            </div>
            <div className="flex justify-between">
              <span>Cardiovascular: 2</span>
              <span>Renal: 1</span>
            </div>
          </div>
        </div>
         {/* APACHE II Score */}
         <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="font-medium">APACHE II</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">15</span>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                High Risk
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Predicted mortality: 25%</p>
        </div>
        {/* Glasgow Coma Scale */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Glasgow Coma Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">13</span>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                Mild
              </span>
            </div>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between text-gray-600">
              <span>Eye Opening: 4</span>
              <span>Verbal: 4</span>
              <span>Motor: 5</span>
            </div>
          </div>
        </div>
        {/* ROX Index */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-medium">ROX Index</span>
            </div>
            <span className="text-xl font-bold">4.8</span>
          </div>
          <p className="text-sm text-gray-600">SpO2/FiO2: 240, RR: 20</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalScoresPanel;

