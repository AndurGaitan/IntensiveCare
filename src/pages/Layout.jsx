import React, { useState } from 'react';
import { Menu, Bell, Moon, Sun, Settings } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <img className='w-12 h-12' src="./ICNicon.png" alt="IconoICM" />
            <span className="text-lg font-semibold">IntensiveCare</span>
          </div>
          <nav className="space-y-2">
            {[
              { name: 'Dashboard', path: '/dashboard' },
              { name: 'Patientes Kinesiología', path: '/patientsList' },
              { name: 'AI Support', path: '/aiSupport' },
              {name:'Critical Conect', path: '/patientComunicator'},
              {name:'Paciente Critico', path: '/patientDetail'},
              {name:'Evaluaciones', path:'/clinicalEvaluation'},
              {name:'Grafico Evaluaciones', path:'/digitalRecords'}
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="block w-full text-left p-3 rounded-lg hover:bg-[#98D8EF] transition-colors"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div
        className={`transition-all duration-200 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
      >
        <header
          className={`h-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm flex items-center justify-between px-4`}
        >
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-6 w-6" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </header>
        
        <main className="p-6"><Outlet/></main>
      </div>
    </div>
  );
};
