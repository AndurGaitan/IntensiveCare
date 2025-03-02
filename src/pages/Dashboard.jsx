import { useState } from 'react';
import { AlertCircle, Mic, Search, UserPlus } from 'lucide-react';
import PatientHeader from '../components/icu-dashboard/PatientHeader';
import { AddPatientModal } from '../components/patient/AddPatientModal';


const Dashboard = () => {
  const mockPatient = [
    {
      id: '1',
      name: 'Andres Gaitán',
      age: 67,
      gender: 'M',
      mrn: 'MRN123456',
      unit: 'UCI 1',
      bedNumber: '7',
      primaryDiagnosis: 'Hipoglucemia Severa',
      comorbidities: [
        'Hipertensión',
        'Diabetes tipo 2',
        'Enfermedad renal crónica',
      ],
    },
    {
      id: '2',
      name: 'María López',
      age: 74,
      gender: 'F',
      mrn: 'MRN654321',
      unit: 'UCI 2',
      bedNumber: '3',
      primaryDiagnosis: 'Sepsis de origen urinario',
      comorbidities: ['Insuficiencia cardíaca', 'EPOC'],
    },
    {
      id: '3',
      name: 'Juan Pérez',
      age: 60,
      gender: 'M',
      mrn: 'MRN789012',
      unit: 'UCI 3',
      bedNumber: '5',
      primaryDiagnosis: 'Infarto agudo de miocardio',
      comorbidities: ['Hipertensión', 'Dislipidemia'],
    },
    {
      id: '4',
      name: 'Ana Martínez',
      age: 82,
      gender: 'F',
      mrn: 'MRN345678',
      unit: 'UCI 1',
      bedNumber: '2',
      primaryDiagnosis: 'Neumonía asociada a ventilación mecánica',
      comorbidities: ['Diabetes tipo 2', 'Osteoporosis'],
    },
    {
      id: '5',
      name: 'Carlos Ramírez',
      age: 55,
      gender: 'M',
      mrn: 'MRN987654',
      unit: 'UCI 4',
      bedNumber: '8',
      primaryDiagnosis: 'Shock séptico de origen abdominal',
      comorbidities: ['Hepatopatía crónica', 'Alcoholismo'],
    },
    {
      id: '6',
      name: 'Beatriz Gómez',
      age: 70,
      gender: 'F',
      mrn: 'MRN321987',
      unit: 'UCI 2',
      bedNumber: '10',
      primaryDiagnosis: 'ACV isquémico con compromiso neurológico',
      comorbidities: ['Fibrilación auricular', 'Hipertensión'],
    },
    {
      id: '7',
      name: 'Ricardo Torres',
      age: 64,
      gender: 'M',
      mrn: 'MRN741852',
      unit: 'UCI 3',
      bedNumber: '1',
      primaryDiagnosis: 'Síndrome de distrés respiratorio agudo (SDRA)',
      comorbidities: ['EPOC', 'Diabetes tipo 2'],
    },
    {
      id: '8',
      name: 'Sofía Herrera',
      age: 77,
      gender: 'F',
      mrn: 'MRN963852',
      unit: 'UCI 5',
      bedNumber: '6',
      primaryDiagnosis: 'Insuficiencia renal aguda en paciente con sepsis',
      comorbidities: ['Hipertensión', 'Insuficiencia renal crónica'],
    },
  ];

 
  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A89FB]"
          />
        </div>
        <button className="px-4 py-2 bg-[#0A89FB] text-white rounded-lg flex items-center space-x-2 hover:bg-[#0A89FB]/90">
          <Mic className="h-5 w-5" />
          <span>Voice Input</span>
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#DCFCE7] text-black rounded-lg flex items-center space-x-2 hover:bg-[#9FF5BD]/90"
        >
          <UserPlus className="h-5 w-5" />
          <span>Agregar Paciente</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPatient.map((patient) => (
          <PatientHeader key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
