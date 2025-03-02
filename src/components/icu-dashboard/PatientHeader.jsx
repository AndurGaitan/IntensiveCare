import React from "react";
import { User, Calendar, Hash, MapPin, FileText, Activity } from "lucide-react";

const PatientHeader = ({ patient }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#0A89FB]" />
            <h1 className="text-2xl font-bold">{patient.name}</h1>
            <span className="px-2 py-1 rounded-full bg-gray-100 text-sm">
              {patient.gender}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Age: {patient.age}</span>
            </div>
            <div className="flex items-center gap-1">
              <Hash className="w-4 h-4" />
              <span>MRN: {patient.mrn}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>
                Unit: {patient.unit}, Bed: {patient.bedNumber}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0A89FB]" />
            <h2 className="font-semibold">Diagnostico Primario</h2>
          </div>
          <p className="text-sm">{patient.primaryDiagnosis}</p>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#0A89FB]" />
            <h2 className="font-semibold">Comorbilidades</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {patient.comorbidities.map((condition) => (
              <span
                key={condition}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader
