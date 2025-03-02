import React, { useState } from "react";
import { Plus } from "lucide-react";
import { AddPatientModal } from "./AddPatientModal";
import { PatientCard } from "./PatientCard";

const mockPatients = [
  {
    id: "1",
    name: "John Doe",
    age: 45,
    roomNumber: "201",
    diagnosis: "Post-operative recovery",
    status: "Stable",
    vitalSigns: {
      heartRate: 75,
      bloodPressure: "120/80",
      temperature: 37.2,
      oxygenLevel: 98,
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 62,
    roomNumber: "205",
    diagnosis: "Respiratory distress",
    status: "Critical",
    vitalSigns: {
      heartRate: 92,
      bloodPressure: "135/85",
      temperature: 38.5,
      oxygenLevel: 92,
    },
  },
];

export const PatientList = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPatient = (newPatient) => {
    const patientWithId = {
      ...newPatient,
      id: Math.random().toString(36).substr(2, 9),
    };
    setPatients([...patients, patientWithId]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Patientes</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#0A89FB] text-white rounded-lg hover:bg-[#0A89FB]/90 transition-colors"
        >
          <Plus size={20} />
          Agregar Paciente
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
      <AddPatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPatient}
      />
    </div>
  );
};
