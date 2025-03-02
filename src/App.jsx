import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AISupport } from './components/ai-support/AiSupport';
//import { PatientList } from './components/patient/PatientList';
import Dashboard from './pages/Dashboard';
import { Layout } from './pages/Layout';
import { PatientCommunicator } from './components/patient-comunicator/PatientCommunicator';
//import PatientList from './components/PatientList';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="aiSupport" element={<AISupport />} /> 
        <Route path="patientComunicator" element={<PatientCommunicator/>}/> 
      </Route>
      </Routes>
    </Router>
  );  
}

export default App;