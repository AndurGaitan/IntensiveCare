import React, { useState } from "react";
import  PatientHeader  from "./PatientHeader";
import  VitalSignsPanel  from "./VitalSignsPanel";
import  ClinicalScoresPanel  from "./ClinicalScoresPanel";
import  LabResultsPanel  from "./LabResultsPanel";
import  OrganSystemsPanel  from "./OrganSystemsPanel";

const mockPatient = {
  id: "1",
  name: "Andres Gaitán",
  age: 67,
  gender: "M",
  mrn: "MRN123456",
  unit: "UCI 1",
  bedNumber: "7",
  primaryDiagnosis: "Hipoglucemia Severa",
  comorbidities: ["Hipertension", "Diabetes tipo 2", "Enfermedad renal crònica"],
};

const ICUDashboard = () => {
  const [activePanels, setActivePanels] = useState({
    vitals: true,
    scores: true,
    labs: true,
    organs: true,
  });

  return (
    <div className="space-y-6">
      <PatientHeader patient={mockPatient} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activePanels.organs && (
          <div className="lg:col-span-2">
            <OrganSystemsPanel />
          </div>
        )}
        {activePanels.vitals && (
          <div className="lg:col-span-2">
            <VitalSignsPanel />
          </div>
        )}
        {activePanels.scores && (
          <div className="lg:col-span-1">
            <ClinicalScoresPanel />
          </div>
        )}
        {activePanels.labs && (
          <div className="lg:col-span-1">
            <LabResultsPanel />
          </div>
        )}

      </div>
    </div>
  );
};

export default ICUDashboard