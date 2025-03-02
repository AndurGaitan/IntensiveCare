import React from "react";
import { Droplets, Heart, Activity, Beaker } from "lucide-react";

const LabResultsPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Resultados de Laboratorio</h2>
      <div className="space-y-4">
        
         {/* Blood Gases */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Beaker className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Gases Arteriales</span>
            </div>
            <span className="text-xs text-gray-500">Updated 1h ago</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">pH</span>
                <span className="font-medium">7.35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PaO2</span>
                <span className="font-medium">95 mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PaCO2</span>
                <span className="font-medium">40 mmHg</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">HCO3</span>
                <span className="font-medium">24 mEq/L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">BE</span>
                <span className="font-medium">-2 mEq/L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lactate</span>
                <span className="font-medium text-yellow-600">2.5 mmol/L</span>
              </div>
            </div>
          </div>
        </div>
        {/* Complete Blood Count */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-red-500" />
              <span className="font-medium">Complete Blood Count</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">WBC</span>
                <span className="font-medium text-red-600">11.2 x10⁹/L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hb</span>
                <span className="font-medium">13.5 g/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platelets</span>
                <span className="font-medium">250 x10⁹/L</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Neutrophils</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lymphocytes</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hematocrit</span>
                <span className="font-medium">42%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Biochemistry */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="font-medium">Biochemistry</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Glucose</span>
                <span className="font-medium">110 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Creatinine</span>
                <span className="font-medium">1.1 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">BUN</span>
                <span className="font-medium">18 mg/dL</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Na+</span>
                <span className="font-medium">138 mEq/L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">K+</span>
                <span className="font-medium">4.2 mEq/L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ca++</span>
                <span className="font-medium">9.5 mg/dL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResultsPanel;