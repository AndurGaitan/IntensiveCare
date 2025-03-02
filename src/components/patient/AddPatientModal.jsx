import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

export const AddPatientModal = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const patient = {
      name: formData.get('name'),
      age: parseInt(formData.get('age')),
      roomNumber: formData.get('roomNumber'),
      diagnosis: formData.get('diagnosis'),
      status: formData.get('status'),
      vitalSigns: {
        heartRate: parseInt(formData.get('heartRate')),
        bloodPressure: formData.get('bloodPressure'),
        temperature: parseFloat(formData.get('temperature')),
        oxygenLevel: parseInt(formData.get('oxygenLevel')),
      },
    };

    onSubmit(patient);
    form.reset();
  };

  return (    
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h3" className="text-lg font-medium">
                    Add New Patient
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Formulario con campos de entrada */}
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Name
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="block text-sm font-medium">
                      Age
                      <input
                        type="number"
                        name="age"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </label>
                    <label className="block text-sm font-medium">
                      Room Number
                      <input
                        type="text"
                        name="roomNumber"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Diagnosis
                      <input
                        type="text"
                        name="diagnosis"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Status
                      <select
                        name="status"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        <option value="Stable">Stable</option>
                        <option value="Critical">Critical</option>
                        <option value="Recovering">Recovering</option>
                      </select>
                    </label>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Vital Signs</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="block text-sm font-medium">
                        Heart Rate (bpm)
                        <input
                          type="number"
                          name="heartRate"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </label>
                      <label className="block text-sm font-medium">
                        Blood Pressure
                        <input
                          type="text"
                          name="bloodPressure"
                          placeholder="120/80"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </label>
                      <label className="block text-sm font-medium">
                        Temperature (°C)
                        <input
                          type="number"
                          name="temperature"
                          step="0.1"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </label>
                      <label className="block text-sm font-medium">
                        Oxygen Level (%)
                        <input
                          type="number"
                          name="oxygenLevel"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0A89FB] text-white rounded-lg hover:bg-[#0A89FB]/90 transition-colors"
                    >
                      Add Patient
                    </button>
                  </div>
                </form>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
