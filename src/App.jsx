import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AISupport } from './components/ai-support/AiSupport';
import Dashboard from './pages/Dashboard';
import { Layout } from './pages/Layout';
import { PatientCommunicator } from './components/patient-comunicator/PatientCommunicator';
import { PatientList } from './components/patient/PatientList';
import  ICUDashboard  from './components/icu-dashboard/ICUDashboard';
import { ClinicalEvaluation } from './components/clinical-evaluation/ClinicalEvaluation';
import DigitalRecords from './components/digilat-records/DigitalRecords';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="aiSupport" element={<AISupport />} /> 
        <Route path="patientsList" element={<PatientList />} /> 
        <Route path="patientComunicator" element={<PatientCommunicator/>}/>
        <Route path="patientDetail" element={<ICUDashboard />} />
        <Route path='clinicalEvaluation' element={<ClinicalEvaluation/>} />
        <Route path='digitalRecords' element={<DigitalRecords/>} />  
      </Route>
      </Routes>
    </Router>
  );  
}

export default App;